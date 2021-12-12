<!-- <html>

<head>

<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" name="viewport">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css" integrity="sha384-cLRrMq39HOZdvE0j6yBojO4+1PrHfB7a9l5qLcmRm/fiWXYY+CndJPmyu5FV/9Tw" crossorigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js" integrity="sha384-gCMZcshYKOGRX9r6wbDrvF+TcCCswSHFucUzUPwka+Gr+uHgjlYvkABr95TCOz3A" crossorigin="anonymous" ></script>
</head>

<body class="mdui-appbar-with-toolbar mdui-container">


<div class="mdui-card mdui-center mdui-hoverable">
<div class="mdui-card-primary mdui-list-item-title">
<center> -->

<?php

function post_url($url, $data)
{
$curl = curl_init("https://api.sanfengyun.com/www/vhost.php"); // 启动一个CURL会话
curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE); // 对认证证书来源的检查
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE); // 从证书中检查SSL加密算法是否存在
curl_setopt($curl, CURLOPT_User-Agent, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'); // 模拟用户使用的浏览器
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
curl_setopt($curl, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
curl_setopt($curl, CURLOPT_Cookie, 'UM_distinctid=17d622e63172-0ab48422d067ab-39607b0f-6b1de-17d622e631812d; session_id=1638530439819549560; Hm_lvt_7397e2fa0abab809a259308d17507387=1638029747,1638530447; Hm_lpvt_7397e2fa0abab809a259308d17507387=1638530453'); // 发送一个常规的Post请求
curl_setopt($curl, CURLOPT_POSTFIELDS, $data); // Post提交的数据包x
curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制 防止死循环
curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
curl_setopt($curl, CURLOPT_Host, "api.sanfengyun.com"); // 
curl_setopt($curl, CURLOPT_Connection, "keep-alive"); // 
curl_setopt($curl, CURLOPT_Content-Length, "19"); // 
curl_setopt($curl, CURLOPT_, 1); // 
curl_setopt($curl, CURLOPT_, 1); // 

$tmpInfo = curl_exec($curl); // 执行操作
if(curl_errno($curl))
{
echo 'Errno'.curl_error($curl);//捕抓异常
}
curl_close($curl); // 关闭CURL会话
return $tmpInfo; // 返回数据
}

 
?>

</center>
</div></div>
<br>
</body>
</html>