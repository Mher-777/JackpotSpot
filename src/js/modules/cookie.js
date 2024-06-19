var cookie = {
    popUp: $('#cookiePopup'),

    getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
                end = dc.length;
            }
        }
        // because unescape has been deprecated, replaced with decodeURI
        //return unescape(dc.substring(begin + prefix.length, end));
        return decodeURI(dc.substring(begin + prefix.length, end));
    },

    checkCookie() {
        if (cookie.getCookie('myCookieName')) {
            cookie.popUp.hide();
        } else {
            cookie.popUp.show();
        }
    },

    init: () => {
        $("#acceptCookie").on("click", () => {
            document.cookie = "myCookieName=thisIsMyCookie; expires = " + new Date(new Date().getTime() + 60 * 60 * 1000 * 24).toGMTString() + ";";
            cookie. popUp.hide();
        });

        $("#rejectCookie").on("click", () => {
            document.cookie = "myCookieName=thisIsMyCookie; expires = " + new Date(new Date().getTime() + 60 * 60 * 1000 * 24).toGMTString() + ";";
            cookie.popUp.hide();
        });

        window.addEventListener('load', () => {
            cookie.checkCookie()
        })
    }
}

export { cookie }

