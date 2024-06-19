import $ from 'jquery';
import select2 from "../libs/select2";
var select = {
    selector: $('.js-select'),
    init: () => {
        function formatState (state) {
            if (!state.id) {
                return state.text;
            }
            const icon = $(state.element).attr('data-icon')
            const title = $(state.element).attr('data-title')

            if (icon) {
                return $(`<span>
                        <svg class="icon"><use xlink:href="app/icons/sprite.svg#${icon}"></use></svg>
                        <strong>${title}</strong>
                </span>`);
            }

            if (title) {
                return $(`<span>
                        <strong>${title}</strong>
                        ${state.text}
                </span>`);
            }
            return state.text;
        }

        $('.js-select').select2({
            minimumResultsForSearch: -1,
            width: '100%',
            dropdownAutoWidth: true,
            templateResult: formatState,
            templateSelection: function (state) {
                const title = $(state.element).attr('data-title')
                if (title) {
                    return `${title} ${state.text}`
                }

                return state.text
            }
        })
    }
}

export { select };