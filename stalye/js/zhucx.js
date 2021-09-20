//Title
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '(๑òᆺó๑) 页面崩溃了';//+ OriginTitile;
        clearTimeout(titleTime);
    } else {
        document.title = '((((っ´θ`)っ 噫又好了';//+ OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 1000);
    }
});

//Log
console.log('什么都没有');

//统计
//友盟
var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
document.write(unescape("%3Cspan id='cnzz_stat_icon_1279931368'%3E%3C/span%3E%3Cscript src='https://s4.cnzz.com/z_stat.php%3Fid%3D1279931368%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E"));
//我要啦
document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"JMIJZqK4MvC0pOsF\",ck:\"JMIJZqK4MvC0pOsF\"});</script>")
//百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?8d5cc35d96ceca0b02553344bfbb229d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

