
//我要拉
(function(a,b,c,d){a = document.createElement('script');a.charset = 'UTF-8';a.id = 'LA_COLLECT';a.src = '//sdk.51.la/js-sdk-pro.min.js?id=JMIJZqK4MvC0pOsF&ck=JMIJZqK4MvC0pOsF&autoTrack=true&hashMode=true';b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a,b);})();

//灵雀应用监控
!(function(c,i,e,b){var h=i.createElement("script");var f=i.getElementsByTagName("script")[0];h.type="text/javascript";h.crossorigin=true;h.onload=function(){new c[b]["Monitor"]().init({id:"K5mJO6H2n6QPd4MK",sendSpaPv:true});};f.parentNode.insertBefore(h,f);h.src=e;})(window,document,"https://sdk.51.la/perf/js-sdk-perf.min.js","LingQue");

//log
fetch("https://v1.hitokoto.cn/").then(function(response) {
if (response.ok) {
return response.text();
}
}).then(function(data) {
var hitokoto = JSON.parse(data);
console.log('Powered by 机械极地馆\n'+
'hitokoto：'+hitokoto.hitokoto+'\n'+
'from：'+hitokoto.from+'\n'+
'浏览器的首选语言：'+navigator.language+'\n'+
'浏览器的操作系统平台：'+navigator.platform+'\n'+
'浏览器的版本信息：'+navigator.appVersion+'\n');
});
if (!!window.ActiveXObject || "ActiveXObject" in window) {
alert('朋友，IE浏览器未适配哦~\n 请关闭 IE 模式！');
}
