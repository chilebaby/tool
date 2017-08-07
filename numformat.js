/**
 * 格式化
 * @param num
 * @returns {*}
 */
function (num) {
    if (!num) {
        return '';
    }
    var data = num;
    if (angular.isNumber(num)) {
        data = num.toString();
    }
    var len = data.length;
    var rest = parseInt(len / 3, 0);
    var mod = len % 3;
    var ary = [];
    var temp = - 3; // 开始的为位置
    // 每次循环从数组中取出3位
    for (var i = 0; i < rest; i++) {
        // 取出数组中的3位
        ary.push(data.substr(temp, 3));
        temp = temp - 3;
    }
    if (mod > 0) {
        ary.push(data.substr(0, mod));
    }
    return ary.reverse().join(',');
};