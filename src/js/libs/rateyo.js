/*rateYo V2.3.2, A simple and flexible star rating plugin
prashanth pamidi (https://github.com/prrashi)*/
!function (a) {
    "use strict";

    function b() {
        var a = !1;
        return function (b) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
        }(navigator.userAgent || navigator.vendor || window.opera), a
    }

    function c(a, b, c) {
        return a === b ? a = b : a === c && (a = c), a
    }

    function d(a, b, c) {
        if (!(a >= b && a <= c)) throw Error("Invalid Rating, expected value between " + b + " and " + c);
        return a
    }

    function e(a) {
        return void 0 !== a
    }

    function f(a, b, c) {
        var d = c / 100 * (b - a);
        return d = Math.round(a + d).toString(16), 1 === d.length && (d = "0" + d), d
    }

    function g(a, b, c) {
        if (!a || !b) return null;
        c = e(c) ? c : 0, a = q(a), b = q(b);
        var d = f(a.r, b.r, c), g = f(a.b, b.b, c);
        return "#" + d + f(a.g, b.g, c) + g
    }

    function h(f, i) {
        function k(a) {
            e(a) || (a = i.rating), Z = a;
            var b = a / P, c = b * R;
            b > 1 && (c += (Math.ceil(b) - 1) * T), r(i.ratedFill), c = i.rtl ? 100 - c : c, c < 0 ? c = 0 : c > 100 && (c = 100), X.css("width", c + "%")
        }

        const remCalc = (px, base = 10) => {
            let tempPx = px
            if (typeof px === 'string' || px instanceof String)
                tempPx = tempPx.replace('px','')

            tempPx = parseInt(tempPx)
            return (1 / base) * tempPx + 'rem'
        }

        function l() {
            U = Q * i.numStars + S * (i.numStars - 1), R = Q / U * 100, T = S / U * 100, f.width(remCalc(U)), k()
        }

        function n(a) {
            var b = i.starWidth = a;
            return Q = window.parseFloat(i.starWidth.replace("px", "")), W.find("svg").attr({
                width: remCalc(i.starWidth),
                height: remCalc(b)
            }), X.find("svg").attr({width: remCalc(i.starWidth), height: remCalc(b)}), l(), f
        }

        function p(a) {
            return i.spacing = a, S = parseFloat(i.spacing.replace("px", "")), W.find("svg:not(:first-child)").css({"margin-left": a}), X.find("svg:not(:first-child)").css({"margin-left": a}), l(), f
        }

        function q(a) {
            return i.normalFill = a, (i.rtl ? X : W).find("svg").attr({fill: i.normalFill}), f
        }

        function r(a) {
            if (i.multiColor) {
                var b = Z - Y, c = b / i.maxValue * 100, d = i.multiColor || {};
                a = g(d.startColor || o.startColor, d.endColor || o.endColor, c)
            } else _ = a;
            return i.ratedFill = a, (i.rtl ? W : X).find("svg").attr({fill: i.ratedFill}), f
        }

        function s(a) {
            a = !!a, i.rtl = a, q(i.normalFill), k()
        }

        function t(a) {
            i.multiColor = a, r(a ? a : _)
        }

        function u(b) {
            i.numStars = b, P = i.maxValue / i.numStars, W.empty(), X.empty();
            for (var c = 0; c < i.numStars; c++) W.append(a(i.starSvg || m)), X.append(a(i.starSvg || m));
            return n(i.starWidth), q(i.normalFill), p(i.spacing), k(), f
        }

        function v(a) {
            return i.maxValue = a, P = i.maxValue / i.numStars, i.rating > a && C(a), k(), f
        }

        function w(a) {
            return i.precision = a, C(i.rating), f
        }

        function x(a) {
            return i.halfStar = a, f
        }

        function y(a) {
            return i.fullStar = a, f
        }

        function z(a) {
            var b = a % P, c = P / 2, d = i.halfStar, e = i.fullStar;
            return e || d ? (e || d && b > c ? a += P - b : (a -= b, b > 0 && (a += c)), a) : a
        }

        function A(a) {
            var b = W.offset(), c = b.left, d = c + W.width(), e = i.maxValue, f = a.pageX, g = 0;
            if (f < c) g = Y; else if (f > d) g = e; else {
                var h = (f - c) / (d - c);
                if (S > 0) {
                    h *= 100;
                    for (var j = h; j > 0;) j > R ? (g += P, j -= R + T) : (g += j / R * P, j = 0)
                } else g = h * i.maxValue;
                g = z(g)
            }
            return i.rtl && (g = e - g), parseFloat(g)
        }

        function B(a) {
            return i.readOnly = a, f.attr("readonly", !0), N(), a || (f.removeAttr("readonly"), M()), f
        }

        function C(a) {
            var b = a, e = i.maxValue;
            return "string" == typeof b && ("%" === b[b.length - 1] && (b = b.substr(0, b.length - 1), e = 100, v(e)), b = parseFloat(b)), d(b, Y, e), b = parseFloat(b.toFixed(i.precision)), c(parseFloat(b), Y, e), i.rating = b, k(), $ && f.trigger("rateyo.set", {rating: b}), f
        }

        function D(a) {
            return i.onInit = a, f
        }

        function E(a) {
            return i.onSet = a, f
        }

        function F(a) {
            return i.onChange = a, f
        }

        function G(a) {
            var b = A(a).toFixed(i.precision), d = i.maxValue;
            b = c(parseFloat(b), Y, d), k(b), f.trigger("rateyo.change", {rating: b})
        }

        function H() {
            b() || (k(), f.trigger("rateyo.change", {rating: i.rating}))
        }

        function I(a) {
            var b = A(a).toFixed(i.precision);
            b = parseFloat(b), O.rating(b)
        }

        function J(a, b) {
            i.onInit && "function" == typeof i.onInit && i.onInit.apply(this, [b.rating, O])
        }

        function K(a, b) {
            i.onChange && "function" == typeof i.onChange && i.onChange.apply(this, [b.rating, O])
        }

        function L(a, b) {
            i.onSet && "function" == typeof i.onSet && i.onSet.apply(this, [b.rating, O])
        }

        function M() {
            f.on("mousemove", G).on("mouseenter", G).on("mouseleave", H).on("click", I).on("rateyo.init", J).on("rateyo.change", K).on("rateyo.set", L)
        }

        function N() {
            f.off("mousemove", G).off("mouseenter", G).off("mouseleave", H).off("click", I).off("rateyo.init", J).off("rateyo.change", K).off("rateyo.set", L)
        }

        this.node = f.get(0);
        var O = this;
        f.empty().addClass("jq-ry-container");
        var P, Q, R, S, T, U, V = a("<div/>").addClass("jq-ry-group-wrapper").appendTo(f),
            W = a("<div/>").addClass("jq-ry-normal-group").addClass("jq-ry-group").appendTo(V),
            X = a("<div/>").addClass("jq-ry-rated-group").addClass("jq-ry-group").appendTo(V), Y = 0, Z = i.rating,
            $ = !1, _ = i.ratedFill;
        this.rating = function (a) {
            return e(a) ? (C(a), f) : i.rating
        }, this.destroy = function () {
            return i.readOnly || N(), h.prototype.collection = j(f.get(0), this.collection), f.removeClass("jq-ry-container").children().remove(), f
        }, this.method = function (a) {
            if (!a) throw Error("Method name not specified!");
            if (!e(this[a])) throw Error("Method " + a + " doesn't exist!");
            var b = Array.prototype.slice.apply(arguments, []), c = b.slice(1);
            return this[a].apply(this, c)
        }, this.option = function (a, b) {
            if (!e(a)) return i;
            var c;
            switch (a) {
                case"starWidth":
                    c = n;
                    break;
                case"numStars":
                    c = u;
                    break;
                case"normalFill":
                    c = q;
                    break;
                case"ratedFill":
                    c = r;
                    break;
                case"multiColor":
                    c = t;
                    break;
                case"maxValue":
                    c = v;
                    break;
                case"precision":
                    c = w;
                    break;
                case"rating":
                    c = C;
                    break;
                case"halfStar":
                    c = x;
                    break;
                case"fullStar":
                    c = y;
                    break;
                case"readOnly":
                    c = B;
                    break;
                case"spacing":
                    c = p;
                    break;
                case"rtl":
                    c = s;
                    break;
                case"onInit":
                    c = D;
                    break;
                case"onSet":
                    c = E;
                    break;
                case"onChange":
                    c = F;
                    break;
                default:
                    throw Error("No such option as " + a)
            }
            return e(b) ? c(b) : i[a]
        }, u(i.numStars), B(i.readOnly), i.rtl && s(i.rtl), this.collection.push(this), this.rating(i.rating, !0), $ = !0, f.trigger("rateyo.init", {rating: i.rating})
    }

    function i(b, c) {
        var d;
        return a.each(c, function () {
            if (b === this.node) return d = this, !1
        }), d
    }

    function j(b, c) {
        return a.each(c, function (a) {
            if (b === this.node) {
                var d = c.slice(0, a), e = c.slice(a + 1, c.length);
                return c = d.concat(e), !1
            }
        }), c
    }

    function k(b) {
        var c = h.prototype.collection, d = a(this);
        if (0 === d.length) return d;
        var e = Array.prototype.slice.apply(arguments, []);
        if (0 === e.length) b = e[0] = {}; else {
            if (1 !== e.length || "object" != typeof e[0]) {
                if (e.length >= 1 && "string" == typeof e[0]) {
                    var f = e[0], g = e.slice(1), j = [];
                    return a.each(d, function (a, b) {
                        var d = i(b, c);
                        if (!d) throw Error("Trying to set options before even initialization");
                        var e = d[f];
                        if (!e) throw Error("Method " + f + " does not exist!");
                        var h = e.apply(d, g);
                        j.push(h)
                    }), j = 1 === j.length ? j[0] : j
                }
                throw Error("Invalid Arguments")
            }
            b = e[0]
        }
        return b = a.extend({}, n, b), a.each(d, function () {
            var d = i(this, c);
            if (d) return d;
            var e = a(this), f = {}, g = a.extend({}, b);
            return a.each(e.data(), function (a, b) {
                if (0 === a.indexOf("rateyo")) {
                    var c = a.replace(/^rateyo/, "");
                    c = c[0].toLowerCase() + c.slice(1), f[c] = b, delete g[c]
                }
            }), new h(a(this), a.extend({}, f, g))
        })
    }

    function l() {
        return k.apply(this, Array.prototype.slice.apply(arguments, []))
    }

    var m = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1"xmlns="http://www.w3.org/2000/svg"viewBox="0 12.705 512 486.59"x="0px" y="0px"xml:space="preserve"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "/></svg>',
        n = {
            starWidth: "32px",
            normalFill: "gray",
            ratedFill: "#f39c12",
            numStars: 5,
            maxValue: 5,
            precision: 1,
            rating: 0,
            fullStar: !1,
            halfStar: !1,
            readOnly: !1,
            spacing: "0px",
            rtl: !1,
            multiColor: null,
            onInit: null,
            onChange: null,
            onSet: null,
            starSvg: null
        }, o = {startColor: "#c0392b", endColor: "#f1c40f"}, p = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
        q = function (a) {
            if (!p.test(a)) return null;
            var b = p.exec(a);
            return {r: parseInt(b[1], 16), g: parseInt(b[2], 16), b: parseInt(b[3], 16)}
        };
    h.prototype.collection = [], window.RateYo = h, a.fn.rateYo = l
}(window.jQuery);
//# sourceMappingURL=jquery.rateyo.min.js.map