//Umami Cloud
(function(a,b,c,d){a = document.createElement('script');a.src = 'https://analytics.umami.is/script.js';a.setAttribute('data-website-id', '56646557-addd-4d78-ae04-f7babb4cbc56');b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a,b);})();

//我要拉
(function(a,b,c,d){a = document.createElement('script');a.charset = 'UTF-8';a.id = 'LA_COLLECT';a.src = '//sdk.51.la/js-sdk-pro.min.js?id=JMIJZqK4MvC0pOsF&ck=JMIJZqK4MvC0pOsF&autoTrack=true&hashMode=true';b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a,b);})();

//log
console.log('%cPowered by %c JIXIEJIDIGUAN', 'background: linear-gradient(to bottom right, #9FD5F7, #F1CAFF);color:#fff', 'color:#000');
console.log('%clinks %c https://jixiejidiguan.top/ %c', 'color: white; background: #e9546b; padding:5px 0;', 'padding:4px;border:1px solid #e9546b;', 'color:#fff');
fetch("https://v1.hitokoto.cn/").then(function(response) {
if (response.ok) {
return response.text();
}
}).then(function(data) {
var hitokoto = JSON.parse(data);
console.log('id：'+hitokoto.id+'\n'+
'uuid：'+hitokoto.uuid+'\n'+
'hitokoto：'+hitokoto.hitokoto+'\n'+
'from：'+hitokoto.from+'\n'+
'浏览器的首选语言：'+navigator.language+'\n'+
'浏览器的操作系统平台：'+navigator.platform+'\n'+
'浏览器的版本信息：'+navigator.appVersion+'\n');
});
if (!!window.ActiveXObject || "ActiveXObject" in window) {
alert('朋友，IE浏览器未适配哦~\n 请关闭 IE 模式！');
}
