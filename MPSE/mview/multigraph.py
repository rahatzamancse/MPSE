import numbers, copy, math
import numpy as np
import networkx as nx

### Functions to set up distance graph and multigraphs ###

# A (distance) graph is a dictionary containing the following attributes:
# 'node_number' : number of nodes
# 'edge_number' : number of edges
# 'edges' : a list or array containing the edges of the graph
# 'distances' : a list or array containing the edge distances of the given edges
# (it must have the same length as the list of edges)
# Other possible attributes are:
# 'weights' : a list or array containing the edge weights of the given edges (it# must hqve the same length as the list of edges)

### Check and setup graph ###

def graph_check(D, distances=True, weights=False):
    assert 'node_number' in D
    assert 'edge_number' in D
    assert 'edges' in D
    assert len(D['edges']) == D['edge_number']
    if distances is True:
        assert 'distances' in D
        assert len(D['distances']) == D['edge_number']
    if weights is True:
        assert 'weights' in D
        assert len(D['weights']) == D['edge_number']

def graph_setup(D, distances=True, weights=False,**kwargs):
    if isinstance(D,np.ndarray):
        shape = D.shape; assert len(shape)==2; assert shape[0]==shape[1]
        D = graph_from_matrix(D,**kwargs)
    else:
        graph_check(D)
    return D

### Edit graph ###

def remove_edges(D, edge_min_distance=None, edge_max_distance=None,
                 edge_remove_probability=None, **kwargs):
    """\
    Removes edges from graph dictionary as specified.
    
    Parameters:

    D : dictionary
    Graph dictionary.

    min_distance : boolean
    If set to True, removes edges whose distance is less than or equal to
    min_distance.

    max_distance : None or number
    If set to a number, removes edges whose distance is greater than 
    max_distance.

    edge_probability : None or number
    If set to a number, removes edges with probability given by
    edge_probability.
    """
    if edge_min_distance is None and edge_max_distance is None and \
       edge_remove_probability is None:
        print('hi')
        return D
    
    edges = D['edges']; distances = D['distances']; weights = D['weights']
    
    if edge_min_distance is not None:
        keep_indices = []
        for i in range(len(edges)):
            if distances[i] > edge_min_distance:
                keep_indices.append(i)
        edges = edges[keep_indices]
        distances = distances[keep_indices]
        weights = weights[keep_indices]

    if edge_max_distance is not None:
        keep_indices = []
        for i in range(len(edges)):
            if distances[i] < edge_max_distance:
                keep_indices.append(i)
        edges = edges[keep_indices]
        distances = distances[keep_indices]
        weights = weights[keep_indices]

    if edge_remove_probability is not None:
        keep_indices = []
        for i in range(len(edges)):
            if np.random.rand() <= edge_remove_probability:
                keep_indices.append(i)
        edges = edges[keep_indices]
        distances = distances[keep_indices]
        weights = weights[keep_indices]

    D['edges'] = edges
    D['distances'] = distances
    D['weights'] = weights

    return D

### Generate graph ###

def graph_from_coordinates(X,norm=2,edges=None,weights=None,colors=None,
                           **kwargs):
    """\
    Returns dictionary with dissimilarity measures from coordinates.

    Parameters :

    X : (N,dimX) array_like
    Array containing coordinates of N points of dimension dimX.

    norm : number (>=1) or function
    If isinstance(norm,Number), this is the Minkowski p-norm with p=norm.
    If callable(norm), then use this as a norm.

    edges : None or float or array_like
    If edges is None: all edges are included.
    If isinstance(edges,Number): only edges with distance<edges are included.
    if isinstance(edges,array_like): this is the list of edges.

    weights : None or number or function or array_like
    If weights is None, w_ij = 1
    If weights is a number, w_ij = 1/Dij**int
    If callable(weights), w_ij = weights(D_ij)
    If array_like, w_ij = weights[i,j]
    """
    N = len(X)
    if isinstance(norm,numbers.Number):
        p = norm
        assert p >= 1
        norm = lambda x: np.sum(x**p)**(1.0/p)
    else:
        assert callable(norm)

    if edges is None or isinstance(edges,numbers.Number):
        NN = int(N*(N-1)/2)
        e = np.empty((NN,2),dtype=int)
        d = np.empty(NN)
        if edges is None:
            it = 0
            for i in range(N):
                for j in range(i+1,N):
                    e[it] = [i,j]
                    d[it] = norm(X[i]-X[j])
                    it += 1
        else:
            it = 0
            for i in range(N):
                for j in range(N):
                    Dij = norm(X[i]-X[j])
                    if Dij <= edges:
                        e[it] = [i,j]
                        d[it] = norm(X[i]-X[j])
                        it += 1
            NN = it
            e = e[0:NN]
            d = d[0:NN]
    else:
        NN = len(edges)
        e = np.array(e,dtype=int)
        d = np.empty(NN)
        for i in range(NN):
            d[i] = norm(X[e[i,0]]-X[e[i,1]])

    if weights is None:
        w = np.ones(NN)
    elif weights == 'relative':
        w = d**(-2)
    elif callable(weights):
        w = np.empty(NN)
        for i in range(NN):
            w[i] = weights(d[i])
    else:
        w = weights

    if colors is not None:
        if isinstance(colors,int):
            colors = misc.labels(Y,axis=colors)
    DD = {
        'node_number' : N,
        'node_labels' : range(N),
        'edge_number' : len(e),
        'edges' : e,
        'distances' : d,
        'weights' : w,
        'colors' : colors
        }
    return DD

