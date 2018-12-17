// alert("hello");
require.config({
　　baseUrl: "js",
　　paths: {
　　    "jquery": "lib/jquery.min",
// 　　    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",//通过网址CDN等访问
　　    "template": "lib/template-web",
        // "alert": "",
　　}
});
/* 
         *依赖模块不配置别名，可以直接在基路径下拼接地址
         */
        require(['moduleA/alert'], function (alert) {
            alert.alertName('cocoTang');
            alert.alertAge(18);
        })