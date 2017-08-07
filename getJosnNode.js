/**
 *
 * @param data json格式的数据
 * @param pathAry
 * @returns {*}
 */
function getJsonpathNode(data, pathAry) {
    var node = data[pathAry[0]];
    function a(key) {
        function inc() {
            node = node[key];
        }
        return inc();
    }
    for (var i = 1; i < pathAry.length - 1; i++) {
        a(pathAry[i]);
    }
    return node;
}
return {
    get: getJsonpathNode
};