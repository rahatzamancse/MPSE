var t='Thu Nov 21 10:42:14 2019';
var steps=295;
 var costhistory=[16081.28,15983.25,16061.79,15751.33,15572.97,15596.18,14890.55,15415.5 ,
 15516.01,15472.11,14640.32,15175.95,14676.23,14950.12,14501.97,14792.05,
 14483.04,14237.53,13880.78,14001.15,13727.23,13842.33,13683.5 ,13793.16,
 13714.95,13963.3 ,13229.13,14017.72,13530.42,13103.69,13666.96,13249.57,
 12355.2 ,12944.7 ,13207.7 ,12743.01,13075.58,12312.32,13293.23,13094.74,
 13089.96,12373.74,12464.08,12716.5 ,12600.24,12429.52,12585.34,12487.44,
 11724.09,12103.78,12443.58,12798.6 ,12553.72,11896.74,11980.87,11464.3 ,
 11277.42,11060.97,12632.91,11686.58,11430.55,11665.18,12137.63,12058.77,
 11656.96,11704.13,11961.88,11556.34,11363.38,11956.11,11667.47,11875.53,
 11388.6 ,11812.67,11843.34,11795.5 ,11624.79,10440.03,11253.18,11265.48,
 11078.16,11432.59,11250.74,11460.81,11404.53,11205.19,11633.31,11199.41,
 11186.2 ,11495.9 ,11357.54,10972.7 ,10879.6 ,11387.33, 9985.06,10906.4 ,
 11846.97,10827.2 ,11484.3 ,10440.  ,11184.18,11568.99,10836.08,10642.47,
 10499.52,10756.8 ,10148.25,11030.88,10375.87,10342.56,10159.15,10186.55,
 10982.19,10475.93,10849.75,10186.5 ,10891.29,10323.24,10471.39,10526.87,
  9781.96,10552.52, 9903.03, 9950.04,10566.96,10619.53, 9794.98,10445.8 ,
  9763.09,10476.26,10407.6 , 9844.33, 9838.  ,10281.44,10257.33,10261.56,
 10059.06, 9394.58,10101.61,10204.12,10109.67, 9874.9 , 9541.05, 9269.96,
  9950.31, 9933.03,10373.77, 9454.11, 9842.3 , 9439.72, 9793.27,10105.59,
 10152.29, 9917.01, 9499.82,10418.5 ,10514.77,10180.31,10381.36, 9662.55,
 10188.28, 9741.81, 9649.14, 9227.32, 9984.84, 9999.68,10527.44, 9624.78,
  9780.72, 9715.41, 9398.46,10233.07, 9605.63, 9696.2 ,10433.3 ,10156.76,
  9649.79, 9415.56, 9025.44, 9479.11, 9725.35, 9473.76, 9888.1 ,10191.45,
  9377.43, 9846.7 , 9281.69, 9302.93, 9417.61, 9788.66, 9531.8 , 9624.21,
  9605.01, 9185.54, 9536.34,10199.33, 9197.91, 8883.91, 8891.9 , 9356.91,
  9505.19, 9438.98, 9240.58, 9089.17, 9025.41, 8849.58, 8685.37, 8602.78,
  8549.89, 8522.85, 8504.84, 8489.91, 8479.3 , 8446.89, 8427.52, 8402.84,
  8392.53, 8378.48, 8374.73, 8372.43, 8358.33, 8357.67, 8351.89, 8343.03,
  8334.3 , 8329.6 , 8326.77, 8324.45, 8309.92, 8262.73, 8156.27, 8121.75,
  8121.8 , 8116.09, 8115.87, 8115.55, 8115.09, 8114.75, 8114.61, 8114.54,
  8114.49, 8114.44, 8111.07, 8109.04, 8107.33, 8105.96, 8097.87, 8070.79,
  7974.87, 7783.75, 7567.61, 7541.7 , 7506.72, 7506.02, 7505.54, 7504.87,
  7504.61, 7504.6 , 7504.5 , 7504.49, 7504.49, 7504.46, 7504.46, 7504.46,
  7504.45, 7504.45, 7504.45, 7504.45, 7504.45, 7504.45, 7504.45, 7504.45,
  7504.45, 7504.45, 7504.45, 7504.45, 7504.45, 7504.45, 7504.45, 7504.45,
  7504.45, 7504.45, 7504.45, 7504.45, 7504.45, 7504.45, 7504.45, 7504.45,
  7504.45, 7504.45, 7504.45, 7504.45, 7504.45, 7504.45, 7504.45];
