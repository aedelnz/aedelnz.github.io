
//我要拉
(function(a,b,c,d){a = document.createElement('script');a.charset = 'UTF-8';a.id = 'LA_COLLECT';a.src = '//sdk.51.la/js-sdk-pro.min.js?id=JMIJZqK4MvC0pOsF&ck=JMIJZqK4MvC0pOsF&autoTrack=true&hashMode=true';b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a,b);})();

//灵雀应用监控
!(function(c,i,e,b){var h=i.createElement("script");var f=i.getElementsByTagName("script")[0];h.type="text/javascript";h.crossorigin=true;h.onload=function(){new c[b]["Monitor"]().init({id:"K5mJO6H2n6QPd4MK",sendSpaPv:true});};f.parentNode.insertBefore(h,f);h.src=e;})(window,document,"https://sdk.51.la/perf/js-sdk-perf.min.js","LingQue");

//
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "c73276g5ao");


//log
fetch("https://v1.hitokoto.cn/").then(r => r.ok && r.text()).then(d => {
  const h = JSON.parse(d);
  console.log(`%cPowered by %c 机械极地馆\nhitokoto: ${h.hitokoto}\nfrom: ${h.from}\n浏览器的首选语言: ${navigator.language}\n浏览器的操作系统平台: ${navigator.platform}\n浏览器的版本信息: ${navigator.appVersion}\n`, 'background: linear-gradient(to bottom right, #9FD5F7, #F1CAFF); color: #fff', 'color: #000');
});

if (!!window.ActiveXObject || "ActiveXObject" in window) alert('朋友，IE浏览器未适配哦~\n请关闭 IE 模式！');

