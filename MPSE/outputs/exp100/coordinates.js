var t='Mon Apr 20 15:18:46 2020';
var steps=100;
 var costhistory=[0.6 ,0.58,0.56,0.55,0.54,0.5 ,0.46,0.41,0.38,0.37,0.37,0.34,0.31,0.29,
 0.23,0.16,0.09,0.05,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04];
var proj=[[[1.,0.,0.],
 [0.,1.,0.]],[[1.,0.,0.],
 [0.,0.,1.]],];
var points=[[-0.7659655937837324, 0.6227755893664634, -0.6690825576537834], [-0.7257365859737213, 0.6733238228554644, -0.6711974283341304], [-0.6588063862103933, 0.7160105933959194, -0.6663871178738142], [-0.6045308336454085, 0.7532621632878326, -0.6653144539885347], [-0.5420275818677349, 0.7866724334755559, -0.6692346622320939], [-0.4911535008448932, 0.8343239396207035, -0.6668569689120701], [-0.42787444135930813, 0.8701110426991342, -0.6677125755036725], [-0.3724148768418599, 0.884777794533152, -0.6804159387391331], [-0.30346015612597266, 0.909353728197147, -0.6738586030425128], [-0.25572987389378976, 0.9334893921827555, -0.6773385923900899], [-0.17494728662296835, 0.9433368624820566, -0.688050654378978], [-0.11888230145804185, 0.9635660372636831, -0.6873431986566424], [-0.05528962723261997, 0.9728994314208611, -0.6953784620942997], [0.0013890225718136764, 0.9733137442062644, -0.6985668240395514], [0.058809122406396436, 0.9744592417970452, -0.7067436630046865], [0.13268769422763874, 0.9642828464794676, -0.7084726577195248], [0.18440388722314352, 0.950346156459448, -0.7137884771704465], [0.24304604764321805, 0.9505587408560655, -0.7185832335752359], [0.3151603585407788, 0.9447424406678252, -0.7232660698373029], [0.3753214372610794, 0.912679404196328, -0.733008741356461], [0.4522203515084024, 0.8921976101072041, -0.731499129814406], [0.4938140697146038, 0.8662024790572391, -0.7421699156134749], [0.5627984047397819, 0.8385375861545135, -0.7485016008248669], [0.611166369610338, 0.8013775671882235, -0.7498405902718426], [0.674586039633431, 0.7524090766475007, -0.7635418453592399], [0.7337921682435865, 0.7203181492970515, -0.7745689592280296], [0.7483298783852016, 0.6773061143778287, -0.7006856025266012], [0.7665544119610775, 0.6252499795462702, -0.6374659530483424], [0.7941581725659398, 0.5828471277804006, -0.5766157441378774], [0.8131679615809758, 0.5260243061068737, -0.5095331548064518], [0.8315728304102985, 0.4788250279352265, -0.445682656692719], [0.8470635557279774, 0.43203204329799716, -0.382950189924065], [0.8872136532965059, 0.35148358770459204, -0.329456896239228], [0.9454826261802345, 0.3079910828043787, -0.26320030791477406], [0.8976795456089977, 0.2558871839211358, -0.20662815048866653], [0.8851486706836963, 0.18566049926098613, -0.13790231792707972], [0.9134219041307492, 0.11664909164373051, -0.08186013904877305], [0.9164383517724782, 0.056610703744058063, -0.02189253527598614], [0.9439040161278726, -0.015138204386386024, 0.035969175612781054], [0.91567412016886, -0.0691488632822471, 0.11149672769734005], [0.9269860212983011, -0.13161326800919665, 0.15376907741289264], [0.9249451894521402, -0.208951355190828, 0.2295126283020674], [0.9367653695675048, -0.26322815096822566, 0.2858648757405922], [0.9193706392920485, -0.32587734350454334, 0.35800387756698604], [0.895017120783378, -0.3778760427013011, 0.4147745681934982], [0.8942377113891018, -0.4408700309329926, 0.47266137280347614], [0.8886851326377591, -0.5033443013195621, 0.5322080203782341], [0.8817379571102104, -0.561259203457492, 0.6002207786511113], [0.8593418832531519, -0.6085323014113244, 0.6662036226215039], [0.8517558434978599, -0.657974323931648, 0.7334314588317948], [0.8498309427772313, -0.7120741483731036, 0.8034685354769967], [0.7787373126350635, -0.7584456766408091, 0.8020024136098399], [0.7364668762697777, -0.8037330920373663, 0.8043180301577042], [0.6713175106258517, -0.8440804003229897, 0.807668315211285], [0.6111217919008124, -0.8750126002016855, 0.8026814297956548], [0.5357649437034219, -0.9096571194416467, 0.8007603247516721], [0.5008552996917175, -0.9488112560414876, 0.8120216074541917], [0.4217377431219397, -0.9768064481026756, 0.8094887493159122], [0.37271168708145597, -0.9966677262764443, 0.8178318596983507], [0.30255400394129045, -1.021711950866451, 0.8102148952507554], [0.25596470734698334, -1.0372995136770249, 0.8224083440458655], [0.19656500913750896, -1.0562041368430277, 0.8322039557847756], [0.12001351632807307, -1.05696504367772, 0.8346686371547111], [0.06478498758144907, -1.0645493859291508, 0.8337061447987509], [-0.00334640077114974, -1.065060554449617, 0.8401823836879347], [-0.06042972639821647, -1.0654139019058781, 0.833618146736115], [-0.1164880995623285, -1.0475359233900545, 0.850128509768631], [-0.18446016602474252, -1.0379349999308145, 0.8646630393208616], [-0.24346717781064503, -1.0285074218381793, 0.8576959914844551], [-0.3015684522237363, -1.0060768399403341, 0.8783099111627225], [-0.35667069062607054, -0.9835672079615158, 0.8644098414127398], [-0.4221244896493663, -0.9573194349496503, 0.8819611321210935], [-0.48660801306020934, -0.9271542090682547, 0.8789072114139868], [-0.5481592799080567, -0.8887129470562585, 0.8969678897977292], [-0.6059750105564817, -0.855967347371119, 0.9027999778027163], [-0.6558493305662707, -0.8153419973262328, 0.904948438467705], [-0.6862836185426042, -0.772306790025285, 0.840013175631518], [-0.7121657383046976, -0.7224995653302295, 0.7750027664368], [-0.7140537450539984, -0.6796061209986924, 0.7002903171487153], [-0.7604275045464947, -0.6246782776488774, 0.6445178002850571], [-0.7809144697566918, -0.5639201417947048, 0.5781041706747883], [-0.7738799017544253, -0.511688605511062, 0.5221076681058023], [-0.7696719873561939, -0.45637763836315115, 0.4522559707176864], [-0.7789505614736425, -0.39404159890368984, 0.39084538913315203], [-0.7933747267492253, -0.3326912975830838, 0.33309598438830385], [-0.849696917469983, -0.2790172546298216, 0.27173518489431425], [-0.8385519915753822, -0.2176685151237112, 0.21704007606129236], [-0.859829678179686, -0.14432623428258637, 0.14229908559342933], [-0.8537705211353502, -0.0872899267281347, 0.09097934911177245], [-0.8466971336228913, -0.03196549306689939, 0.03163999565966599], [-0.8516865664802353, 0.036497215375753636, -0.041133798302174514], [-0.8707439997717115, 0.11033975774601873, -0.0997278077602586], [-0.8542147507412696, 0.1707354913561914, -0.15057351022088503], [-0.8520058997443216, 0.23671841750643818, -0.22311548933922262], [-0.8490953967905335, 0.2984580717213249, -0.27850911964610375], [-0.8295272899546733, 0.35006088873768676, -0.3503160931635331], [-0.8139163879585468, 0.4080843811625616, -0.40413073456825926], [-0.8049586912762035, 0.4646955232151769, -0.46794827047612403], [-0.7795767936934185, 0.5145036044023596, -0.5343459586591798], [-0.7714185755904173, 0.5663333943648021, -0.6042941455243461]];