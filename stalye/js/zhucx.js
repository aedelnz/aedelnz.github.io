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

console.log ("%c JIXIEJIDIGUAN"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
console.log('%c 地址 http://jixiejidiguan.top','font-size:35px;color:#ff8400;');



//友盟
document.write(unescape("%3Cspan id='cnzz_stat_icon_1279931368'%3E%3C/span%3E%3Cscript src='https://s4.cnzz.com/z_stat.php%3Fid%3D1279931368%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E"));
//我要拉
document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"JMIJZqK4MvC0pOsF\",ck:\"JMIJZqK4MvC0pOsF\"});</script>")
document.write("<br><script id=\"LA-DATA-WIDGET\" crossorigin=\"anonymous\" src=\"https:\/\/v6-widget.51.la\/v6\/JMIJZqK4MvC0pOsF\/quote.js?theme=0&f=12&display=0,1,1,1,1,1,1,0\"><\/script>");
//春节
//document.write("<div class=\"deng-box\"><div class=\"deng\"><div class=\"xian\"><\/div><div class=\"deng-a\"><div class=\"deng-b\"><div class=\"deng-t\">节<\/div><\/div><\/div><div class=\"shui shui-a\"><div class=\"shui-c\"><\/div><div class=\"shui-b\"><\/div><\/div><\/div><\/div>");
//document.write("<div class=\"deng-box1\"><div class=\"deng\"><div class=\"xian\"><\/div><div class=\"deng-a\"><div class=\"deng-b\"><div class=\"deng-t\">春<\/div><\/div><\/div><div class=\"shui shui-a\"><div class=\"shui-c\"><\/div><div class=\"shui-b\"><\/div><\/div><\/div><\/div>");

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

(function() {
if(document.getElementById('toTopLikeKuAn')){
}else{
function toTopLikeKuAn() {
		var toTopBtn = document.createElement("div");
		toTopBtn.id = "toTopBtn";
		toTopBtn.setAttribute("style","font-size:4vw !important;width:10vw !important;height:10vw !important;line-height:10vw !important;text-align:center !important;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABD0lEQVR42u3bMRLCMAwFUbz3v7MpKKACkvhLzsyqcCntO4DHfNx7eAgQIECAAAECBAgQIECAAAECBAgQIOBzxhzzxoBXfJ5AMr+CQDY/TyCdnyaQz88SqMhPEqjJzxGoyk8RyOXPMUeeQC7//SYJJPMrCGTz8wTS+WkC+fwsgYr8JIGa/ByBqvwUgbr8DIHK/ASB2vz1BKrzVxOoz19LoCN/JYGe/HUEuvJXEejLX0OgM38Fgd786wS6868S6M+/RmCH/CsE9sg/T2CX/LME9sk/R2Cn/DME/llSl3/8Or+X1OYfvc6vJfX5x67zfUlP/pHrwx8cAgQIECBAgAABAgQIECBAgAABAgQIECCgfJ7DZZC9LC8fDAAAAABJRU5ErkJggg==') no-repeat center center !important;background-size:3vw 3vw !important;background-color:rgba(250,250,250,0.9) !important;box-shadow:0px 1px 1px rgba(0,0,0,0.4);color:#000 !important;position:fixed !important;bottom:5vh !important;right:45vw !important;z-index:99999999999999999 !important;border-radius:100% !important;display:none;");
		document.body.appendChild(toTopBtn);
};
function isScrollToTop() {
	var toTopTimer;
	var theBody = document.getElementsByTagName('body')[0];
	var topTopBtn = document.getElementById('toTopBtn');
	document.ontouchstart = function (e) {
		if (toTopTimer) {
			clearTimeout(toTopTimer);
		};
		mystartY = e.changedTouches[0].clientY;
	};
	document.ontouchmove = function (e) {
		myendY = e.changedTouches[0].clientY;
		var myY = myendY - mystartY;
		if (myY > 0){
			toTopBtn.style.opacity = "1";
			toTopBtn.style.display = "block";
			toTopBtn.style.transform = "rotateZ(0deg)";
			toTopBtn.style.boxShadow = "0px 1px 1px rgba(0,0,0,0.4)";
			toTopBtn.onclick = function () {
				window.scrollTo(0,0);
				this.style.display = "none";
				toTopBtn.removeEventListener('click',this,false);
			};
		} else if (myY < 0) {
			toTopBtn.style.opacity = "1";
			toTopBtn.style.display = "block";
			toTopBtn.style.transform = "rotateZ(180deg)";
			toTopBtn.style.boxShadow = "0px -1px 1px rgba(0,0,0,0.4)";
			toTopBtn.onclick = function () {
				window.scrollTo(0, document.body.scrollHeight);	
				this.style.display = "none";
				toTopBtn.removeEventListener('click',this,false);
			};
		}else {
			toTopBtn.style.display = "none";
		};
	};
	document.ontouchend = function (e) {
		toTopTimer = setTimeout(function () {
			toTopBtn.style.transitionProperty="opacity,background-color";
			toTopBtn.style.transitionDuration="500ms";
			toTopBtn.style.transitionTimingFunction = "linear";
			toTopBtn.style.opacity = "0";
			toTopBtn.style.backgroundColor = "rgba(200,200,200,1)";
			setTimeout(function() {
				toTopBtn.style.display = "none";
				toTopBtn.style.backgroundColor = "rgba(250,250,250,0.9)";
			},500);
		},3000);
	};
};
var isHaveToTopBtn;
isHaveToTopBtn = document.getElementById('toTopBtn');
if (!isHaveToTopBtn) {
	toTopLikeKuAn();
	isScrollToTop();
};
var pans= document.createElement('b');		
pans.id='toTopLikeKuAn';
document.body.appendChild(pans);
}
})();