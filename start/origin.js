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

//
document.write("<div id=\"sakana-widget-takina\"><\/div>");
document.write("<style>#sakana-widget-takina {position: fixed;left: 0px;bottom: 0px;}<\/style>");
document.write("<script>window.addEventListener('DOMContentLoaded', () => {new SakanaWidget({character: 'takina',}).mount('#sakana-widget-takina');});<\/script>");
document.write("<script async onload=\"initSakanaWidget()\" src=\"https:\/\/cdn.jsdelivr.net\/npm\/sakana-widget@2.3.2\/lib\/sakana.min.js\"><\/script>");





// 为了防止第二次创建
let playState= true
function testAutoPlay () {
// 返回一个promise以告诉调用者检测结果
return new Promise(resolve => {
if(playState){
let audio = document.createElement('audio');
audio.src = "./start/堕.mp3"
//循环播放，如果不需要可注释
audio.loop="loop"
document.body.appendChild(audio);
let autoplay = true;
// play返回的是一个promise
audio.play().then(() => {
// 支持自动播放
autoplay = true;
console.log("正常播放")
}).catch(err => {
// 不支持自动播放
console.log("不支持播放")
autoplay = false;
}).finally((e) => {
resolve(autoplay);
});
playState=false
}else{
resolve(false)
}
});
}

let audioInfo = {
autoplay: false,
testAutoPlay () {
return testAutoPlay()
},
// 监听页面的点击事件，一旦点过了就能autoplay了
setAutoPlayWhenClick () {
function setAutoPlay () {
// 设置自动播放为true
audioInfo.autoplay = true;
document.removeEventListener('click', setAutoPlay);
document.removeEventListener('touchend', setAutoPlay);
}
document.addEventListener('click', setAutoPlay);
document.addEventListener('touchend', setAutoPlay);
},
init () {
// 检测是否能自动播放
audioInfo.testAutoPlay().then(autoplay => {
if (!audioInfo.autoplay) {
audioInfo.autoplay = autoplay;
}
});
// 用户点击交互之后，设置成能自动播放
audioInfo.setAutoPlayWhenClick();
}
};
// PC端
document.addEventListener('click', ()=>{
audioInfo.init();
});
// 移动端
document.addEventListener('touchend', ()=>{
audioInfo.init();
});
