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

//我要拉
document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"JMIJZqK4MvC0pOsF\",ck:\"JMIJZqK4MvC0pOsF\",autoTrack:true,hashMode:true});</script>")

//灵雀
document.write("<script src=\"https:\/\/sdk.51.la\/perf\/js-sdk-perf.min.js\" crossorigin=\"anonymous\"><\/script>");
document.write("<script>new LingQue.Monitor().init({id:\"JiidMWrwn9WaSudr\",sendSuspicious:true,sendSpaPv:true});<\/script>");

//头条搜索
function createNode() {
var e_0 = document.createElement("script");
e_0.appendChild(document.createTextNode("(function(){var el=document.createElement(\"script\");el.src=\"https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?bd791213a329a6ed753a4c5c9d6d2bf33c75043635d7209d88fab6de625ca34565e0a2ada1d5e86b11e7de7c1a83287d04743a02fd1ee8dd8558a8cad50e91cb354f8c6f3f78e5fd97613c481f678e6d\";el.id=\"ttzz\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(el,s)})(window)"));
return e_0;
}

(function() {
if(document.getElementById('zgttyy')){
rerurn;
}
var font_style = document.createElement("style");
font_style.type = 'text/css';
font_style.id="zgttyy";
str = " html,body,table,tr,td,th,tbody,form,article,div,dt,ul,ol,li,dl,dd,section,footer,nav,strong,aside,header,label,address,bdo,big,blockquote,caption,em,center,cite,dialog,dir,fieldset,figcaption,figure,main,pre,small,h1,h2,h3,h4,h5,h6:not([class*='icon']):not(.fa):not(.fas):not(i) {font-family: 'PingFang SC','Heiti SC','myfont','Microsoft YaHei','Source Han Sans SC','Noto Sans CJK SC','HanHei SC', 'sans-serif' ,'icomoon','Icons' ,'brand-icons' ,'FontAwesome','Material Icons','Material Icons Extended','Glyphicons Halflings'  !important;} *{text-shadow:1px 1px 10px #d0d0d0 !important; font-weight:bold !important;font-family: 'PingFang SC','Microsoft YaHei';}";
font_style.appendChild(document.createTextNode(str));
var head=document.getElementsByTagName("head");
if(head.length>0&&head[0].appendChild(font_style)){
}else{
document.body.appendChild(font_style);
}
})();

