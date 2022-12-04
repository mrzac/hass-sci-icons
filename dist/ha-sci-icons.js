const SCI_ICONS_MAP = {
  
  "adguard":{
    path:"m 12,2.225925 c -3.0552129,0 -6.7400392,0.7012899 -9.774075,2.2439647 C 2.225925,7.8012203 2.1843852,16.102668 12,21.774075 21.815615,16.102668 21.774075,7.8012203 21.774075,4.4698897 18.740039,2.9272149 15.055212,2.225925 12,2.225925 Z M 11.91366,14.792942 7.8109924,10.054959 c 0.2696015,-0.1946669 1.4253859,-0.9309805 2.2757306,0.03421 l 1.781325,2.107942 c 0.0073,-8.14e-4 4.72495,-4.8446834 4.736353,-4.8365384 0.200369,-0.1791914 0.565269,-0.4096966 0.980666,-0.082264 z", 
    keywords: ["adguard","dns","parental"]
  },
  "bitwarden":{
    path:"m 4.5978945,2.5134851 c -0.2422313,0 -0.4118934,0.072671 -0.5814552,0.242233 C 3.8468763,2.9252814 3.7742064,3.1191657 3.7742064,3.3371732 V 13.17176 c 0,0.726692 0.1450586,1.453405 0.4357354,2.180101 0.2906784,0.726693 0.629907,1.356606 1.0659229,1.913737 0.4117934,0.557131 0.9207766,1.114087 1.5021313,1.622777 0.5813547,0.532908 1.1140881,0.969031 1.6227745,1.308154 0.4844604,0.339127 1.01748,0.678164 1.550387,0.993063 0.5329085,0.3149 0.9203025,0.532818 1.1383105,0.629713 0.218008,0.121115 0.412084,0.194167 0.533199,0.266836 0.09688,0.04845 0.21763,0.07241 0.338749,0.07241 0.121114,0 0.242328,-0.02394 0.339218,-0.07241 0.145341,-0.04846 0.315191,-0.145721 0.533199,-0.266836 0.218007,-0.121116 0.6054,-0.314813 1.13831,-0.629713 0.532908,-0.314899 1.065926,-0.653936 1.550387,-0.993063 0.484462,-0.339123 1.04142,-0.79947 1.622774,-1.308154 0.581358,-0.532907 1.090342,-1.065646 1.502135,-1.622777 0.41179,-0.557131 0.774768,-1.21127 1.065448,-1.913737 0.290676,-0.726696 0.436208,-1.453409 0.436208,-2.180101 V 3.3371732 c 0,-0.2180075 -0.07268,-0.4118918 -0.242234,-0.5814551 C 19.7373,2.5861574 19.543416,2.5134851 19.325405,2.5134851 Z m 7.3635215,2.107243 h 6.055836 v 8.6238889 c 0,3.560803 -6.055836,6.63682 -6.055836,6.63682 z", 
    keywords: ["bitwarden","vaultwarden","password"]
  },
  "docker":{
    path:"m23.6 8.3738c-.2396 0-.4341.1945-.4341.4341v2.6044c0 .2396.1945.4341.4341.4341h2.6044c.2396 0 .4341-.1945.4341-.4341V8.8078c0-.2396-.1945-.4341-.4341-.4341zM13.1825 13.5825c-.2396 0-.4341.1945-.4341.4341v2.6044c0 .2396.1945.4341.4341.4341h2.6044c.2396 0 .4341-.1945.4341-.4341v-2.6044c0-.2396-.1945-.4341-.4341-.4341zm5.2088 0c-.2396 0-.4341.1945-.4341.4341v2.6044c0 .2396.1945.4341.4341.4341h2.6044c.2396 0 .4341-.1945.4341-.4341v-2.6044c0-.2396-.1945-.4341-.4341-.4341zm5.2088 0c-.2396 0-.4341.1945-.4341.4341v2.6044c0 .2396.1945.4341.4341.4341h2.6044c.2396 0 .4341-.1945.4341-.4341v-2.6044c0-.2396-.1945-.4341-.4341-.4341zm13.0032 1.9974-.3934.5646c-.4922.7587-.8505 1.5944-1.0614 2.4721-.3985 1.6781-.1574 3.2536.6986 4.6-1.0339.5738-2.7966.7712-3.1317.7833H5.8035c-.9593 0-1.7363.777-1.7363 1.7363 0 1.7363.3765 4.2752 1.2038 6.5245.9454 2.469 2.3529 4.2874 4.1829 5.4004 2.0505 1.251 5.3822 1.9652 9.1594 1.9652 1.7059.0053 3.4095-.1487 5.0867-.4595 2.3318-.4263 4.5754-1.2376 6.6381-2.4009 1.6998-.9801 3.2292-2.2275 4.5305-3.6929 2.1747-2.4516 3.4703-5.1824 4.4339-7.608.0043-.0024.0074-.0031.0119-.0069 2.6018.105 4.1766-.9002 5.0256-1.7363.5365-.507.9559-1.1259 1.2276-1.8109l.1696-.4968-.4103-.3222c-.1129-.0894-1.1678-.8834-3.3928-.8834-.5877.0024-1.1742.0537-1.7532.1509-.4306-2.9386-2.8697-4.373-2.9791-4.4373zM7.9738 18.7913c-.2396 0-.4341.1945-.4341.4341v2.6044c0 .2396.1945.4341.4341.4341h2.6044c.2396 0 .4341-.1945.4341-.4341v-2.6044c0-.2396-.1945-.4341-.4341-.4341zm5.2088 0c-.2396 0-.4341.1945-.4341.4341v2.6044c0 .2396.1945.4341.4341.4341h2.6044c.2396 0 .4341-.1945.4341-.4341v-2.6044c0-.2396-.1945-.4341-.4341-.4341zm5.2088 0c-.2396 0-.4341.1945-.4341.4341v2.6044c0 .2396.1945.4341.4341.4341h2.6044c.2396 0 .4341-.1945.4341-.4341v-2.6044c0-.2396-.1945-.4341-.4341-.4341zm5.2088 0c-.2396 0-.4341.1945-.4341.4341v2.6044c0 .2396.1945.4341.4341.4341h2.6044c.2396 0 .4341-.1945.4341-.4341v-2.6044c0-.2396-.1945-.4341-.4341-.4341zm5.2088 0c-.2396 0-.4341.1945-.4341.4341v2.6044c0 .2396.1945.4341.4341.4341h2.6044c.2396 0 .4341-.1945.4341-.4341v-2.6044c0-.2396-.1945-.4341-.4341-.4341z", 
    keywords: ["docker","container"]
  },
   "frigate":{
    path:"m 19.645057,2.0521406 c -0.05649,0.065901 -3.502181,1.1485654 -4.500115,1.4215846 -0.922618,0.2541907 -3.558668,1.261539 -3.935247,1.5063153 -0.12239,0.084731 -0.216533,0.2259471 -0.216533,0.3200917 0,0.094145 0.235361,0.5272104 0.517795,0.960276 0.640184,0.9791051 0.659013,1.2144665 0.178875,2.3442021 -0.470724,1.0920789 -0.762571,1.4404137 -1.525144,1.7981637 -0.3483349,0.160047 -0.7343285,0.395408 -0.866131,0.508381 -0.1318025,0.112974 -0.4707235,0.301264 -0.7531576,0.404823 -0.2824341,0.103559 -0.5272102,0.254191 -0.5460392,0.329506 -0.028244,0.122389 0.018829,0.122389 0.338921,0.01883 0.5083812,-0.178875 0.7719863,-0.09414 0.7719863,0.244776 0,0.301264 -0.3765787,0.564869 -1.3745124,0.979105 -2.391275,0.969691 -3.0879458,1.280368 -3.4080375,1.543973 -0.4895526,0.376579 -0.5554538,0.724914 -0.3012632,1.515729 0.103559,0.320092 0.1882893,0.687256 0.1882893,0.80023 0,0.197704 0.4989668,1.628704 1.2709536,3.662229 0.3106774,0.809644 0.9508611,1.929967 1.1109072,1.93938 0.047072,0 0.056486,-0.216534 0.01883,-0.480138 -0.056487,-0.423649 -0.1412171,-2.749022 -0.160046,-4.74489 -0.01883,-1.016761 0.1882893,-1.4969 0.9414468,-2.231229 0.7154996,-0.706086 1.7981635,-1.449827 2.7584397,-1.911137 0.640183,-0.301263 0.706084,-0.320092 1.440413,-0.263606 0.790815,0.05649 2.099426,-0.122387 2.814925,-0.376578 0.254192,-0.09415 0.489554,-0.103559 0.753159,-0.05649 0.508381,0.09415 3.737545,0.10356 3.737545,0.0094 0,-0.03766 -0.301264,-0.122388 -0.668428,-0.178874 -0.988519,-0.150632 -1.007348,-0.282435 -0.04706,-0.357751 1.562802,-0.131803 0.706085,-0.329506 -1.430999,-0.329506 -1.402756,0 -1.675776,-0.07532 -2.174741,-0.593112 -0.489553,-0.517795 -0.724916,-1.8734784 -0.470725,-2.7019522 0.05649,-0.178875 0.131803,-0.9414465 0.178874,-1.6946042 0.03765,-0.7531573 0.103561,-1.4404137 0.141219,-1.5345583 0.08473,-0.2165329 1.139151,-0.8284731 2.127669,-1.2332955 0.433066,-0.1788749 1.129736,-0.4707232 1.543973,-0.6495983 0.659013,-0.2824341 1.562802,-0.6684272 2.165328,-0.9132034 0.141216,-0.065902 0.103559,-0.084731 -0.197704,-0.084731 -0.207118,-0.00941 -0.404822,0.00941 -0.423651,0.028243 z", 
    keywords: ["frigate","video", "camera", "motion"]
  },
  "ngynx":{
    path:"m6.8235 7.9701q0 3.9908 0 7.9824a1.1093 1.1093 0 00.3139.799 1.2107 1.2107 0 001.5143.1514 1.1497 1.1497 0 00.5035-.9505c0-1.9259-.0037-3.8519 0-5.7778q2.6338 3.1535 5.2787 6.2983a2.0825 2.0825 0 001.9112.5748 1.1475 1.1475 0 00.9196-1.0078q.0059-4.0731 0-8.1456a1.1629 1.1629 0 00-2.317 0c0 1.9568-.0118 3.9114 0 5.8675C13.2232 11.7286 11.52 9.6777 9.8021 7.6371A2.0708 2.0708 0 007.8548 6.8638 1.1607 1.1607 0 006.8235 7.9701ZM12.1022 1.6939h.0478a7.6582 7.6582 0 01.7145.3881q3.9908 2.295 7.9816 4.5914a.5822.5822 0 01.3043.5793c-.0059 3.2263 0 6.4519-.0037 9.6767a.5976.5976 0 01-.2617.3727q-4.2437 2.4434-8.4881 4.8839a.4315.4315 0 01-.483.0272Q7.6651 19.7771 3.4244 17.3322A.5146.5146 0 013.1304 16.8426q0-4.8384 0-9.676A.5094.5094 0 013.4148 6.6741Q7.4005 4.3821 11.3862 2.0871c.2367-.1353.469-.2786.716-.3933",
    keywords: ["ngynx","proxy"]
  },
  "portainer":{
    path:"M12.4414 1.4916V2.3874L12.4326 2.3743 7.0855 5.462H4.4839v.6576H9.1767V9.3055H10.8774V6.1188h1.564v9.1213c.0237 0 .4729-.0088.6577.0797v-9.2001h.465v9.2894c.2566.1287.4816.2732.6576.4729V6.1205h5.2945V5.4638H18.4066L13.099 2.3988V1.4916Zm0 1.6376V5.462H8.4Zm.6577.0271 3.9932 2.3057H13.099ZM9.4972 6.1197H10.5568V7.5961H9.4972ZM5.3499 8.5103V10.2188H7.0505V8.5112Zm1.9178 0V10.2188H8.9674V8.5112ZM5.3499 10.4115v1.7085h1.7006v-1.7076zm1.9178 0v1.7085H8.9674v-1.7076zm1.909 0v1.7085h1.7006v-1.7076zm-3.8671 1.9651a3.2664 3.2664 0 00-.4326 1.6209c0 1.0745.5289 2.0211 1.3311 2.6148.2093-.0561.4177-.0876.634-.0963.0876 0 .1445.0088.2329.0166.2487-1.043 1.2111-1.7409 2.3337-1.7409.634 0 1.2593.176 1.6848.585.2005-.4168.2645-.8818.2645-1.3792 0-.5692-.1445-1.1314-.4326-1.62zm4.2279 2.7672c-1.0596 0-1.9493.7391-2.1822 1.7251a.8074.8074 0 00-.2408-.0078 2.2409 2.2409 0 00-2.2453 2.2383 2.2462 2.2462 0 002.7112 2.1892 2.2584 2.2584 0 001.9966 1.2199c.7549 0 1.4204-.3766 1.8302-.9466a2.2392 2.2392 0 003.6657-1.7251c0-.4965-.169-.9624-.4414-1.3311A2.2392 2.2392 0 0011.246 15.931 2.2541 2.2541 0 009.5375 15.1447Z",
    keywords: ["portainer","docker"]
  },
  "proxmox":{
    path:"m5.7317 2.9843c-.9639.4909-.9639.5666-.0624 1.5756 4.9995 5.5668 6.1957 6.883 6.2852 6.883.1247.0139 7.0522-7.557 7.1285-7.7846.0312-.0624-.1831-.2766-.4598-.4737-.3662-.2766-.7636-.3835-1.5133-.4146-1.4064-.0896-1.8967.2143-3.6422 2.1734-.7948.8843-1.4688 1.6207-1.4688 1.6207-.0139 0-.6701-.7185-1.4516-1.5896C9.7659 4.1035 8.865 3.2298 8.5605 3.0606 7.8553 2.6633 6.4183 2.6321 5.727 2.9843ZM2.5181 5.234c-.7497.2906-1.1471.5666-1.1471.7775 0 .1068 1.1782 1.4861 2.6019 3.0617 1.4376 1.5756 2.5986 2.8918 2.5986 2.9197 0 .0312-1.1782 1.3474-2.6019 2.923-1.4376 1.5896-2.5847 2.9821-2.5674 3.1028.0763.4146 1.3302.9361 2.2457.9361 1.4861-.0173 1.8211-.2766 4.9584-3.7178 1.5756-1.7275 2.8574-3.1964 2.8574-3.2448 0-.059-1.2678-1.496-2.8262-3.2103C6.6021 6.5635 5.6069 5.5684 5.1339 5.3541 4.4154 5.0018 3.2544 4.9428 2.5181 5.2333ZM18.8548 5.3408c-.4458.2282-1.5617 1.3302-3.4896 3.4418-1.5584 1.7136-2.8302 3.1512-2.8302 3.2103 0 .0624 1.2857 1.5166 2.8613 3.2448 3.134 3.4418 3.4723 3.7006 4.9551 3.7178.9188 0 2.1734-.5214 2.2497-.9361.0139-.138-1.1331-1.5133-2.5708-3.0889-1.4204-1.5723-2.5986-2.9058-2.5986-2.937 0-.0279 1.1782-1.3613 2.5986-2.937 1.4376-1.5723 2.5847-2.9509 2.5708-3.0716-.0763-.3974-1.2094-.8571-2.1873-.9188-.7052-.0312-1.0714.0312-1.5584.2766zM8.4059 16.3841c-1.8967 2.0971-3.4551 3.8697-3.4863 3.946-.0312.0624.1831.2766.4598.4737.3662.2766.7636.3835 1.5133.4146 1.3925.0896 1.9107-.2315 3.6694-2.2185.7669-.8571 1.4237-1.5756 1.4376-1.5756.0173 0 .674.7185 1.4549 1.5896 1.7899 1.9903 2.2629 2.2808 3.6554 2.2045.7497-.0312 1.1471-.138 1.5133-.4146.2766-.197.4909-.4113.4598-.4737-.0763-.2282-7.0077-7.8018-7.1285-7.7846-.0624 0-1.6519 1.7275-3.5486 3.8386z",
    keywords: ["proxmox","lxc", "vm", "virtual"]
  },
  "raspberry":{
    path:"m24.6 14c-.2.1-.5 0-.7-.2-.7-.4-1.4-.9-2-1.4-.7-.6-1.3-1.2-1.9-1.8-.1-.2-.3-.4-.3-.6.6-.3 2.6-.2 3.6.7 1 .8 1.6 2.4 1.3 3.3zM7.5 13.9c-.1-1.3.3-2.5 1.4-3.3 1.1-.8 2.3-1 3.6-.8 0 .3-.2.5-.3.7-.7.9-1.6 1.6-2.4 2.3-.5.4-1 .7-1.5 1-.4.1-.6.3-.8.1zm19.4 4.4c0 .8-.3 1.7-.9 2.4-.3.3-.5.3-.8 0-.3-.4-.5-.9-.6-1.4-.3-1-.4-2.1-.3-3.2 0-.2.1-.5.2-.7.2-.4.4-.5.8-.2 1 .6 1.6 1.7 1.6 3.1zM7.8 16.8c0 1.1-.2 2.1-.6 3.1C7.1 20.2 7 20.4 6.8 20.6 6.5 21 6.3 21 6 20.7 4.6 19.3 4.8 16.6 6.5 15.4c.6-.5 1-.4 1.2.4 0 .3.1.7.1 1zM16 30c-1.2 0-2.2-.5-3.1-1.4-.4-.4-.4-.8.1-1.1.7-.4 1.4-.6 2.2-.7 1-.1 2-.1 3 .2.2.1.5.2.7.3.6.3.7.6.2 1.2 0 0 0 0-.1.1-.7.9-1.7 1.4-3 1.4zm.2-17.2c-.8 0-1.6-.1-2.3-.5-1.3-.7-1.3-1.6-.2-2.4 1.5-1.1 3.5-1 4.9.2.1.1.2.2.3.3.5.6.4 1.2-.2 1.7-.5.4-1.1.5-1.7.6-.3.1-.6.1-.8.1zm-9.3 9.9c0 0 0-.2 0-.3.1-1.1.7-1.5 1.8-1.2 1.7.5 3.3 2.5 3.4 4.3 0 1.1-.5 1.6-1.6 1.4C9 26.7 8 25.9 7.4 24.6 7 24 6.9 23.4 6.9 22.7Zm12.9 2.6c.1-1 .5-2 1.3-2.9.5-.5 1-1 1.5-1.4.3-.2.6-.3.9-.4.6-.1 1.1.1 1.3.7.4 1 .5 2 0 3-.6 1.4-1.7 2.3-3.2 2.6-.1 0-.3 0-.5 0-.9.1-1.3-.3-1.3-1.6zm-3.7-5.9c1 0 2 .4 2.7 1.2 1.2 1.3 1.1 3.2-.2 4.3-1.3 1.1-3.4 1.2-4.7.1-1-.8-1.4-1.8-1.2-3.1.3-1.3 1.2-2 2.4-2.4.3 0 .6-.1 1-.1zm7.3-2.5c0 2.1-1.8 3.4-3.8 2.8-1.8-.6-3.1-2.5-2.8-4.4.3-1.8 2.1-2.9 3.9-2.2 1.6.6 2.7 2.2 2.7 3.8zm-8-.9c0 1.8-1.4 3.6-3.2 4-1.8.4-3.4-.9-3.5-2.7-.1-1.8 1.2-3.6 2.9-4 2.1-.6 3.8.7 3.8 2.7zm8.1-8.9c.1.1.2.1.3.1-.3.3-.7.3-1.1.5 0 .1.1.1.1.2-.3.2-.8.1-1.1.2-.1.1.1.2 0 .3-.4.1-.8 0-1.3-.1C19.5 8.1 18.8 7.7 18.5 6.8 19.7 5.5 21.2 4.7 22.7 3.9 21 4.5 19.5 5.3 18.1 6.3 17.5 6.1 17.2 5.6 17.2 5 17.2 4.3 17.8 3.2 18.4 2.7L18.6 3c.3-.2.5-.6.8-.7.1.1 0 .3.2.3.2-.1.4-.4.7-.5.1.1 0 .2.2.3.3 0 .5-.3.9-.4 0 .1-.1.2 0 .4.3-.2.6-.4 1-.4 0 .1-.2.2-.1.4.3 0 .6-.2 1-.2 0 .1-.1.2 0 .4.4-.1.8-.2 1.2-.1 0 .1-.1.2-.1.3.3.1.7 0 1 .1-.1.3-.4.5-.4.8.1.1.3 0 .4.1-.1.4-.5.5-.6.8.1.2.3 0 .4.1-.1.3-.5.5-.7.8.1.2.2.1.3.1-.2.3-.5.4-.7.7.1.1.2.1.3.2-.2.3-.6.4-.9.6zM13.8 6.4C12.4 5.3 10.9 4.5 9.2 3.9c1.5.9 3 1.7 4.2 2.9C13.3 7.9 11.9 8.6 10.3 8.5 10.2 8.4 10.4 8.4 10.4 8.2 10 8.1 9.5 8.2 9.2 8 9.2 7.9 9.4 7.9 9.3 7.8 9 7.6 8.6 7.5 8.3 7.3 8.3 7.2 8.5 7.2 8.6 7.1 8.3 6.9 7.9 6.8 7.6 6.5 7.7 6.4 7.8 6.5 7.9 6.3 7.6 6.1 7.3 5.9 7.1 5.6 7.2 5.5 7.3 5.6 7.4 5.5 7.3 5.2 6.9 5 6.8 4.7 7 4.7 7.1 4.8 7.3 4.6 7.1 4.3 6.7 4.2 6.6 3.8 6.7 3.7 6.9 3.8 7 3.7 7 3.4 6.8 3.2 6.7 2.9 7 2.8 7.4 2.9 7.7 2.8 7.7 2.7 7.6 2.6 7.6 2.5 8 2.3 8.4 2.5 8.8 2.6 8.9 2.4 8.7 2.4 8.8 2.2 9.1 2.2 9.4 2.4 9.8 2.4 9.9 2.2 9.6 2.2 9.6 2c.4 0 .7.2 1 .4.1-.1 0-.2.1-.4.3.1.5.3.8.5.2 0 .1-.2.2-.3.3.1.5.4.7.5.2 0 .1-.2.2-.3.3.2.5.5.7.7.2 0 .1-.2.3-.2.6.7 1.2 1.5 1.1 2.5 0 .5-.4.8-.9 1z",
    keywords: ["raspberry","computer", "pi", "raspian"]
  },
  "vlc":{
    path:"m 10.167858,5.1384815 0.661581,-2.2787849 c 0.367546,-1.1761471 2.058257,-1.1761471 2.425803,0 l 0.661583,2.2787849 c -0.514564,0.1470183 -1.102637,0.2940367 -1.837729,0.2940367 -0.735092,0 -1.323165,-0.1470184 -1.911238,-0.2940367 z M 8.1831084,12.048345 c 0.8821111,0.661582 2.2052756,1.249657 3.8959876,1.249657 1.690711,0 3.013876,-0.661583 3.895986,-1.249657 L 14.945954,8.5199035 c -0.661582,0.4410556 -1.617202,0.735092 -2.866858,0.735092 -1.249657,0 -2.2052754,-0.3675455 -2.8668583,-0.735092 z m 8.4535576,2.131767 0.367544,1.102638 c -1.102637,0.808601 -2.793348,1.543692 -4.851606,1.543692 -2.131765,0 -3.7489664,-0.735091 -4.8516048,-1.543692 L 7.6685447,14.180112 H 5.9778332 c -0.3675459,0 -0.5880735,0.220527 -0.7350919,0.514565 l -1.6172021,6.174771 c -0.1470184,0.441055 0.2205276,0.955619 0.7350918,0.955619 H 19.87107 c 0.514564,0 0.8086,-0.441056 0.735091,-0.955619 L 18.91545,14.694677 c -0.07351,-0.294038 -0.367546,-0.514565 -0.735092,-0.514565 z",
    keywords: ["video","movie", "rtsp"]
  }
};

async function getIcon(name) {
  let new_name;

  if (!(name in SCI_ICONS_MAP)) {
    // try swapping the '_' for a '-'
    new_name = name.replace(/_/gm, `-`);
    if (!(new_name in SCI_ICONS_MAP)) {
      console.log(`Icon "${name}" is not available`);
      return '';
    }else{
      console.log(`Aliased "${name}" with "${new_name}"`);
      return {path: SCI_ICONS_MAP[new_name].path};
    }
  }
  return {path: SCI_ICONS_MAP[name].path};
}
async function getIconList() {
  return Object.entries(SCI_ICONS_MAP).map(([icon, content]) => ({
    name: icon,
    keywords: content.keywords
  }));
}
window.customIcons = window.customIcons || {};
window.customIcons["sci"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["sci"] = getIcon;


console.info(
    `%c HA-SCI-ICONS %c Version 0.0.1 `,
    "color: orange; font-weight: bold; background: black",
    "color: white; font-weight: bold; background: dimgray"
);
