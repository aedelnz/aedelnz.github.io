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


//Jquery
document.write("<script src=\"https:\/\/cdn.bootcdn.net\/ajax\/libs\/jquery\/3.6.0\/jquery.min.js\"><\/script>");


//友盟
document.write(unescape("%3Cspan id='cnzz_stat_icon_1279931368'%3E%3C/span%3E%3Cscript src='https://s4.cnzz.com/z_stat.php%3Fid%3D1279931368%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E"));
//我要拉
document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"JMIJZqK4MvC0pOsF\",ck:\"JMIJZqK4MvC0pOsF\"});</script>")

//春节
//document.write("<div class=\"deng-box\"><div class=\"deng\"><div class=\"xian\"><\/div><div class=\"deng-a\"><div class=\"deng-b\"><div class=\"deng-t\">节<\/div><\/div><\/div><div class=\"shui shui-a\"><div class=\"shui-c\"><\/div><div class=\"shui-b\"><\/div><\/div><\/div><\/div>");
//document.write("<div class=\"deng-box1\"><div class=\"deng\"><div class=\"xian\"><\/div><div class=\"deng-a\"><div class=\"deng-b\"><div class=\"deng-t\">春<\/div><\/div><\/div><div class=\"shui shui-a\"><div class=\"shui-c\"><\/div><div class=\"shui-b\"><\/div><\/div><\/div><\/div>");

