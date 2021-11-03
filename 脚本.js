// ==UserScript==
// @name         在线版 - VIP会员视频自动解析  
// @namespace    https://jixiejidiguan.top/A2zml/
// @version      1.0
// @icon         http://www.dmoe.cc/random.php
// @match *://v.youku.com/v_show/id_*
// @match *://v.qq.com/x/cover/*
// @match *://v.qq.com/*/p/topic/*
// @match *://w.mgtv.com/b/*
// @match *://www.mgtv.com/b/*
// @match *://tw.iqiyi.com/v_*
// @match *://www.iqiyi.com/v_*
// @match *://www.iqiyi.com/a_*
// @match *://www.iqiyi.com/w_*
// @match *://www.iqiyi.com/kszt/*
// @match *://tv.sohu.com/v/*
// @match *://film.sohu.com/album/*
// @match *://www.le.com/ptv/vplay/*
// @match *://v.pptv.com/show/*
// @match *://vip.1905.com/play/*
// @match *://www.ixigua.com/*
// @match *://www.bilibili.com/bangumi/play/*
// @match *://www.acfun.cn/bangumi/*
// @match *://www.douyin.com/*
// @match *://www.kuaishou.com/*
// @match *://www.bilibili.com/blackboard/*
// @match *://www.bilibili.com/*video/*
// @match *://player.bilibili.com/*
// @match *://*.tudou.com/v/*
// @match *://*.tudou.com/*/id_*
// @match *://v-wb.youku.com/v_show/id_*
// @match *://vku.youku.com/live/*
// @match *://w.mgtv.com/l/*
// @match *://w.mgtv.com/s/*
// @match *://www.mgtv.com/l/*
// @match *://www.mgtv.com/s/*
// @match *://www.mgtv.com/act/*
// @match *://haokan.baidu.com/v*
// @match *://haokan.hao123.com/v*
// @match *://tieba.baidu.com/p/*
// @match *://www.jiaomh.com/search.php?searchword=*
// @match *://www.jiaomh.com/kmahua/*
// @match *://miao101.com/search*
// @match *://miao101.com/video*
// @match *://www.wbdy.tv/*
// @match *://www.ikukk.com/*
// @match *://www.cupfox.com/search?key=*
// @match *://movie.douban.com/subject/*
// @match *://www.9ku.com/play/*
// @match *://m.9ku.com/play/*
// @match *://m.bilibili.com/bangumi/play/*
// @match *://www.acfun.cn/*/ac*
// @match *://m.youku.com/*/id_*
// @match *://m.mgtv.com/b/*
// @match *://m.pptv.com/show/*
// @match *://m.tv.sohu.com/v*
// @match *://m.tv.sohu.com/u/*
// @match *://m.tv.sohu.com/phone_play_film*
// @match *://m.le.com/vplay_*
// @match *://m.iqiyi.com/v_*
// @match *://m.v.qq.com/*
// @match *://3g.v.qq.com/*
// @match *://v.qq.com/x/page/*
// @match *://m.ixigua.com/video/*
// @match *://z1.m1907.cn/*
// @match *://www.yinyuetai.com/play?id=*
// @match *://m.acfun.cn/v/*
// @match *://m.douban.com/movie/subject/*
// @match *://music.163.com/*
// @match *://y.music.163.com/*
// @match *://kuwo.cn/*
// @match *://bd.kuwo.cn/*
// @match *://www.kuwo.cn/*
// @match *://m.kuwo.cn/newh5*
// @match *://www.kugou.com/song/*
// @match *://www.kugou.com/mvweb/*
// @match *://m3ws.kugou.com/kgsong/*
// @match *://m3ws.kugou.com/mv/*
// @match *://m.kugou.com/*
// @match *://y.qq.com/*
// @match *://i.y.qq.com/*
// @match *://www.xiami.com/*
// @match *://h.xiami.com/*
// @match *://m.xiami.com/*
// @match *://music.migu.cn/*
// @match *://m.music.migu.cn/*
// @match *://5sing.kugou.com/*
// @match *://kg.qq.com/node/*
// @match *://www.app-echo.com/*
// @match *://radio.sky31.com/*
// @match *://www.lrts.me/playlist*
// @match *://m.ximalaya.com/*
// @match *://www.ximalaya.com/*
// @match *://www.1ting.com/*
// @match *://www.zhaojiaoben.cn/*
// @match *://video.isyour.love/*
// @include /^https?:\/\/[^\/]+?(?:\.bumimi|\/(?:.+?(?:\.mp3|video\/|\/upic\/20.+?\.mp4|\d+?&type=(?:ximalaya|1ting)|\.m(?:3u8|p4)\?\w+?=|(?:\w+?_\w+?|search|jx|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?:\/\/[^\/]+?\.(?:youku|mgtv|sohu|pptv|1905|ixigua|iqiyi|le|qq|bilibili|acfun)\.)|[^\/]+?\/(?:tv|acg|mov)\/))/
// @charset UTF-8
// @grant window.open
// @grant window.close
// @connect qnsdk.com
// @connect alicdn.com
// @connect jsdelivr.net
// @connect laohutao.com
// @connect staticfile.org
// @connect g.alicdn.com
// @connect cdn.jsdelivr.net
// @connect player.alicdn.com
// @connect cdn.staticfile.org
// @connect sdk-release.qnsdk.com
// @connect shouquan.laohutao.com
// @connect *
// @noframes
// ==/UserScript==

