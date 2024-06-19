import "../libs/rateyo";

var rate = {
    selector: '.js-rate',

    init: () => {
        $(rate.selector).rateYo({
            starWidth: "40px",
            ratedFill: "#FF7C24",
            starSvg: `
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                  <path d="M20.0003 2.16669L24.3282 15.5355H38.3337L27.003 23.7979L31.3309 37.1667L20.0003 28.9043L8.6697 37.1667L12.9976 23.7979L1.66699 15.5355H15.6724L20.0003 2.16669Z"/>
                </svg>
            `
        });
    }
}

export { rate }