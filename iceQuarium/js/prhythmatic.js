$(function() {
	$("body").queryLoader2({
		barColor: "rgb(100, 200, 255)",
		backgroundColor: "#111",
		barHeight: 2,
	});

    // ヘッダーメニューのスムーススクロール
    const easeFunctions = {
        easeInQuad: function (t, b, c, d) {
            t /= d;
            return c * t * t + b;
        },
        easeOutQuad: function (t, b, c, d) {
            t /= d;
            return -c * t* (t - 2) + b;
        }
    }
    const moveTo = new MoveTo({
        tolerance: $('header').height() - 1,
        ease: 'easeInQuad'
    }, easeFunctions);
    const triggers = $('.js-trigger');
    for (var i = 0; i < triggers.length; i++) {
        moveTo.registerTrigger(triggers[i]);
    }
});

$(window).load(function () { // 全ての読み込みが完了したら実行
    stopload();
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'js/particlesjs-config.json', function () {
        console.log('callback - particles.js config loaded');
    });
});

function stopload() {
    $('.animation_load').delay(400).fadeOut(400);
    $('#fh5co-wrapper').css('display', 'block');
}
