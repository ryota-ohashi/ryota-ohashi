window.addEventListener('DOMContentLoaded', () => {

	// スムーズスクロール
	$('a[href^="#"]').click(function(){
	var speed = 400;
	var href = $(this).attr("href");
	var tar = $(href == "#" || href == "" ? 'html' : href);
	var pos = tar.offset().top - 100;

	$('html, body').animate({scrollTop: pos}, speed, 'swing');
	return false;
	});

	//spmenu用
	$('.header__menu').click(function(){
		$('body').toggleClass('open');
	});

	//aタグをクリックしたときにspmenuを閉じる
	$('.header__gnav__ul__item a').click(function(){
		if ( $('body').hasClass('open') ) {
			$('body').removeClass('open');
		}
	})

	//スクロール関連
	$(window).on('scroll load', function(){

		let currentPosition = $(window).scrollTop();

		//ヘッダー用
		if(currentPosition > 50) {

			//spmenuが開いていない時
			if ( !$('body').hasClass('open') ) {

				$('.header').css('border', '1px solid #333');
				$('.header__heading-subtitle').css('display', 'none');
				$('.header__menu').css('top', '9px');
				//border1px文を加味して上へ(特にsp用)
				$('.header').css('top', '-1px');
				//header__bg用
				$('.header__bg').css('height', '100%');
			};
		}
		else {

			if ( $(window).width() > 768 ) {
					$('.header').css('top', '50px');
			}

			//spmenuが開いていないとき
			if ( !$('body').hasClass('open') ) {

				//tab以上の時、headerが動く
				$('.header').css('border', '1px solid grey');
				$('.header__heading-subtitle').css('display', 'block');
				$('.header__menu').css('top', '22px');

				//header__bg用
				$('.header__bg').css('height', '0%');
			};
		};

		//背景色変更用
		let aboutSection = $('#about').offset().top;
		let skillsSection = $('#skill').offset().top;
		let portfolioSection = $('#portfolio').offset().top;
		let contactSection = $('#contact').offset().top;

		let screenHeight = $(window).height();
		let adjustmentValue = screenHeight / 2;　//調整値

		if( skillsSection - adjustmentValue >= currentPosition && currentPosition >= aboutSection - adjustmentValue ) {
			$('.bg').css('background-color', '#ccc');
		} else if( portfolioSection - adjustmentValue >= currentPosition && currentPosition >= skillsSection - adjustmentValue) {
			$('.bg').css('background-color', 'black');
		} else if( contactSection - adjustmentValue >= currentPosition && currentPosition >= portfolioSection - adjustmentValue) {
			$('.bg').css('background-color', '#ccc');
		} else {
			$('.bg').css('background-color', 'black');
		};
	});
});