(function(){
var mixkey = encodeURIComponent('mx20540440');
if (window[mixkey])
{
return;
}
window[mixkey] = true;
var url = location.href;
if (url.match(/(.*?)\/tv\/(.*?)/) || url.match(/(.*?)\/acg\/(.*?)/) || url.match(/(.*?)\/mov\/(.*?)/) || url.match(/(.*?)=http(.*?)/) || url.match(/(.*?)&type=1ting(.*?)/) || url.match(/(.*?)&type=ximalaya(.*?)/) || url.match(/(.*?)&autoplay=1&metareferer=(.*?)/) || url.match(/(.*?):\/\/www.bumimi(.*?)/) || url.match(/(.*?):\/\/v.youku.com\/v_show\/id_(.*?)/) || url.match(/(.*?):\/\/v.qq.com\/x\/cover\/(.*?)/) || url.match(/(.*?):\/\/v.qq.com\/variety\/p\/topic\/(.*?)/) || url.match(/(.*?):\/\/w.mgtv.com\/b\/(.*?)/) || url.match(/(.*?):\/\/www.mgtv.com\/b\/(.*?)/) || url.match(/(.*?):\/\/tw.iqiyi.com\/v_(.*?)/) || url.match(/(.*?):\/\/www.iqiyi.com\/v_(.*?)/) || url.match(/(.*?):\/\/www.iqiyi.com\/a_(.*?)/) || url.match(/(.*?):\/\/www.iqiyi.com\/w_(.*?)/) || url.match(/(.*?):\/\/www.iqiyi.com\/kszt\/(.*?)/) || url.match(/(.*?):\/\/tv.sohu.com\/v\/(.*?)/) || url.match(/(.*?):\/\/film.sohu.com\/album\/(.*?)/) || url.match(/(.*?):\/\/www.le.com\/ptv\/vplay\/(.*?)/) || url.match(/(.*?):\/\/v.pptv.com\/show\/(.*?)/) || url.match(/(.*?):\/\/vip.1905.com\/play\/(.*?)/) || url.match(/(.*?):\/\/www.wasu.cn\/(.*?)\/show\/id\/(.*?)/) || url.match(/(.*?):\/\/www.fun.tv\/vplay\/g-(.*?)/) || url.match(/(.*?):\/\/www.ixigua.com\/(.*?)/) || url.match(/(.*?):\/\/www.bilibili.com\/bangumi\/play\/(.*?)/) || url.match(/(.*?):\/\/www.acfun.cn\/bangumi\/(.*?)/) || url.match(/(.*?):\/\/(.*?)\/(.*?)\/tv\/(.*?)/) || url.match(/(.*?):\/\/(.*?)\/(.*?)\/acg\/(.*?)/) || url.match(/(.*?):\/\/(.*?)\/(.*?)\/mov\/(.*?)/) || url.match(/(.*?):\/\/(.*?)\/(.*?)=http(.*?)/) || url.match(/(.*?):\/\/(.*?)\/(.*?)&type=1ting(.*?)/) || url.match(/(.*?):\/\/(.*?)\/(.*?)&type=ximalaya(.*?)/) || url.match(/(.*?):\/\/(.*?)\/(.*?)&autoplay=1&metareferer=(.*?)/) || url.match(/(.*?):\/\/www.douyin.com\/video\/(.*?)/) || url.match(/(.*?):\/\/www.kuaishou.com\/(.*?)/) || url.match(/(.*?):\/\/www.bilibili.com\/blackboard\/(.*?)/) || url.match(/(.*?):\/\/www.bilibili.com\/(.*?)video\/(.*?)/) || url.match(/(.*?):\/\/player.bilibili.com\/(.*?)/) || url.match(/(.*?):\/\/(.*?).tudou.com\/v\/(.*?)/) || url.match(/(.*?):\/\/(.*?).tudou.com\/(.*?)\/id_(.*?)/) || url.match(/(.*?):\/\/v-wb.youku.com\/v_show\/id_(.*?)/) || url.match(/(.*?):\/\/vku.youku.com\/live\/(.*?)/) || url.match(/(.*?):\/\/w.mgtv.com\/l\/(.*?)/) || url.match(/(.*?):\/\/w.mgtv.com\/s\/(.*?)/) || url.match(/(.*?):\/\/www.mgtv.com\/l\/(.*?)/) || url.match(/(.*?):\/\/www.mgtv.com\/s\/(.*?)/) || url.match(/(.*?):\/\/www.mgtv.com\/act\/(.*?)/) || url.match(/(.*?):\/\/haokan.baidu.com\/v(.*?)/) || url.match(/(.*?):\/\/haokan.hao123.com\/v(.*?)/) || url.match(/(.*?):\/\/tieba.baidu.com\/p\/(.*?)/) || url.match(/(.*?):\/\/www.jiaomh.com\/search.php?searchword=(.*?)/) || url.match(/(.*?):\/\/www.jiaomh.com\/kmahua\/(.*?)/) || url.match(/(.*?):\/\/www.ak1080.com\/vodsearch\/(.*?)/) || url.match(/(.*?):\/\/www.ak1080.com\/voddetail\/(.*?)/) || url.match(/(.*?):\/\/www.ak1080.com\/vodplay\/(.*?)/) || url.match(/(.*?):\/\/www.o8tv.com\/vodsearch\/(.*?)/) || url.match(/(.*?):\/\/www.o8tv.com\/vodplay\/(.*?)/) || url.match(/(.*?):\/\/miao101.com\/search(.*?)/) || url.match(/(.*?):\/\/miao101.com\/video(.*?)/) || url.match(/(.*?):\/\/www.wbdy.tv\/(.*?)/) || url.match(/(.*?):\/\/www.ikukk.com\/(.*?)/) || url.match(/(.*?):\/\/www.cupfox.com\/search?key=(.*?)/) || url.match(/(.*?):\/\/movie.douban.com\/subject\/(.*?)/) || url.match(/(.*?):\/\/www.9ku.com\/play\/(.*?)/) || url.match(/(.*?):\/\/m.9ku.com\/play\/(.*?)/) || url.match(/(.*?):\/\/www.acfun.cn\/(.*?)\/ac(.*?)/) || url.match(/(.*?):\/\/m.youku.com\/(.*?)\/id_(.*?)/) || url.match(/(.*?):\/\/m.mgtv.com\/b\/(.*?)/) || url.match(/(.*?):\/\/m.pptv.com\/show\/(.*?)/) || url.match(/(.*?):\/\/m.tv.sohu.com\/v(.*?)/) || url.match(/(.*?):\/\/m.tv.sohu.com\/u\/(.*?)/) || url.match(/(.*?):\/\/m.tv.sohu.com\/phone_play_film(.*?)/) || url.match(/(.*?):\/\/m.le.com\/vplay_(.*?)/) || url.match(/(.*?):\/\/m.iqiyi.com\/v_(.*?)/) || url.match(/(.*?):\/\/m.v.qq.com\/(.*?)/) || url.match(/(.*?):\/\/3g.v.qq.com\/(.*?)/) || url.match(/(.*?):\/\/v.qq.com\/x\/page\/(.*?)/) || url.match(/(.*?):\/\/z1.m1907.cn\/(.*?)/) || url.match(/(.*?):\/\/www.yinyuetai.com\/play?id=(.*?)/) || url.match(/(.*?):\/\/m.bilibili.com\/bangumi\/play\/(.*?)/) || url.match(/(.*?):\/\/m.acfun.cn\/v\/(.*?)/) || url.match(/(.*?):\/\/m.douban.com\/movie\/subject\/(.*?)/) || url.match(/(.*?):\/\/music.163.com\/(.*?)/) || url.match(/(.*?):\/\/y.music.163.com\/(.*?)/) || url.match(/(.*?):\/\/kuwo.cn\/(.*?)/) || url.match(/(.*?):\/\/bd.kuwo.cn\/(.*?)/) || url.match(/(.*?):\/\/www.kuwo.cn\/(.*?)/) || url.match(/(.*?):\/\/m.kuwo.cn\/newh5(.*?)/) || url.match(/(.*?):\/\/www.kugou.com\/song\/(.*?)/) || url.match(/(.*?):\/\/www.kugou.com\/mvweb\/(.*?)/) || url.match(/(.*?):\/\/m3ws.kugou.com\/kgsong\/(.*?)/) || url.match(/(.*?):\/\/m3ws.kugou.com\/mv\/(.*?)/) || url.match(/(.*?):\/\/m.kugou.com\/(.*?)/) || url.match(/(.*?):\/\/y.qq.com\/(.*?)/) || url.match(/(.*?):\/\/i.y.qq.com\/(.*?)/) || url.match(/(.*?):\/\/www.xiami.com\/(.*?)/) || url.match(/(.*?):\/\/h.xiami.com\/(.*?)/) || url.match(/(.*?):\/\/m.xiami.com\/(.*?)/) || url.match(/(.*?):\/\/music.migu.cn\/(.*?)/) || url.match(/(.*?):\/\/m.music.migu.cn\/(.*?)/) || url.match(/(.*?):\/\/5sing.kugou.com\/(.*?)/) || url.match(/(.*?):\/\/kg.qq.com\/node\/(.*?)/) || url.match(/(.*?):\/\/www.app-echo.com\/(.*?)/) || url.match(/(.*?):\/\/radio.sky31.com\/(.*?)/) || url.match(/(.*?):\/\/www.lrts.me\/playlist(.*?)/) || url.match(/(.*?):\/\/m.ximalaya.com\/(.*?)/) || url.match(/(.*?):\/\/www.ximalaya.com\/(.*?)/) || url.match(/(.*?):\/\/www.1ting.com\/(.*?)/)) {
var jsurl = 'https://greasyfork.org/scripts/413063-%E7%94%B5%E8%84%91-%E6%89%8B%E6%9C%BA-%E5%85%A8%E7%BD%91%E5%94%AF%E4%B8%80%E5%85%A8%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC-vip%E4%BC%9A%E5%91%98%E8%A7%86%E9%A2%91%E8%87%AA%E5%8A%A8%E8%A7%A3%E6%9E%90/code/%E3%80%90%E7%94%B5%E8%84%91%20%20%E6%89%8B%E6%9C%BA%20%E5%85%A8%E7%BD%91%E5%94%AF%E4%B8%80%E5%85%A8%E8%87%AA%E5%8A%A8%E8%84%9A%E6%9C%AC%E3%80%91VIP%E4%BC%9A%E5%91%98%E8%A7%86%E9%A2%91%E8%87%AA%E5%8A%A8%E8%A7%A3%E6%9E%90.user.js';
var isloadjs = false;
try {
isloadjs = window.mx_browser_obj.getisloadjs();
}
catch (e) {}
if (isloadjs) {
var oHead20540440 = document.getElementsByTagName('body').item(0);
var oScript20540440 = document.createElement('script');
oScript20540440.type = 'text/javascript';
oScript20540440.src = jsurl;
oHead20540440.appendChild(oScript20540440);
}
else
{
var xhr = new XMLHttpRequest();
xhr.open('get', jsurl);
xhr.withCredentials = false;
xhr.onreadystatechange = function() {
if (xhr.readyState === 4) {
eval(xhr.responseText);
}
};
xhr.send();
}
}
})
();