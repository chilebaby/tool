/**
 * 状态机
 * @param container
 * @param status
 * @constructor
 */
function ConfigMore(container, status) {
    this.status = status;
    this.container = container;
}
ConfigMore.prototype = {
    set: function (curSta) {
        this.status = curSta;
        this.changeView();
    },
    get: function () {
        return this.status;
    },
    changeView: function () {
        var status = this.get();
        if (status) {
            // 显示
            this.container.show();
        }
        else {
            this.container.hide();
        }
    }
};

var configMoreIns = new ConfigMore($('#config-more'), false);
$('#btn-config-more').on('click', function () {
    var $span = $(this).find('span');
    if ($span.hasClass('icon-chevron-down')) {
        $span.removeClass().addClass('icon-chevron-up');
        configMoreIns.set(true);
    }
    else {
        $span.removeClass().addClass('icon-chevron-down');
        configMoreIns.set(false);
    }
});
window.addEventListener('hashchange', function () {
    // 重置
    $('#btn-config-more').find('span').removeClass().addClass('icon-chevron-down');
    configMoreIns.set(false);
});