def graph_from_matrix(D,remove_zeros=True,transformation=None,weights=None):
    """\
    Returns diccionary with dissimilarity relations from dissimilarity matrix.
    
    Parameters:

    D : (N,N) array_like
    Matrix containing pairwise distances/dissimilarities/similarites.

    transformation : None or string or callable
    If None, distances are given by d[(i,j)] = D[i,j].
    Otherwise, distances are given by d[(i,j)] = f(D[i,j]) (unless f(D[i,j]) is
    None, in which case the edge is omitted), where f is determined by the
    given transformation.
    If string, options are 'binary' and 'reciprocal'.
    If callable, f = transformation.

    weights : None or 'relative' or function or array_like
    If weights == None, w_ij = 1
    If weights == 'relative', w_ij = 1/D_ij^2
    If callable(weights), w_ij = weights(D_ij)
    If array_like, w_ij = weights[i,j]
    """
    N = len(D); NN = int(N*(N-1)/2)
    e = np.empty((NN,2),dtype=int)
    d = np.empty(NN)

    if transformation is None:
        it = 0
        for i in range(N):
            for j in range(i+1,N):
                if D[i,j] != 0:
                    e[it] = [i,j]
                    d[it] = D[i,j]
                    it += 1
    else:
        if transformation == 'binary':
            def f(x):
                if x == 0:
                    y = None
                else:
                    y = 1
                return y
        elif transformation == 'reciprocal':
            def f(x):
                if x == 0:
                    y = None
                else:
                    y = 1/x
                return y
        else:
            assert callable(transformation)
            f = transformation
        it = 0
        for i in range(N):
            for j in range(i+1,N):
                Dij = f(D[i,j])
                if Dij is not None:
                    e[it] = [i,j]
                    d[it] = Dij
                    it += 1
    e = e[0:it]
    d = d[0:it]
    w = np.ones(len(e))
    
    DD = {
        'node_number' : N,
        'node_label' : range(N),
        'nodes' : range(N),
        'edges' : e,
        'distances' : d,
        'weights' : w
        }
    return DD

### Check and setup multigraph ###

def multigraph_check(DD):
    """\
    Checks/complete multigraph dictionary DD.
    """
    assert 'attribute_number' in DD
    assert 'attribute_labels' in DD
    assert 'node_number' in DD
    for attribute in DD['attribute_labels']:
        graph_check(DD[attribute])

def multigraph_setup(D0,**kwargs):
    """\
    Sets up distance multigraph from array or list or dictionary.

    If D0 is a an array or list of arrays, then it is assumed that it consists 
    of square matrices containing pairwise distances.
    
    If D0 is a dictionary, it is assumed that it already contains the distance
    graphs.
    """
    if isinstance(D0,np.ndarray):
        if len(D0.shape) == 2:
            K=1; (N,NN) = D0.shape; assert N==NN
            D0 = [D0]
        else:
            assert len(D0.shape) == 3
            (K,N,NN) = D0.shape; assert N==NN

    if isinstance(D0,list) or isinstance(D0,np.ndarray):
        DD = {}
        DD['attribute_number'] = K
        DD['node_number'] = N
        
        DD['attribute_labels'] = range(K)
        DD['node_labels'] = range(N)
        
        for i in range(K):
            if isinstance(D0[i],np.ndarray):
                DD[i] = graph_from_matrix(D0[i],**kwargs)
            else:
                graph_check(D0[i])
                DD[i] = D0[i]
                
    elif isinstance(D0,dict):
        multigraph_check(D0)
        DD = D0
        K = DD['attribute_number']; N = DD['node_number']
    else:
        sys.error('incorrect type for dissimilarity matrice(s)/graph(s)')

    DD['normalization'] = 0
    DD['rms'] = 0
    for k in range(K):
        D = DD[k]
        assert 'edges' in D
        assert 'distances' in D
        if 'weights' not in D:
            D['weights'] = np.ones(len(D['edges']))
        D['distances'] = np.maximum(D['distances'],1e-4)
        d = D['distances']; w = D['weights']
        D['normalization'] = np.dot(w,d**2)
        D['rms'] = math.sqrt(D['normalization']/len(d))
        DD[k] = D
        DD['normalization'] += D['normalization']**2
        DD['rms'] += D['rms']**2
    DD['normalization'] **= 0.5
    DD['rms'] **= 0.5
    
    return DD

