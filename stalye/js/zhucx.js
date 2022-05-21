//mdui
document.write("<script src=\"https:\/\/jixiejidiguan.top\/stalye\/mdui\/js\/mdui.min.js?v=1.0\"><\/script>");
//Jquery
document.write("<script src=\"https:\/\/jixiejidiguan.top\/stalye\/js\/jquery.min.js?v=1.0\"><\/script>");

//获取浏览器页面可见高度和宽度
//var _PageHeight = document.documentElement.clientHeight,
//    _PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
//var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
//    _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
//加载gif地址
//var Loadimagerul="https://jixiejidiguan.top/stalye/img/加载.gif?v=1.0";
//在页面未加载完毕之前显示的loading Html自定义内容
//var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#f3f8ff;opacity:1;filter:alpha(opacity=50);z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width:240px; height: 150px; background: #fff url('+Loadimagerul+') no-repeat; border: 1px solid #95B8E7;"></div></div>';
//呈现loading效果
//document.write(_LoadingHtml);
//监听加载状态改变
//document.onreadystatechange = completeLoading;
//加载状态为complete时移除loading效果
//function completeLoading() {
//    if (document.readyState == "complete") {
//        var loadingMask = document.getElementById('loadingDiv');
//        loadingMask.parentNode.removeChild(loadingMask);
//    }
//}


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



//我要拉
document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"JMIJZqK4MvC0pOsF\",ck:\"JMIJZqK4MvC0pOsF\"});</script>")
//百度统计 
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d1ef393675d44d97f7d94463fb0c733b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
