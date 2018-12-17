/* 
 *[]数组中为本模块的依赖项
 */
define(['jquery'],function() {
    var alertName = function (str) {
        alert('i am' + str);
        $('#waveform-1').html('i am ' + str);
    }
    var alertAge = function (num) {
        alert('i am' + num + 'years old');
    }
    return {
        alertName, alertAge
    }
})