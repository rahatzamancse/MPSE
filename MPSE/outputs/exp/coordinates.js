var t='Thu Nov 21 12:45:25 2019';
var steps=239;
 var costhistory=[2262.  ,2260.18,2358.68,2475.43,2140.33,2073.11,2299.  ,1963.25,1915.24,
 1903.98,1714.31,1780.79,2154.88,1947.28,2061.85,1645.04,2150.96,1810.08,
 1926.57,1835.99,1743.89,1641.59,1766.4 ,1473.96,1611.74,1423.1 ,1638.74,
 1595.92,1419.15,1677.53,1334.68,1354.78,1439.6 ,1648.74,1633.03,1727.1 ,
 1394.46,1850.26,1137.06,1333.46,1785.7 ,1344.34,1615.11,1471.75,1462.02,
 1505.82,1288.81,1159.65,1312.3 ,1241.72,1061.62,1214.97,1598.03,1314.59,
 1291.36,1233.55,1369.04,1173.29,1247.52,1369.91,1106.24,1417.02,1055.17,
 1127.23,1280.15, 913.39, 862.87,1004.91,1086.35,1030.37,1000.89,1296.68,
 1560.36,1417.63,1388.47,1281.21,1170.32,1210.88,1310.65,1057.52, 829.38,
 1366.23,1163.04, 869.56,1057.15, 960.37, 884.9 , 927.54,1121.67, 986.28,
  967.44, 942.46,1305.3 ,1317.12, 863.42, 804.12, 697.04, 897.94, 842.08,
 1125.01,1522.01, 818.47,1023.56,1448.03,1187.42,1040.44, 905.34, 819.94,
  752.24, 896.18, 780.33,1087.28,1047.83,1155.61, 641.63,1029.1 , 686.1 ,
  946.11,1336.3 ,1037.54,1102.51, 870.54, 864.63, 994.93, 771.77, 900.58,
 1101.57,1042.82, 772.5 , 949.11, 631.19, 671.47,1096.66,1229.27, 517.36,
 1278.3 ,1129.27, 962.25, 681.7 , 605.14,1088.58,1026.36,1055.24, 482.26,
  761.36, 964.94, 761.65,1107.16, 867.93, 525.69, 847.76,1036.5 , 791.2 ,
  859.94, 694.57,1157.28,1013.47,1026.67, 802.89, 632.48, 571.15, 861.81,
  705.91, 850.99, 627.34, 937.68, 957.78, 761.02, 728.39, 943.98, 768.86,
  604.02, 705.26, 953.65, 975.65, 973.57, 527.04, 686.01, 908.7 , 913.9 ,
  781.04, 608.96,1044.55,1446.72, 946.23, 726.06, 745.42, 716.43, 551.48,
 1034.62, 969.34, 647.98,1236.21, 720.4 ,1025.63, 608.92, 817.32, 704.89,
  643.36, 541.97, 814.48, 696.21, 623.51, 580.51, 578.98, 537.65, 522.05,
  521.33, 508.61, 505.46, 502.35, 500.71, 498.71, 497.95, 496.6 , 496.36,
  495.38, 495.32, 494.71, 494.6 , 494.37, 494.34, 494.18, 494.16, 494.08,
  494.07, 494.02, 494.01, 493.99, 493.99, 493.98, 493.98, 493.97, 493.97,
  493.97, 493.97, 493.96, 493.96, 493.96];
var proj=[[[1.,0.,0.],
 [0.,0.,0.],
 [0.,0.,1.]],[[1.,0.,0.],
 [0.,1.,0.],
 [0.,0.,0.]],[[0.,0.,0.],
 [0.,1.,0.],
 [0.,0.,1.]],];
