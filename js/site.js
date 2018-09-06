function resize() {
    $('.banner').height(2300 * $('.banner').width() / 2880);
    $('.slogen').css('padding-top', $('.banner').height() * 0.12);
    $('.slogen').css('font-size', $('.banner').height() * 0.048);
    var splitHeight = 587 * $('.banner').width() / 1855;
    $('.split').css('margin-top', -splitHeight);
    $('.split').css('border-width', '0 0 ' + splitHeight.toFixed(3) + 'px ' + $('.banner').width() + 'px');
    $('.circle-right').height($('.circle-width-dot').height());
    var zoom = $('.circle-width-dot').height() / 4.0 / 160.0;
    $('.circle-item').css('zoom', zoom);
    $('.hotspot').height(25 * $('.circle-width-dot').height() / 936);
    $('.hotspot').width(25 * $('.circle-width-dot').height() / 936);
    var offset = $('.circle-width-dot').offset();
    $('#hotspot-1').css('top', offset.top + 95 * $('.circle-width-dot').height() / 936);
    $('#hotspot-1').css('left', offset.left + 739 * $('.circle-width-dot').width() / 936);
    $('#hotspot-line-1').css('top', offset.top + 106.5 * $('.circle-width-dot').height() / 936);
    $('#hotspot-line-1').css('left', offset.left + 764 * $('.circle-width-dot').width() / 936);
    $('#hotspot-line-1').width(85 * zoom + (936 - 757) * $('.circle-width-dot').width() / 936);
    $('#hotspot-2').css('top', offset.top + 325 * $('.circle-width-dot').height() / 936);
    $('#hotspot-2').css('left', offset.left + 895 * $('.circle-width-dot').width() / 936);
    $('#hotspot-line-2').css('top', offset.top + 333 * $('.circle-width-dot').height() / 936);
    $('#hotspot-line-2').css('left', offset.left + 915 * $('.circle-width-dot').width() / 936);
    $('#hotspot-line-2').width(85 * zoom + (936 - 905) * $('.circle-width-dot').width() / 936);
    $('#hotspot-3').css('top', offset.top + 602 * $('.circle-width-dot').height() / 936);
    $('#hotspot-3').css('left', offset.left + 895 * $('.circle-width-dot').width() / 936);
    $('#hotspot-line-3').css('top', offset.top + 612 * $('.circle-width-dot').height() / 936);
    $('#hotspot-line-3').css('left', offset.left + 920 * $('.circle-width-dot').width() / 936);
    $('#hotspot-line-3').width(85 * zoom + (936 - 910) * $('.circle-width-dot').width() / 936);
    $('#hotspot-4').css('top', offset.top + 826 * $('.circle-width-dot').height() / 936);
    $('#hotspot-4').css('left', offset.left + 730 * $('.circle-width-dot').width() / 936);
    $('#hotspot-line-4').css('top', offset.top + 838 * $('.circle-width-dot').height() / 936);
    $('#hotspot-line-4').css('left', offset.left + 755 * $('.circle-width-dot').width() / 936);
    $('#hotspot-line-4').width(85 * zoom + (936 - 745) * $('.circle-width-dot').width() / 936);
}
$(document).ready(function() {
    $(window).resize(function() {
        resize();
    });
    resize();
});