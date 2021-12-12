<head>
<meta charset="utf-8">
<title></title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"/>
<meta name="renderer" content="webkit"/>
<meta name="force-rendering" content="webkit"/>
<script src="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js" integrity="sha384-gCMZcshYKOGRX9r6wbDrvF+TcCCswSHFucUzUPwka+Gr+uHgjlYvkABr95TCOz3A" crossorigin="anonymous" ></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css" integrity="sha384-cLRrMq39HOZdvE0j6yBojO4+1PrHfB7a9l5qLcmRm/fiWXYY+CndJPmyu5FV/9Tw" crossorigin="anonymous" />
</head>

<body class="mdui-appbar-with-toolbar">
<div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-toolbar-hide">
<div class="mdui-toolbar mdui-color-theme"><span class="mdui-typo-title"></span><div class="mdui-toolbar-spacer"></div>
<a href="" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">refresh</i></a>
</div>
</div>
<div class="mdui-container">

<?php
$url = file_get_contents("http://floor.huluxia.com/post/slide/ANDROID/4.1?platform=2&gkey=000000&app_version=4.1.1.6.2&versioncode=335&market_id=tool_xiaomi&_key=FB0E2E97EA63912182DF50702AD400082F9881BBAB4D052BD234CE1F92D6B03B3D78F9CF70F5AF68237CE2F75BCD44AFD7943C8A4C137308&device_code=%5Bd%5Dc1d1306e-b864-4b21-993a-2b4fffaf1dcf&phone_brand_type=MI");

$title = $url["title"];

echo $title;

?>