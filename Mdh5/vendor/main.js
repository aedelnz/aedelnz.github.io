
//Title
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '你怎么忍心让它在后台... - '+ OriginTitile;
        clearTimeout(titleTime);
    } else {
        document.title = '欢迎回家。！！！ - '+ OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 1000);
    }
});

//Log
console.log('什么都没有');
