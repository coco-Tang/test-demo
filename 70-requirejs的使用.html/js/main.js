// alert("hello");
require.config({
　　baseUrl: "js",
　　paths: {
　　    "jquery": "lib/jquery.min",
// 　　    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",//通过网址CDN等访问
　　    "template": "lib/template-web",
        // "alert": "",
        "ImageEditor": "lib/tui-image-editor"
　　}
});
require(['jquery','template'],function ($,template) {
    $('#waveform-1').html("hello, world!");
});



require(['ImageEditor'], function(fn) {
//     var ImageEditor = fn;
// var blackTheme = require('./js/theme/black-theme.js');
// var instance = new ImageEditor(document.querySelector('#waveform-1'), {
//      includeUI: {
//          loadImage: {
//              path: 'img/sampleImage.jpg',
//              name: 'SampleImage'
//          },
//          theme: blackTheme, // or whiteTheme
//          initMenu: 'filter',
//          menuBarPosition: 'bottom'
//      },
//     cssMaxWidth: 700,
//     cssMaxHeight: 500,
//     selectionStyle: {
//         cornerSize: 20,
//         rotatingPointOffset: 70
//     }
});

    

// }])


/* 
 *依赖模块不配置别名，可以直接在基路径下拼接地址
 */
// require(['moduleA/alert'], function (alert) {
//     alert.alertName('cocoTang');
//     alert.alertAge(18);
// })