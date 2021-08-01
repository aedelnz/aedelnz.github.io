
window.onload=function(){
document.onkeydown=function(){
var e=window.event||arguments[0];
if(e.keyCode==123){
alert("小样你想干嘛？");
return false;
}else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
alert("还是不给你看。。");
return false;
}else if((e.shiftKey) && (e.keyCode == 121)){
return false;
//Ctrl+U
}else if((e.ctrlKey) && (e.keyCode == 85)){
return false;
}
};
document.oncontextmenu=function(){
alert("小样不给你看");
return false;
}
}