var proj=[[[1.,0.,0.],
 [0.,0.,0.],
 [0.,0.,1.]],[[1.,0.,0.],
 [0.,1.,0.],
 [0.,0.,0.]],[[0.,0.,0.],
 [0.,1.,0.],
 [0.,0.,1.]],];
var points=[[0.7164865922837841, -0.17977273936037477, 0.3556924318534977], [-0.48990438910498074, 1.3695953767897548, -0.7690384534176667], [0.42993471515756365, -0.35693826701425996, 0.41896298699491746], [-0.5976952715658397, -0.17704380906219194, -0.1969838321536164], [0.37891042536491376, -0.1660150053640862, 0.45091786252171356], [0.33860679136800625, -0.2158511312970089, 0.4594701770821524], [-0.393816784341261, 0.8376178691161464, -0.9893876534077954], [1.193864908673257, 1.6279117230169513, 0.030879015380617172], [-0.6842628266547438, -0.18262454434755437, -0.17958032287171682], [0.4247830358779423, -0.15212313708150482, 0.437789009887203], [-0.5370527274228026, 0.723447553498331, -1.0104529943683216], [-1.0451634981851115, -0.33711136262248254, -0.1367434923549574], [-0.8895205333833521, -0.2762735261065817, -0.15265896714440186], [0.8344682834315995, -0.21334709148304418, 0.3261406279200629], [-0.46921048326364906, -0.27474370128399056, -0.2354433844502739], [0.5198537818398564, -0.14891115943683308, 0.409949051107767], [0.3446779210675732, -0.18818369117595743, 0.4598650622835664], [-0.8216956673318471, -0.24728182956951586, -0.16073352429760432], [-0.6842320068039821, -0.18255672916924542, -0.1796088845201905], [-0.6212244450163661, 0.7953106148800736, -0.9645779170131801], [0.4247151935243623, -0.1521137532539254, 0.43786246000394385], [-0.4629292008476496, -0.3364210480021515, -0.2418927875381607], [-1.5707119847267441, -1.3548240792047133, -0.1414701373094826], [-0.811597365312748, -0.24180021018172698, -0.16191212500457994], [0.42464895363855704, -0.15199995821217993, 0.43793754182783884], [-0.7812780769906549, -0.22529931877323017, -0.16563019709748394], [-0.684286125149837, -0.18254575705098636, -0.17954442961375078], [0.3504981767504463, -0.1773391346807501, 0.4589267141171915], [0.8551482373000641, 1.3264617221321409, 0.1443131561080832], [0.3241909087113416, 1.0063444652889348, 0.6653397694021079], [-0.8307231359332184, -0.8109996221897511, -0.1964755507010994], [-0.6842893432827077, -0.1824876239878947, -0.17951362836724516], [-0.7812236244051869, -0.22544119021692133, -0.16567493014055326], [1.5058311973043295, -0.5108987005340903, 0.20038148896666796], [-0.4629092458572822, 0.7262323170114288, -1.0222687395002241], [-0.5370945747237701, 0.7235736304842006, -1.0103429256097907], [-0.46410685355868586, -0.31508269318228493, -0.23994269861299097], [0.37894766276735364, -0.16605257643801774, 0.45087954391134477], [-0.7410882613940977, -0.20753106604404953, -0.17114681151837075], [0.4922951807990711, 1.0194723572097852, 0.5461100089122075], [0.7164758917424506, -0.1797251446287466, 0.35572419926586907], [-0.46287035488412553, -0.3363774416153858, -0.2419499488892208], [-0.597710509998655, -0.176995900246584, -0.19695101730113337], [-0.5531687270777362, 0.7343999389779656, -1.0029422634555885], [0.7164972744727449, -0.179820337117653, 0.35566066486639086], [-0.7812349817372886, -0.22539318667332095, -0.1656319172136927], [-0.46299138366043663, -0.33653041399723493, -0.24189343243855915], [-0.7411103048269635, -0.20747900942318045, -0.17111566834415032], [-0.6147298133910741, -0.17778902756889597, -0.19335099869189792], [1.5058634245753606, -0.5108340367222439, 0.200363849542683], [-0.7611820202925004, 1.0520927481149835, -0.8245473625521901], [1.7324294258291362, -2.40595774663023, -0.018427518147786898], [0.3871602273280792, -0.3118138355378121, 0.4359845839627552], [-0.4048786554661941, 1.1110582456803746, -0.8792656929746083], [0.3681374087816552, -0.28944766647753967, 0.4438894405538127], [-0.3806904847539689, 0.8707853746751909, -0.9784281706713601], [-0.8895732047026436, -0.2761647405288669, -0.15260312354218614], [0.3681940517075859, -0.2894828976233445, 0.44384580202907215], [1.5058838271819388, -0.5107690948588915, 0.20039515189683457], [1.7324809723409214, -2.40591944935711, -0.01846781278624427], [-0.4777641266255022, -0.23825983126562505, -0.23029432351588566], [0.499790019931183, 0.4461972165707446, 0.6423369412845845], [1.0609682546219616, 1.5047901252579807, 0.060404385418015294], [-0.5371154609476494, 0.7236366941123321, -1.010287879669259], [0.6129207907160543, -0.14933183858034105, 0.3843653261995265], [0.6129402173110268, -0.14937716142786867, 0.38433199845343996], [-0.3806476059647556, 0.8707317565328561, -0.978481938782941], [0.8344157260837464, -0.2133621828701434, 0.32621817446381174], [-0.5308758444844859, -0.1992138217223043, -0.21407101904057813], [0.6129596295471641, -0.14942248930725696, 0.3842986710285414], [0.49234433396329036, 1.019512509434279, 0.5459659969403388], [0.34124410457773247, -0.20164787640014953, 0.45982475648621035], [0.8344341942073779, -0.21342607735209052, 0.3261553938608749], [0.519827608608582, -0.1488685686564109, 0.4099839879578658], [-0.46286372515778634, 0.7261040311565589, -1.0223774573905675], [-0.46293253205636375, -0.33648685726201605, -0.24195060856870856], [-0.5370736635702809, 0.7235105836512783, -1.0103979638234568], [0.4246790247037697, -0.15204826920708023, 0.43790325783202255], [-0.761189999944801, -0.2164039083846663, -0.16832611979023474], [-0.5531512232690947, 0.7343337879662699, -1.0029986609445651], [-0.8895468813162615, -0.27621913374713014, -0.15263105147445083], [-0.8217217092152986, -0.24722709077968208, -0.16070415936007262], [0.5198014250299863, -0.14882598536990999, 0.4100189265054033], [0.8344498056612047, -0.21328319384664673, 0.32620340787436786], [-1.1398458718235103, -1.054478763905916, -0.16678378555204837], [0.5805635556064993, 1.0880626881800288, 0.42891410650201706], [-0.3807388215468615, 0.9774893844113961, -0.9358776871837613], [-0.6316157556726367, -0.1787612401240197, -0.18987067000112612], [-0.866386564342238, -0.26685740405232006, -0.1553409059278468], [-0.7812696999911062, -0.22535195112899659, -0.16556541468434685], [-0.4662065300247056, -0.29449254411191467, -0.23778790796478333], [-0.49811498669568166, -0.2191393158434701, -0.22365504670411615], [0.4247493780410938, -0.15204416112290145, 0.43782777062571804], [-0.6842213432094966, -0.1826535805827578, -0.17964410878016757], [1.1685783243846346, 0.8080066107866866, 0.28044718403009244], [0.38710247379539175, -0.3117820000880741, 0.43602863256494717], [-0.4628864718661361, 0.7261681682477287, -1.0223231039357539], [-0.7813128053178593, -0.2252581049280671, -0.16556368341707373], [-0.4392196405412889, 1.2196398339128562, -0.8318074557064321], [-0.7813240873193419, -0.2252101027350991, -0.16552066411172475]];