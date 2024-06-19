import { config } from "../config";

var menu = {
    resizeTimer: '',
    hamburger: '.js-hamburger',

    OldScrollPosition: 0,

    scrollState: () => {
        const $header = $('.header');

        // if ($(window).width() > 580) {
        //     $header.removeAttr('style')
        //     return false
        // }

        const ScrollDown = menu.OldScrollPosition < window.scrollY;

        menu.OldScrollPosition = window.scrollY;

        const HEADER_TOP_HEIGHT = $header.outerHeight();

        if (window.scrollY > HEADER_TOP_HEIGHT) {

            const style = {
                'margin-top': `${-HEADER_TOP_HEIGHT - 40}px`,
            };

            if (!ScrollDown) {
                style['margin-top'] = 0;
            }
            setTimeout(function () {
                $header.addClass('is-sticky')
                $header.css(style)
            }, 100)

        } else {

            if (!ScrollDown) {
                setTimeout(function () {
                    $header.css({
                        'margin-top': 0,
                    })

                    $header.removeClass('is-sticky')
                }, 100)
            } else {
                setTimeout(function () {
                    $header.removeAttr('style')
                    $header.removeClass('is-sticky')
                }, 100)
            }
        }
    },

    toggle: () => {
        if ($(window).width() > 580) {
            $(menu.hamburger).removeClass('is-active')
            $(config.body).removeClass('is-open')
            $(config.html).removeClass('js-lock')
            return false;
        }
        $(menu.hamburger).on('click', function(e) {
            clearTimeout(menu.resizeTimer);
            menu.resizeTimer = setTimeout(() => {
                e.preventDefault()
                const $this = $(this)

                $this.toggleClass('is-active')
                $(config.html).toggleClass('js-lock')
                $(this).closest('body').toggleClass('is-open')
            }, 25);

        })
    },

    init: () => {
        config.addListenerMulti(window, 'resize load',  function () {
            menu.toggle()
        })
        config.addListenerMulti(window, 'scroll load', function () {
            menu.scrollState()
        })
    }
}

export { menu };