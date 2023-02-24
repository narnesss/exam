{"version":3,"sources":["script.js"],"names":["BX","namespace","Report","Analytics","Config","Controls","options","this","configurationButton","boardId","boardOptions","prop","getArray","pageTitle","document","querySelector","pageTitleWrap","pageControlsContainer","init","prototype","bind","handleConfigurationButtonClick","loader","Loader","size","menu","menuItems","forEach","optionFields","push","text","className","onclick","popupWindow","close","toggleBoardOption","length","separator","getToggleBoardTitle","toggleBoard","PopupMenuWindow","closeByEsc","autoHide","cacheable","events","onDestroy","toggle","message","contentContainer","cleanPageContent","showLoader","VC","Core","ajaxPost","data","IFRAME","boardKey","onFullSuccess","delegate","response","hideLoader","changePageTitle","additionalParams","changePageControls","pageControlsParams","html","confirmationPopup","optionName","innerText","cleanNode","Dashboard","BoardRepository","destroyBoards","VisualConstructor","controlsContent","config","result","_successHandler","title","style","display","preview","create","attrs","src","height","width","appendChild","hide"],"mappings":"CAAA,WAEC,aACAA,GAAGC,UAAU,8BAEbD,GAAGE,OAAOC,UAAUC,OAAOC,SAAW,SAAUC,GAE/CC,KAAKC,oBAAsBF,EAAQE,oBACnCD,KAAKE,QAAUH,EAAQG,QACvBF,KAAKG,aAAeV,GAAGW,KAAKC,SAASN,EAAS,mBAE9CC,KAAKM,UAAYC,SAASC,cAAc,kCACxCR,KAAKS,cAAgBF,SAASC,cAAc,kCAC5CR,KAAKU,sBAAwBH,SAASC,cAAc,wDAEpDR,KAAKW,QAGNlB,GAAGE,OAAOC,UAAUC,OAAOC,SAASc,WACnCD,KAAM,WAELlB,GAAGoB,KACFb,KAAKC,oBACL,QACAD,KAAKc,+BAA+BD,KAAKb,OAE1CA,KAAKe,OAAS,IAAItB,GAAGuB,QAAQC,KAAM,MAGpCH,+BAAgC,WAE/B,IAAKd,KAAKkB,KACV,CACC,IAAIC,KAEJnB,KAAKG,aAAaiB,QAAQ,SAAUC,GAEnCF,EAAUG,MACTC,KAAMF,EAAa,SACnBG,UAAW,qBACXC,QAAS,WAERzB,KAAKkB,KAAKQ,YAAYC,QACtB3B,KAAK4B,kBAAkBP,EAAa,UACnCR,KAAKb,SAENA,MAEH,GAAImB,EAAUU,OAAS,EACvB,CACCV,EAAUG,MACTQ,UAAW,OAIbX,EAAUG,MACTC,KAAMvB,KAAK+B,sBACXP,UAAW,qBACXC,QAAS,WAERzB,KAAKkB,KAAKQ,YAAYC,QACtB3B,KAAKgC,eACJnB,KAAKb,QAGRA,KAAKkB,KAAO,IAAIzB,GAAGwC,gBAClB,uCACAjC,KAAKC,oBACLkB,GAECe,WAAY,KACZC,SAAU,KACVC,UAAW,MACXC,QACCC,UAAW,WAEVtC,KAAKkB,KAAO,MACXL,KAAKb,SAMXA,KAAKkB,KAAKqB,UAGXR,oBAAqB,WAEpB,OAAOtC,GAAG+C,QAAQ,8CAGnBR,YAAa,WAEZhC,KAAKyC,iBAAmBlC,SAASC,cAAc,6BAC/CR,KAAK0C,mBACL1C,KAAK2C,aACLlD,GAAGE,OAAOiD,GAAGC,KAAKC,SAAS,uCAC1BC,MACCC,OAAQ,IACRC,SAAUjD,KAAKE,SAEhBgD,cAAezD,GAAG0D,SAAS,SAAUC,GAEpCpD,KAAKqD,aACLrD,KAAKsD,gBAAgBF,EAASG,iBAAiBjD,WAC/CN,KAAKwD,mBAAmBJ,EAASG,iBAAiBE,oBAClDhE,GAAGiE,KAAK1D,KAAKyC,iBAAkBW,EAASL,OACtC/C,QAEJA,KAAK2D,kBAAkBhC,SAGxBC,kBAAmB,SAAUgC,GAE5B5D,KAAKyC,iBAAmBlC,SAASC,cAAc,6BAC/CR,KAAK0C,mBACL1C,KAAK2C,aACLlD,GAAGE,OAAOiD,GAAGC,KAAKC,SAAS,+BAC1BC,MACCC,OAAQ,IACRC,SAAUjD,KAAKE,QACf0D,WAAYA,GAEbV,cAAezD,GAAG0D,SAAS,SAAUC,GAEpCpD,KAAKqD,aACLrD,KAAKsD,gBAAgBF,EAASG,iBAAiBjD,WAC/CN,KAAKwD,mBAAmBJ,EAASG,iBAAiBE,oBAClDhE,GAAGiE,KAAK1D,KAAKyC,iBAAkBW,EAASL,OACtC/C,SAIL0C,iBAAkB,WAEjB1C,KAAKM,UAAUuD,UAAY,GAC3B7D,KAAKU,sBAAsBmD,UAAY,GACvCpE,GAAGqE,UAAU9D,KAAKyC,kBAClB,GAAIhD,GAAGE,OAAOoE,UACd,CACCtE,GAAGE,OAAOoE,UAAUC,gBAAgBC,gBAErC,GAAIxE,GAAGyE,mBAAqBzE,GAAGyE,kBAAkBF,gBACjD,CACCvE,GAAGyE,kBAAkBF,gBAAgBC,kBAGvCT,mBAAoB,SAAUW,GAE7B,IAAIC,KACJA,EAAOlB,cAAgB,SAAUmB,GAEhC5E,GAAGiE,KAAK1D,KAAKU,sBAAuB2D,EAAOX,OAC1C7C,KAAKb,MACPP,GAAGE,OAAOiD,GAAGC,KAAKyB,gBAAgBH,EAAiBC,IAEpDd,gBAAiB,SAAUiB,GAE1BvE,KAAKM,UAAUuD,UAAYU,GAE5B5B,WAAY,WAEX3C,KAAKS,cAAc+D,MAAMC,QAAU,OAEnC,IAAIC,EAAUjF,GAAGkF,OAAO,OACvBC,OACCC,IAAO,wEACPC,OAAQ,SACRC,MAAO,UAIT/E,KAAKyC,iBAAiBuC,YAAYN,IAEnCrB,WAAY,WAEXrD,KAAKS,cAAc+D,MAAMC,QAAU,QACnCzE,KAAKe,OAAOkE,UAjLf","file":"script.map.js"}