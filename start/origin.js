//我要拉
!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JMIJZqK4MvC0pOsF",ck:"JMIJZqK4MvC0pOsF",autoTrack:true,hashMode:true});

//log
console.log('%c\nPowered by %c JIXIEJIDIGUAN\n\n', 'background: linear-gradient(to bottom right, #9FD5F7, #F1CAFF);color:#fff', 'color:#fff');
console.log('%c\nlinks %c https://jixiejidiguan.top/ %c\n\n', 'color: white; background: #e9546b; padding:5px 0;', 'padding:4px;border:1px solid #e9546b;', 'color:#fff');
fetch("https://v1.hitokoto.cn/").then(function(response) {
if (response.ok) {
return response.text();
}
}).then(function(data) {
var hitokoto = JSON.parse(data);
console.log('\nid：'+hitokoto.id+'\n'+
'uuid：'+hitokoto.uuid+'\n'+
'hitokoto：'+hitokoto.hitokoto+'\n'+
'from：'+hitokoto.from+'\n\n');
});
console.log('\n浏览器的首选语言：'+navigator.language+'\n'+
'浏览器的操作系统平台：'+navigator.platform+'\n'+
'浏览器的版本信息：'+navigator.appVersion+'\n\n');

//芜湖
if (!!window.ActiveXObject || "ActiveXObject" in window) { //is IE?
    alert('朋友，IE浏览器未适配哦~\n 请关闭 IE 模式！');
}

//if (document.location.host != "jixiejidiguan.top") {
//location.href = location.href.replace(document.location.host,'jixiejidiguan.top');
//}
//离开回来
var OriginTitile = document.title,
titleTime;
document.addEventListener("visibilitychange",
function() {
if (document.hidden) {
document.title = "Σ( ° △ °|||)真的要走了吗？";
clearTimeout(titleTime)
} else {
document.title = "(✿◡‿◡)欢迎回来";
titleTime = setTimeout(function() {
document.title = OriginTitile
}, 2000);
}
});

