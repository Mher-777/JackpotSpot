import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay, FreeMode, HashNavigation } from 'swiper/modules';

var sliders = {
    selector: ".js-slider",

    settings: {
        modules: [],
        loop: true,
        pagination: {
            clickable: true
        },
        autoplay: {
            delay: 5000,
        }
    },

    build: (selector) => {
        let data = $(selector).attr("data-settings")
            ? $(selector).data("settings")
            : {};
        let clone = JSON.parse(JSON.stringify(sliders.settings));

        let current = Object.assign(clone, data);
        current.modules.push(Navigation, Pagination, EffectFade, Autoplay, FreeMode, HashNavigation) // Добавляем Модули

        new Swiper($(selector)[0], current)

        selector.addEventListener('touchstart', () => false, { passive: false })

    },

    run: (selector) => {
        sliders.build(selector);
    },

    init: () => {
        if (!$(sliders.selector).length) return false;

        $(window).on("load", (e) => {
            $(sliders.selector).each((i, el) => {
                sliders.run(el);
            });
        });

        $(window).bind('resize', function(e)
        {
            if (window.RT) clearTimeout(window.RT);
            window.RT = setTimeout(function()
            {
                $(sliders.selector).each((i, el) => {
                    sliders.run(el);
                });
            }, 100);
        });
    },
};

export { sliders };