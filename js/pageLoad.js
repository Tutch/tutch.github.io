let rootPage = 'https://tutch.github.io/';

function redirectToPage(callback) {
	let userLang = navigator.language || navigator.userLanguage
	
	if (!userLang.startsWith('pt') && window.location.href == rootPage) {
		window.location.href = './en/index.html';
	}	
	callback();
}

function setup() {
	$(document).ready(function() {
		$('#fullpage').fullpage({
		  anchors:['inicio','sobre', 'trabalhos'],
			onLeave: function(index, nextIndex, direction){
			  let leavingSection = $(this);

			  if(nextIndex == 2){
				$('#about').children().addClass('in-view');
			  }else if(nextIndex == 3){
				$('#work').children().addClass('in-view');
			  }
			}

		});

		$('#work_slides').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  autoplay: true,
		  autoplaySpeed: 12000,
		  appendDots: $('#slicknav')
		});

		let isMobile = window.matchMedia("only screen and (max-width: 760px)");

		if (isMobile.matches) {
		  $.fn.fullpage.setAutoScrolling(false);
		}
	});
}

$(window).load(function() {
	redirectToPage(() => {
		$('#loadBlock').fadeOut('fast');;
		setup();
	});
});
	