var points=[[-0.03851145686915982, 0.5808604124246659, -0.3013662386322982], [-0.5881071854003483, 1.2018020744337365, -0.5277839160984271], [-0.5788386424152024, -0.7971945346206752, 0.12164474619648051], [-0.22771901033911499, -0.13173268765043472, 0.6020907922238703], [-0.21471966324180997, -0.2930082516117954, 0.4667784308843126], [-0.3115509078014071, -0.526262768560575, 0.5970919647431369], [-0.1288562844926702, 0.2527240683089943, 0.32441425293539], [1.3046500394091363, 1.6764926074617814, -1.6956821573903955], [-0.3106528848807406, -0.3685236761814891, 0.5651855986229524], [-0.24443159456898483, -0.12716700899831093, 0.26908725976123843], [-0.30304174442794074, -0.3709073319440282, 0.6077745275146966], [-0.4156379397929452, -1.1897674301989236, -0.516366323324222], [-0.3059614381643324, -0.8694268990195939, 0.4356563472002623], [0.2234537483436942, 0.7308791105153328, -0.5023757097675529], [0.05283183371355199, 0.3978960554048892, 0.048393493672322846], [-0.08069403469877605, 0.0841311707057751, 0.40090778408039174], [-0.30089128803751486, -0.42417342250240253, 0.6779772982782393], [-0.4383613774510535, -0.6975234721350896, 0.3194024112529713], [-0.29892165889056543, -0.37219205630957736, 0.6049318673655042], [-0.4088629823816675, -0.601318902715052, 0.3480510682947976], [-0.19159811748998098, -0.14257346785038386, 0.45028814668596906], [-0.1051896615816886, 0.5918496855789951, -0.2429228227975567], [0.09235862505890927, 3.2015365723658147, -1.9762818372081499], [-0.46842920858313947, -0.657635939818423, 0.881171381605691], [-0.2261298602845445, -0.13221860726151397, 0.48031205099201063], [-0.33740764606836365, -0.6229183773875351, 0.28602142003111974], [-0.2770815022726515, -0.3790434401949366, 0.5159277450079744], [-0.27338356285809096, -0.3801703288828738, 0.6234173415262585], [0.47389085805588, 1.131691946663581, -0.973512749020667], [-0.3252361940542026, -0.6253956514916363, 0.5915312881096382], [-1.550933815954722, 0.40953016397285225, 0.48958340130510175], [-0.3052134545250841, -0.3702429470362071, 0.5996585110784328], [-0.42931751386831746, -0.5929975240049647, 0.5388075424044031], [0.5175396376511457, -2.043163658584751, -0.26634959972033145], [-0.23286586174996654, -0.13025019490054404, 0.3588938013968715], [-0.30905262787280235, -0.36901923577589, 0.6421470294198965], [-0.0683130629687222, 0.5389580789819035, 0.06869910317542642], [-0.2585494311564511, -0.2791577358148542, 0.2547954562038555], [-0.3730148331129718, -0.5076133597007706, 0.5438564002230506], [-0.1166090355184597, 0.350296696268762, 0.3086754978283511], [-0.06364929145566968, 0.5862723253515298, 0.21303345668539858], [-0.04450539285270061, 0.5823035109237344, 0.4221119485357452], [-0.19068518179577856, -0.14283026606036986, 0.3975124301858715], [-0.2670542864995669, -0.43329876881631124, 0.6447679556729718], [-0.09257994674637601, 0.5905357908172117, -0.06319916595812956], [-0.38793690276601683, -0.608834428329379, 0.8578904186255224], [-0.031052672297569243, 0.5790131203183577, 0.01540075422395959], [-0.3714640986076115, -0.5081582867255539, 0.32846064795921603], [-0.19600141894377524, -0.19268776443527055, 0.5095615482090736], [-0.7609674778669959, 2.123416221620926, -1.8222105109844158], [-0.33968649723725197, -1.0192728784763905, 0.08825946929422884], [1.5080194506012077, 3.8553321614358924, -0.9355234570303013], [-0.4350987299687972, -0.7515408273773635, 0.31266146147693974], [0.20176597661497309, 0.7426311405935644, -0.11621568362888159], [-0.43904027763923587, -0.6972838807388043, 0.634885774054601], [-0.07073704096061025, 0.3389752903457302, -0.13000789415105937], [-0.4294351713692347, -0.8553113475296613, 0.7030996709222892], [-0.38464545066726363, -0.7137066745452667, 0.8317709824411071], [0.005286761161328737, 2.219469648534676, -0.11357480800089563], [3.6056052649901256, 1.8004476021414473, -1.7050085268568778], [-0.04089963213349661, 0.3302985140010359, 0.09731696172767634], [-0.060558505177704725, 0.33617563034506176, 0.12157912925023617], [1.562203052996469, 0.6043593148039942, -0.1524522567564027], [-0.2710660565421439, -0.3808744963444461, 0.35883137434481893], [-0.033072603522535125, 0.3278589943517667, 0.41482656496920534], [-0.027290385977802513, 0.32596458866190886, 0.3179206065992911], [-0.09273877407649617, 0.34470711450903563, 0.1372386017150432], [0.19887822016914114, 0.7441064147667581, 0.7454877568015627], [-0.0980910306785362, 0.08957604024735429, 0.014218318162759699], [-0.10778214011845329, 0.3482944398376811, 0.02925262744693865], [-0.11984290879620045, 0.3510243470487352, 0.24428529631592943], [-0.36377930717596313, -0.456573469257129, 0.5815391747223917], [0.15350628648954864, 0.7657174263856945, 0.5887233779053861], [-0.06047257638211212, 0.0775024885877905, 0.1933826357067659], [-0.19195548647753155, -0.142455856021606, 0.35454460486235345], [-0.021125542757779527, 0.5763359990557535, 0.42631419197512505], [-0.27183788431799544, -0.38061938522080263, 0.6154281459085448], [-0.2143960539260084, -0.13554043169784094, 0.3174706498952601], [-0.3431159839016633, -0.5704763567413212, 0.6777265132086566], [-0.32869717641669166, -0.41515517610720537, 0.6449964783926887], [-0.6469545705778867, -0.7500060119829182, 0.7506363973855116], [-0.35106309229775, -0.7203393729602017, 0.7176891707158836], [-0.156507879195794, 0.10653074112869224, 0.4083182305194486], [0.2578904222084008, 0.7105689803477963, -0.03354403098119913], [1.850028639184284, -0.7834037889487245, -1.5143000443533354], [-0.11190636043887989, 0.5924668463137778, -0.0022958896564407366], [0.13778583676886874, 0.5081003751498511, 0.2601179868526761], [-0.2512299935175673, -0.2288205454653808, 0.6224438621164736], [-0.538270878578932, -0.7625608227227788, 0.4859205615820052], [-0.3083454073439507, -0.6283079158804008, 0.5876046264123057], [-0.06668244541234687, 0.48867780463945754, 0.14216003362750876], [-0.1198207031003228, 0.25031931702582483, -0.05503687197360633], [-0.25199594274516895, -0.12517140639885188, 0.37149234730452857], [-0.3079788764239116, -0.3693998630505905, 0.3527866959444879], [-0.016979739561120737, 1.751396075367214, -1.0989353185363566], [-0.520956079656904, -0.7143907469578715, 0.8057928688653888], [-0.20746916536979235, -0.1376581474891578, 0.5754859529659988], [-0.41426905157185673, -0.599191513526435, 0.2533172729345114], [-0.23119467759156817, 1.0051202836805337, 0.48744500589791195], [-0.33411557942389236, -0.6236203824197623, 0.3271647665348563]];