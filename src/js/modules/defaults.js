import {config} from "../config";

var defaults = {

	events: () => {
		const desktop = window.matchMedia('(max-width: 1440px)')
		const tablet = window.matchMedia('(max-width: 992px)')
		const mobile = window.matchMedia('(max-width: 580px)')

		let resizeTimer;
		config.addListenerMulti(window, 'resize load', function () {
			// document.body.classList.add("resize-animation-stopper");
			let headerHeight = config.header.innerHeight();
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {

				// document.body.classList.remove("resize-animation-stopper");
				const root = document.querySelector(':root');
				root.style.setProperty('--padding-top', `${headerHeight}px`);
			}, 1);
		})

		$('.js-scroll').on('click', function() {
			let target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		});

		$(".js-link").click(function(e) {
			const aid = $(this).attr("href");
			$('html, body').animate({scrollTop: $(aid).offset().top},'slow');
		});
	},

	init: () => {

		defaults.events();

	}
}

export { defaults }