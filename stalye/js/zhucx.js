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

if (!!window.ActiveXObject || "ActiveXObject" in window) { //is IE?
  alert('朋友，IE浏览器未适配哦~\n 请关闭 IE 模式！');
}
//if (document.location.host != "jixiejidiguan.top") {
//location.href = location.href.replace(document.location.host,'jixiejidiguan.top');
//}
//Log

console.log ("%c 破而后立，再度优化！"," text-shadow: 0 1px 0 #ffff #304FFE,0 5px 0 #aaa,0 6px 1px,0 5px 10px,0 20px 20px;font-size:4em");
console.log ("%c JIXIEJIDIGUAN"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
console.log('%c 地址 http://jixiejidiguan.top','font-size:35px;color:#ff8400;');
console.log('%c ','background-image:url("https://jixiejidiguan.top/stalye/img/google.gif");background-size:100% 100%;background-repeat:no-repeat;background-position:center center;line-height:100px;padding:100px 180px;font-size:46px;color:red;');




//友盟
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
