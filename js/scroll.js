$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('.scroll-to-top').fadeIn();
			} else {
				$('.scroll-to-top').fadeOut();
			}
		});
		$('.scroll-to-top').click(function () {
			$('body, html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});
$('a.js-scroll-trigger').click(function () {
    const target = $(this.hash);
    $('.navbar-toggler').click()
    $('body, html').animate({
        scrollTop: target.offset().top
    }, 1000);
    return false;
});