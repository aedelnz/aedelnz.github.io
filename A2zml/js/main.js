
//Title
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '你以断开御坂网络... - '+ OriginTitile;
        clearTimeout(titleTime);
    } else {
        document.title = '御坂网络连接成功，欢迎回家。！！！ - '+ OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 1000);
    }
});

//Log
console.log('什么都没有');
