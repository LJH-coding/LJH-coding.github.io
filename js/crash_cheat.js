<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '！！這裡這裡 ◕ ں ◕ ';
         clearTimeout(titleTime);
     }
     else {
         document.title = '(ฅ>ω<*ฅ) 喵喵爱你哟~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });