//芜湖
if (!!window.ActiveXObject || "ActiveXObject" in window) { //is IE?
alert('朋友，IE浏览器未适配哦~\n 请关闭 IE 模式！');
}

//Title
document.addEventListener('visibilitychange', function() {
if (document.hidden) {
document.title = '你还不关闭这个页面呢？';//+ OriginTitile;
clearTimeout();
} else {
var text = "花无凋零之日，意无传递之时，爱情亘古不变，紫罗兰与世长存。";
document.title = text;//+ OriginTitile;
setTimeout(function() {
document.title;// = OriginTitile;
}, 12000);
}
});

//if (document.location.host != "jixiejidiguan.top") {
//location.href = location.href.replace(document.location.host,'jixiejidiguan.top');
//}

//Log
var log = { Host: "jixiejidiguan.top", Name: "机械极地馆"};
console.log(log);

//我要拉
document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"JMIJZqK4MvC0pOsF\",ck:\"JMIJZqK4MvC0pOsF\",autoTrack:true,hashMode:true});</script>")

//数据挂件功能 beta
document.write("<script id=\"LA-DATA-WIDGET\" crossorigin=\"anonymous\" charset=\"UTF-8\" src=\"https:\/\/v6-widget.51.la\/v6\/JMIJZqK4MvC0pOsF\/quote.js?theme=0&f=12&display=0,1,1,0,1,0,1,0\"><\/script>");

//灵雀
document.write("<script src=\"https:\/\/sdk.51.la\/perf\/js-sdk-perf.min.js\" crossorigin=\"anonymous\"><\/script>");
document.write("<script>new LingQue.Monitor().init({id:\"JiidMWrwn9WaSudr\",sendSuspicious:true,sendSpaPv:true});<\/script>");