### Generate multigraph ###

def multigraph_from_projections(proj,Q,X,**kwargs):
    """\
    Generates list of graphs generated from objects X using projection rule proj
    with parameters Q.

    X : numpy array
    Positions of objects

    persp : perspective object
    Describes perspectives on X.
    """
    DD = {}
    DD['attribute_number'] = len(Q)
    DD['attribute_labels'] = range(len(Q))
    DD['node_number'] = len(X)
    DD['node_labels'] = range(len(X))
    Y = proj.project(Q,X)
    for k in range(len(Q)):
        D = graph_from_coordinates(Y[k],**kwargs)
        D = remove_edges(D,**kwargs)
        DD[k] = D
    return DD

def set_weights(D,function=None,scaling=0):
    """\
    Sets weights of dissimilarity graph as specified by given function or
    scalling number.

    D : dictionary
    Dissimilarity graph. Contains list of edges and distances.

    function : None or callable
    If a callable is given, assigns weight w=function(d) to an edge with 
    distance d.

    scaling : number
    If function is None, then assigns weights w=1/d**scaling to an edge with
    distance d.
    """
    distances = D['distances']; NN = len(distances)
    weights = np.ones(NN)
    if function is not None:
        assert callable(function)
        for nn in range(NN):
            weights[nn] = function(distances[nn])
    elif scaling != 0:
        assert isinstance(scaling,numbers.Number)
        for nn in range(NN):
            weights[nn] = distances[nn]**(-scaling)
    D['weights'] = weights

def remove_edges0(D,number=None,proportion=0.2):
    """\
    Reduces number of edges in graph by eliminating far away neighbors.
    """
    d = D['distances']
    if number is not None:
        assert number < len(d)
    else:
        number = int(len(d)*proportion)
    ind = np.argpartition(d,number)[0:number]
    
    D = copy.deepcopy(D)
    D['edges'] = D['edges'][ind]
    D['distances'] = D['distances'][ind]
    D['weights'] = D['weights'][ind]

    return D

def sim2dict(S,mapping='reciprocal',connect_paths=None,connect_components=None):
    return

def combine(DD,method='maximum'):
    """\
    Combine dissimilarity matrices.
    """
    N = len(DD['nodes'])
    K = len(DD['attributes'])
    D = np.zeros((N,N))
    for k in range(K):
        for edge,distance in zip(DD[k]['edges'],DD[k]['distances']):
            D[edge] = max(D[edge[0],edge[1]],distance)
    D = from_matrix(D)
    return D

### GENERATORS ###

def generate_physical(N,dim=3):
    """\
    Generates a dissimilarity graph from the distances of coordinates.
    """
    X = misc.disk(N,dim=dim)
    D = from_coordinates(X)
    return D

def binomial(N,p,distances=None,K=1):
    """\
    Generates a binomial graph (or Erdos-Renyi graph).

    Parameters:

    N : int
    Number of nodes.

    p : float, 0<p<=1
    Probability of edge creation

    distances : None or 'random'
    If None, distances are all one. If random, distances are distributed 
    uniformly at random between 0 and 1.

    K : int > 0
    Number of graphs.
    """
    assert isinstance(p,float); assert 0<p<=1
    D = {}
    for k in range(K):
        edges = []
        for i in range(N):
            for j in range(i+1,N):
                if np.random.rand() <= p:
                    edges.append((i,j))
        edges = np.array(edges)
        if distances is None:
            dist = np.ones(len(edges))
        elif distances == 'random':
            dist = np.random.rand(len(edges))
        d = {
            'nodes' : range(N),
            'edges' : edges,
            'distances' : dist
        }
        D[k] = d
    D['attributes'] = range(K)
    D['nodes'] = range(N)
    return D

### OLDER ###

def coord2dist(X,p=2):
    """\
    Returns distance matrix for a set of points with coordinates X.

    --- Parameters ---

    X : (N,dimX) array_like
    Array containing coordinates of N points of dimension dimX.

    p : float, 1 <= p <= Inf
    Which Minkowski p-norm to use.
    
    --- Returns ---

    D : (N,N) ndarray
    Array containing pairwise distances between points in X.
    """
    from scipy.spatial import distance_matrix
    D = distance_matrix(X,X,p)
    return D

