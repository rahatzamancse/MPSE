var t='Thu Sep 12 14:43:08 2019';
var steps=101;
  var cost=nan;
var costhistory=[76278.96447450823, 60402.85915882578, 51891.346700580565, 47654.26004719117, 45159.321254891016, 43498.36029158244, 42233.618925751136, 41189.52908914935, 40309.18419043586, 39576.04873895267, 38928.88495620534, 38338.177769192276, 37839.02413749081, 37455.34802854711, 37175.25848053112, 36972.26625724049, 36819.88528181891, 36694.754461853474, 36583.174095638395, 36473.87143610577, 36362.44645713128, 36254.74858408397, 36157.344373702545, 36070.69040812555, 35990.69898775345, 35912.58776618272, 35828.984318063965, 35733.27975244933, 35631.54236771028, 35529.652368293006, 35428.96955302564, 35322.865438972556, 35206.91071887567, 35092.56093445611, 34980.98023708237, 34866.36897307741, 34748.212566364484, 34634.16383875551, 34522.070204366064, 34404.909108035434, 34275.36083778912, 34133.030713622036, 33986.45090562149, 33850.62752803175, 33736.77755374358, 33647.415281616224, 33575.56670578925, 33514.18910829426, 33457.66139386524, 33401.500451283, 33345.273433867966, 33289.32347053467, 33236.76568878145, 33187.81379403432, 33140.47971941547, 33091.690047519165, 33037.990023419916, 32976.22702008095, 32903.99156178592, 32822.54855480866, 32732.718231441097, 32632.933325743856, 32521.354079513945, 32398.884198631134, 32272.210015729834, 32143.45174713772, 32008.724455591608, 31858.88709257817, 31699.459495050978, 31541.539453103076, 31394.90864197346, 31255.76265494597, 31129.660683299713, 31020.63960866363, 30930.261698331138, 30857.528541688254, 30799.32908802479, 30751.73679074974, 30711.276375025645, 30675.07614591171, 30640.72899477542, 30606.480540607103, 30571.276290653554, 30535.33234942412, 30500.140534837727, 30467.49223427295, 30438.184147307293, 30411.831230838052, 30387.27106630087, nan, nan, nan, nan, nan, nan, nan, nan, nan, nan, nan, nan];
var proj=[[[1.,0.,0.],
 [0.,0.,0.],
 [0.,0.,1.]],[[1.,0.,0.],
 [0.,1.,0.],
 [0.,0.,0.]],[[0.,0.,0.],
 [0.,1.,0.],
 [0.,0.,1.]]];
var points=[[nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan], [nan, nan, nan]];