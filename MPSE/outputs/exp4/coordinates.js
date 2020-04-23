var t='Sat Apr 18 22:07:19 2020';
var steps=100;
 var costhistory=[0.6 ,0.59,0.56,0.55,0.55,0.52,0.53,0.51,0.49,0.47,0.48,0.44,0.41,0.4 ,
 0.38,0.37,0.36,0.34,0.32,0.28,0.23,0.15,0.09,0.08,0.07,0.07,0.07,0.07,
 0.06,0.07,0.06,0.06,0.06,0.06,0.07,0.06,0.06,0.07,0.06,0.06,0.06,0.06,
 0.06,0.07,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,
 0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,
 0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,
 0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,0.06,
 0.06,0.06];
var proj=[[[-0.229312,-0.854417,-0.466249],
 [ 0.392657,-0.519509, 0.758901]],[[-0.460779, 0.076537,-0.884209],
 [ 0.181883, 0.983273,-0.009671]],];
var points=[[0.24726224457629073, -1.08775801753128, 0.1142520766888719], [-6.405363871502716e-05, -1.0297533325404475, 0.29653489921100196], [0.06304616991685058, -1.0009632865257512, 0.3116275608629375], [-0.09312893894827082, -0.9461960652919624, 0.4497705234741799], [0.23400742253623816, -0.9327358304977225, 0.32394643463655276], [0.5254445575583632, -0.9089476346885814, 0.22737690660108203], [0.6098768582133509, -0.8797505500545363, 0.24550087008627677], [0.13125476645593567, -0.7964215386003922, 0.5536484283243377], [0.6690656241184298, -0.7936322524837336, 0.30186845571702436], [0.252311624778233, -0.7131732959960047, 0.6092564466049413], [0.3405306401742297, -0.6725044018484249, 0.5752853953919755], [0.5481487324091391, -0.6354123472266492, 0.4810788232482832], [0.2882284717520792, -0.5621716416299931, 0.6783487123815943], [0.4287575105174372, -0.5468095590271693, 0.6790601505867548], [0.7348859052861313, -0.49959489123318945, 0.5393739508453217], [0.871632339967671, -0.4694333411858243, 0.4960716758396048], [0.3283599746286495, -0.341433154559286, 0.8265472122646365], [0.5576220619382769, -0.3091689402248891, 0.7197197957268769], [0.41777797256742677, -0.2431032624393996, 0.8426218617114903], [0.283267681007265, -0.16690235986847643, 0.9411921843438641], [0.8963749070010827, -0.17327270328072658, 0.6624301143610143], [1.0330866831016718, -0.12207168898207796, 0.5994490834577478], [0.2039728340223915, 1.83102784085884e-05, 1.0725655078626646], [0.6047964135433174, 0.029174602374879517, 0.876104534086416], [1.000776629701636, 0.055128116873538774, 0.6966775475397552], [0.6823649136038094, 0.1318620040805984, 0.8682861840781034], [0.7963269399008229, 0.17196943165251116, 0.7739398306919199], [0.4107289235716922, 0.25894535828898463, 0.930429831283878], [0.21977817855359258, 0.32442174897851156, 0.9822631638008815], [0.5206311193143962, 0.33053407557312553, 0.796658521136862], [0.20807963153920483, 0.42008991003444457, 0.9200780503174381], [0.028252485879432545, 0.4786804554469876, 0.9682145121936393], [-0.20089026426913714, 0.5392324073249714, 1.0362751718967467], [-0.5285733614302961, 0.6169050254433763, 1.145382745063233], [-0.42749766135054823, 0.651791833995929, 1.0418277284925568], [0.28471077684357715, 0.6088791301254134, 0.6143553419986577], [0.020849216146791208, 0.6697477725905097, 0.6999212902471983], [-0.16028232256827354, 0.7445137906615938, 0.7557470610830885], [-0.6699346950109674, 0.8082382101506876, 0.954799336043102], [-0.3948252677364102, 0.8220572582292858, 0.7630025785925092], [-0.41805759047756563, 0.8538885548662855, 0.6937242433401206], [0.48809851829995066, 0.8189181715996954, 0.16692307517369429], [0.47349479225297747, 0.8429668260357195, 0.10537215829496999], [-0.44633611016780134, 0.9300054841332664, 0.520343375428593], [0.5503220034732197, 0.8607750858580878, -0.06104023401748228], [-0.7215783164978535, 1.0041807569311891, 0.5462807260499537], [0.47768623158255724, 0.9262935645574072, -0.14297997285389258], [0.033493073754532705, 0.9804284237851632, 0.02217890180522181], [-0.021979975657581106, 0.9982814903363131, -0.019662716405150757], [0.28284020826122463, 0.9917897041014644, -0.22434455532537137], [0.3330065433706857, 0.9952980249311334, -0.32644831499482335], [-0.01719916074511981, 0.9902982606160006, -0.18935874309017703], [-0.06164303344892399, 0.949819845834022, -0.22554437368106664], [0.4393830061540035, 0.8695954887373655, -0.5429990467916921], [-0.16228399955139527, 0.9060021207395892, -0.2865941957730716], [-1.0973404019726278, 0.9410672195070141, 0.17410685489794264], [0.2350764314646065, 0.7535841738098351, -0.5898525757073554], [-0.11712668694185766, 0.7614132692211474, -0.45596094957498456], [0.14129271846884522, 0.6876367046605042, -0.6429056413629272], [-0.5398963539319172, 0.7055327386997726, -0.3496051762966261], [-0.8115169508019447, 0.6587742939031448, -0.23567286857349157], [-1.1749686732303573, 0.6472753857819541, -0.0878117724171752], [-1.1000171495849516, 0.6051252422072927, -0.18745486944836737], [-0.5323441271551697, 0.4995081209659394, -0.5343821693663742], [-0.046633472029864516, 0.3682115189705344, -0.8073721700705643], [-0.9802089993527482, 0.4314115163556405, -0.3569551834352802], [-0.4775675936344385, 0.3195695496170274, -0.6614216180487136], [-0.3213559135386217, 0.2515532602493695, -0.7537307752262014], [-1.0238754594693442, 0.26298788194842526, -0.448112166051558], [-0.4582889925930509, 0.14010388873241225, -0.7485045338248615], [-0.6464847017357048, 0.11096497112334945, -0.6964344864437865], [-0.12035528447872652, 0.013453112042013209, -1.0097404321261196], [-0.28195711151110064, -0.042422562503395864, -0.9176859208296467], [-0.1729476887116978, -0.11173217080139107, -1.0061043873921351], [-0.8481020982269888, -0.1098829269100399, -0.6828326155068616], [-0.17183104576124358, -0.2209862870190049, -1.037884375879029], [-0.4816040806443971, -0.2385999480004101, -0.8388123874529142], [-0.011878039890217134, -0.3336432401013566, -1.04426670604169], [-0.5235418330112777, -0.3367553417879811, -0.7459883119987953], [0.3142269443788364, -0.44867125576685485, -1.1279555779629062], [0.0616482430498818, -0.47746256195929265, -0.9575922685671094], [0.03932253771374304, -0.5176834478804256, -0.9076845193174721], [-0.2910397308888048, -0.5248658665397895, -0.6683664947819022], [0.39445501536150757, -0.62821496345458, -0.9929778978792994], [-0.43373245000465377, -0.58901253960268, -0.4952011998658138], [0.02425981382178677, -0.6750339556458697, -0.6700470172460864], [0.01708539707301895, -0.7106128350024736, -0.626561999297829], [0.3294823409638148, -0.7753505835470897, -0.7230601487502836], [0.08392429787142869, -0.8066652243503691, -0.5530820001810899], [-0.32026685830584395, -0.7880964241590035, -0.2756984284776458], [0.6525895149488096, -0.9079932147178585, -0.7161864822400946], [0.025215398065179414, -0.8849089820850937, -0.34470669354100675], [-0.012854637805319107, -0.9062247532655197, -0.25149359737324534], [-0.13413294344398055, -0.9235709593700272, -0.12654572158155006], [0.155566967630006, -0.9634708700838278, -0.22645234648629803], [0.1286126476483759, -1.0045547562942412, -0.14590463926138905], [0.41062404224161825, -1.039077065747631, -0.2227279270288741], [0.36925201310836875, -1.0545626786571303, -0.13480143944068984], [0.4141050638420264, -1.0725161599871755, -0.10018979322330311], [0.07758235530702226, -1.0655650230322453, 0.1449673032353862]];