def sim2dist(S,shortest_path=True,connect_components=True,connect_factor=2.0):
    assert isinstance(S, np.ndarray); assert (S>=0).all()

    N = len(S)
    D = np.zeros((N,N))
    for i in range(N):
        for j in range(N):
            if j != i:
                if S[i,j] == 0:
                    D[i,j] = np.nan
                else:
                    D[i,j] = 1.0/S[i,j]

    if shortest_path is True:
        G = nx.Graph()
        for i in range(N):
            for j in range(N):
                if np.isnan(D[i,j]) == False:
                    G.add_edge(i, j, weight=D[i,j])
        paths = dict(nx.shortest_path_length(G,weight='weight'))
        for i in range(N):
            for j in range(N):
                if j in paths[i].keys():
                    D[i,j] = paths[i][j]

    if connect_components is True:
        max_dist = np.nanmax(D)
        for i in range(N):
            for j in range(N):
                if np.isnan(D[i,j]):
                    D[i,j] = connect_factor*max_dist

    return D

def dmatrices(X,input_type='coordinates',**kwargs):
    assert input_type in ['coordinates','similarities']
    K = len(X); N = len(X[0])
    D = np.empty((K,N,N))
    if input_type is 'coordinates':
        for k in range(K):
            D[k] = coord2dist(X[k],**kwargs)
    elif input_type is 'similarities':
        for k in range(K):
            D[k] = sim2dist(X[k],**kwargs)
    return D

### Main function ###

input_types = ['coordinates','similarities']

algorithms = {
    'coordinates' : coord2dist,
    'similarities' : sim2dist
    }

def compute(X,input_type='coordinates',**kwargs):
    assert input_type in input_types
    algorithm = algorithms[input_type]
    if isinstance(X,np.ndarray) and len(X.shape)==2:
        D = algorithm(X,**kwargs)
    elif isinstance(X,np.ndarray) and len(X.shape)==3:
        K,N,_ = X.shape
        D = np.empty((K,N,N))
        for k in range(K):
            D[k] = algorithm(X[k],**kwargs)
    elif isinstance(X,list):
        D = []
        for x in X:
            D.append(algorithm(x,**kwargs))
    else:
        sys.exit('Incorrect form.')
    return D

def clean(D,epsilon=1e-3,verbose=0):
    if np.sum(D==0)>len(D):
        D += epsilon
        if verbose > 0:
            print(f'  distances.clean(): {epsilon:0.2e} added to D')

##### Functions to add noise to distance/dissimilarity matrices #####

def add_relative_noise(D,sigma):
    """\
    Returns a noisy copy of a distance/dissimilarity matrix D. The error is 
    relative, meaning that an entry D[i,j] of D is perturbed by gaussian noise 
    with standard deviation sigma*D[i,j]. The noisy matrix remains symmetric.
    """
    N = len(D); D_noisy = D.copy()
    for i in range(N):
        for j in range(i+1,N):
            noise_factor = 1+sigma*np.random.randn()
            D_noisy[i,j] *= noise_factor
            D_noisy[j,i] = D_noisy[j,i]
    return D_noisy

def add_noise(D,sigma,noise_type='relative'):
    if noise_type == 'relative':
        noise_function = add_relative_noise

    if isinstance(D,np.ndarray) and len(D.shape)==2:
        D_noisy = noise_function(D,sigma)
    elif isinstance(D,np.ndarray) and len(D.shape)==3:
        K,N,_ = D.shape
        D_noisy = np.empty((K,N,N))
        for k in range(K):
            D_noisy[k] = noise_function(D[k],sigma)
    elif isinstance(D,list):
        K = len(D)
        D_noisy = []
        for k in range(K):
            D_noisy.append(noise_function(D[k],sigma))
    else:
        sys.exit('Incorrect form.')
    return D_noisy

class MultiGraph(object):
    """\
    Class of multigraphs to be used in MPSE.
    """

    def __init__(self,N,node_labels=None,dissimilarities=None):
        self.N = N
        
        if node_labels is None:
            node_labels = range(N)
        self.set_node_labels(node_labels)

        if dissimilarities is not None:
            K = len(dissimilarities)
            self.D = dissimilarities
            self.K = K

    def set_node_labels(self,node_labels):
        assert len(node_labels) == self.N
        self.node_labels = node_labels

    def from_perspectives(self,X,persp,**kwargs):
        Y = persp.compute_Y(X)
        D = []
        for y in Y:
            D.append(from_coordinates(y,**kwargs))
        self.D = D
        self.K = len(D)

    def generate_binomial(self,K=1,p=0.1,distance=None,**kwargs):
        D = []
        for k in range(K):
            D.append(generate_binomial(self.N,p=p,distances=None))
        self.D = D
        self.K = K
        
    def average_distances(self):
        return

### TESTS ###

def test_florence_distances():
    S = np.load('../multigraphs/florence/similarity_matrices.npy')
    #print(S)
    D = sim2dist(S[0])
    print(D)

if __name__ == '__main__':
    test_florence_distances()
