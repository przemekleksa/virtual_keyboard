!(function (e) {
    var a = {};
    function r(t) {
        if (a[t]) return a[t].exports;
        var s = (a[t] = { i: t, l: !1, exports: {} });
        return e[t].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
    }
    (r.m = e),
        (r.c = a),
        (r.d = function (e, a, t) {
            r.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
        }),
        (r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, a) {
            if ((1 & a && (e = r(e)), 8 & a)) return e;
            if (4 & a && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if ((r.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & a && "string" != typeof e))
                for (var s in e)
                    r.d(
                        t,
                        s,
                        function (a) {
                            return e[a];
                        }.bind(null, s)
                    );
            return t;
        }),
        (r.n = function (e) {
            var a =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return r.d(a, "a", a), a;
        }),
        (r.o = function (e, a) {
            return Object.prototype.hasOwnProperty.call(e, a);
        }),
        (r.p = ""),
        r((r.s = 3));
})([
    function (e) {
        e.exports = JSON.parse(
            '[[{"lowerCase":"\'","upperCase":"₴","code":"Backquote"},{"lowerCase":"1","upperCase":"!","code":"Digit1"},{"lowerCase":"2","upperCase":"\\"","code":"Digit2"},{"lowerCase":"3","upperCase":"№","code":"Digit3"},{"lowerCase":"4","upperCase":";","code":"Digit4"},{"lowerCase":"5","upperCase":"%","code":"Digit5"},{"lowerCase":"6","upperCase":":","code":"Digit6"},{"lowerCase":"7","upperCase":"?","code":"Digit7"},{"lowerCase":"8","upperCase":"*","code":"Digit8"},{"lowerCase":"9","upperCase":"(","code":"Digit9"},{"lowerCase":"0","upperCase":")","code":"Digit0"},{"lowerCase":"-","upperCase":"_","code":"Minus"},{"lowerCase":"=","upperCase":"+","code":"Equal"},{"lowerCase":"Backspace","upperCase":"Backspace","size":2,"code":"Backspace"}],[{"lowerCase":"Tab","upperCase":"Tab","size":2,"code":"Tab","value":"\\t"},{"lowerCase":"й","upperCase":"Й","code":"KeyQ"},{"lowerCase":"ц","upperCase":"Ц","code":"KeyW"},{"lowerCase":"у","upperCase":"У","code":"KeyE"},{"lowerCase":"к","upperCase":"К","code":"KeyR"},{"lowerCase":"е","upperCase":"Е","code":"KeyT"},{"lowerCase":"н","upperCase":"Н","code":"KeyY"},{"lowerCase":"г","upperCase":"Г","code":"KeyU"},{"lowerCase":"ш","upperCase":"Ш","code":"KeyI"},{"lowerCase":"щ","upperCase":"Щ","code":"KeyO"},{"lowerCase":"з","upperCase":"З","code":"KeyP"},{"lowerCase":"х","upperCase":"Х","code":"BracketLeft"},{"lowerCase":"ї","upperCase":"Ї","code":"BracketRight"},{"lowerCase":"\\\\","upperCase":"/","code":"Backslash"}],[{"lowerCase":"Caps Lock","upperCase":"Caps Lock","size":2,"code":"CapsLock"},{"lowerCase":"ф","upperCase":"Ф","code":"KeyA"},{"lowerCase":"і","upperCase":"І","code":"KeyS"},{"lowerCase":"в","upperCase":"В","code":"KeyD"},{"lowerCase":"а","upperCase":"А","code":"KeyF"},{"lowerCase":"п","upperCase":"П","code":"KeyG"},{"lowerCase":"р","upperCase":"Р","code":"KeyH"},{"lowerCase":"о","upperCase":"О","code":"KeyJ"},{"lowerCase":"л","upperCase":"Л","code":"KeyK"},{"lowerCase":"д","upperCase":"Д","code":"KeyL"},{"lowerCase":"ж","upperCase":"Ж","code":"Semicolon"},{"lowerCase":"є","upperCase":"Є","code":"Quote"},{"lowerCase":"Enter","upperCase":"Enter","size":2,"code":"Enter","value":"\\n"}],[{"lowerCase":"Shift","upperCase":"Shift","size":2,"code":"ShiftLeft"},{"lowerCase":"я","upperCase":"Я","code":"KeyZ"},{"lowerCase":"ч","upperCase":"Ч","code":"KeyX"},{"lowerCase":"с","upperCase":"С","code":"KeyC"},{"lowerCase":"м","upperCase":"М","code":"KeyV"},{"lowerCase":"и","upperCase":"И","code":"KeyB"},{"lowerCase":"т","upperCase":"Т","code":"KeyN"},{"lowerCase":"ь","upperCase":"Ь","code":"KeyM"},{"lowerCase":"б","upperCase":"Б","code":"Comma"},{"lowerCase":"ю","upperCase":"Ю","code":"Period"},{"lowerCase":".","upperCase":",","code":"Slash"},{"lowerCase":"▲","upperCase":"▲","code":"ArrowUp"},{"lowerCase":"Shift","upperCase":"Shift","size":2,"code":"ShiftRight"}],[{"lowerCase":"Ctrl","upperCase":"Ctrl","code":"ControlLeft"},{"lowerCase":"Win","upperCase":"Win","code":"MetaLeft"},{"lowerCase":"Alt","upperCase":"Alt","code":"AltLeft"},{"lowerCase":"","upperCase":"","size":6,"code":"Space","value":" "},{"lowerCase":"Alt","upperCase":"Alt","code":"AltRight"},{"lowerCase":"Ctrl","upperCase":"Ctrl","code":"ControlRight"},{"lowerCase":"◄","upperCase":"◄","code":"ArrowLeft"},{"lowerCase":"▼","upperCase":"▼","code":"ArrowDown"},{"lowerCase":"►","upperCase":"►","code":"ArrowRight"}]]'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '[[{"lowerCase":"`","upperCase":"~","code":"Backquote"},{"lowerCase":"1","upperCase":"!","code":"Digit1"},{"lowerCase":"2","upperCase":"@","code":"Digit2"},{"lowerCase":"3","upperCase":"#","code":"Digit3"},{"lowerCase":"4","upperCase":"$","code":"Digit4"},{"lowerCase":"5","upperCase":"%","code":"Digit5"},{"lowerCase":"6","upperCase":"^","code":"Digit6"},{"lowerCase":"7","upperCase":"&","code":"Digit7"},{"lowerCase":"8","upperCase":"*","code":"Digit8"},{"lowerCase":"9","upperCase":"(","code":"Digit9"},{"lowerCase":"0","upperCase":")","code":"Digit0"},{"lowerCase":"-","upperCase":"_","code":"Minus"},{"lowerCase":"=","upperCase":"+","code":"Equal"},{"lowerCase":"Backspace","upperCase":"Backspace","size":2,"code":"Backspace"}],[{"lowerCase":"Tab ","upperCase":"Tab","size":2,"code":"Tab","value":"\\t"},{"lowerCase":"q","upperCase":"Q","code":"KeyQ"},{"lowerCase":"w","upperCase":"W","code":"KeyW"},{"lowerCase":"e","upperCase":"E","code":"KeyE"},{"lowerCase":"r","upperCase":"R","code":"KeyR"},{"lowerCase":"t","upperCase":"T","code":"KeyT"},{"lowerCase":"y","upperCase":"Y","code":"KeyY"},{"lowerCase":"u","upperCase":"U","code":"KeyU"},{"lowerCase":"i","upperCase":"I","code":"KeyI"},{"lowerCase":"o","upperCase":"O","code":"KeyO"},{"lowerCase":"p","upperCase":"P","code":"KeyP"},{"lowerCase":"[","upperCase":"{","code":"BracketLeft"},{"lowerCase":"]","upperCase":"}","code":"BracketRight"},{"lowerCase":"\\\\","upperCase":"|","code":"Backslash"}],[{"lowerCase":"Caps Lock","upperCase":"Caps Lock","size":2,"code":"CapsLock"},{"lowerCase":"a","upperCase":"A","code":"KeyA"},{"lowerCase":"s","upperCase":"S","code":"KeyS"},{"lowerCase":"d","upperCase":"D","code":"KeyD"},{"lowerCase":"f","upperCase":"F","code":"KeyF"},{"lowerCase":"g","upperCase":"G","code":"KeyG"},{"lowerCase":"h","upperCase":"H","code":"KeyH"},{"lowerCase":"j","upperCase":"J","code":"KeyJ"},{"lowerCase":"k","upperCase":"K","code":"KeyK"},{"lowerCase":"l","upperCase":"L","code":"KeyL"},{"lowerCase":";","upperCase":":","code":"Semicolon"},{"lowerCase":"\'","upperCase":"\\"","code":"Quote"},{"lowerCase":"Enter","upperCase":"Enter","size":2,"code":"Enter","value":"\\n"}],[{"lowerCase":"Shift","upperCase":"Shift","size":2,"code":"ShiftLeft"},{"lowerCase":"z","upperCase":"Z","code":"KeyZ"},{"lowerCase":"x","upperCase":"X","code":"KeyX"},{"lowerCase":"c","upperCase":"C","code":"KeyC"},{"lowerCase":"v","upperCase":"V","code":"KeyV"},{"lowerCase":"b","upperCase":"B","code":"KeyB"},{"lowerCase":"n","upperCase":"N","code":"KeyN"},{"lowerCase":"m","upperCase":"M","code":"KeyM"},{"lowerCase":",","upperCase":"<","code":"Comma"},{"lowerCase":".","upperCase":">","code":"Period"},{"lowerCase":"/","upperCase":"?","code":"Slash"},{"lowerCase":"▲","upperCase":"▲","code":"ArrowUp"},{"lowerCase":"Shift","upperCase":"Shift","size":2,"code":"ShiftRight"}],[{"lowerCase":"Ctrl","upperCase":"Ctrl","code":"ControlLeft"},{"lowerCase":"Win","upperCase":"Win","code":"MetaLeft"},{"lowerCase":"Alt","upperCase":"Alt","code":"AltLeft"},{"lowerCase":"","upperCase":"","size":6,"code":"Space","value":" "},{"lowerCase":"Alt","upperCase":"Alt","code":"AltRight"},{"lowerCase":"Ctrl","upperCase":"Ctrl","code":"ControlRight"},{"lowerCase":"◄","upperCase":"◄","code":"ArrowLeft"},{"lowerCase":"▼","upperCase":"▼","code":"ArrowDown"},{"lowerCase":"►","upperCase":"►","code":"ArrowRight"}]]'
        );
    },
    function (e, a, r) {},
    function (e, a, r) {
        "use strict";
        r.r(a);
        r(2);
        var t = r(0),
            s = r(1);
        function o(e, a) {
            for (var r = 0; r < a.length; r++) {
                var t = a[r];
                (t.enumerable = t.enumerable || !1), (t.configurable = !0), "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
            }
        }
        var n = (function () {
            function e(a) {
                var r = a.lowerCase,
                    t = a.upperCase,
                    s = a.size,
                    o = void 0 === s ? 1 : s,
                    n = a.code,
                    l = a.value;
                !(function (e, a) {
                    if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.lowerCase = r),
                    (this.upperCase = t),
                    (this.size = o),
                    (this.code = n),
                    (this.value = l),
                    this.renderHtml();
            }
            var a, r, t;
            return (
                (a = e),
                (r = [
                    {
                        key: "renderHtml",
                        value: function () {
                            (this.element = document.createElement("div")), this.element.classList.add("key"), this.element.classList.add("key_size_".concat(this.size)), (this.element.innerText = this.label(!1));
                        },
                    },
                    {
                        key: "char",
                        value: function (e) {
                            return this.value ? this.value : this.label(e);
                        },
                    },
                    {
                        key: "label",
                        value: function (e) {
                            return e ? this.upperCase : this.lowerCase;
                        },
                    },
                    {
                        key: "makeActive",
                        value: function () {
                            this.element.classList.add("key_active");
                        },
                    },
                    {
                        key: "makeInactive",
                        value: function () {
                            this.element.classList.remove("key_active");
                        },
                    },
                    {
                        key: "setCapsLock",
                        value: function (e) {
                            this.element.innerText = this.label(e);
                        },
                    },
                ]) && o(a.prototype, r),
                t && o(a, t),
                e
            );
        })();
        function l(e, a) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, a) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        t = !0,
                        s = !1,
                        o = void 0;
                    try {
                        for (var n, l = e[Symbol.iterator](); !(t = (n = l.next()).done) && (r.push(n.value), !a || r.length !== a); t = !0);
                    } catch (e) {
                        (s = !0), (o = e);
                    } finally {
                        try {
                            t || null == l.return || l.return();
                        } finally {
                            if (s) throw o;
                        }
                    }
                    return r;
                })(e, a) ||
                p(e, a) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function i(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return c(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                p(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function p(e, a) {
            if (e) {
                if ("string" == typeof e) return c(e, a);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(e, a) : void 0;
            }
        }
        function c(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var r = 0, t = new Array(a); r < a; r++) t[r] = e[r];
            return t;
        }
        function u(e, a) {
            for (var r = 0; r < a.length; r++) {
                var t = a[r];
                (t.enumerable = t.enumerable || !1), (t.configurable = !0), "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
            }
        }
        var C = (function () {
                function e(a, r) {
                    !(function (e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.languageIds = i(a.keys()));
                    var t = l(this.languageIds, 1);
                    (this.activeLanguage = t[0]),
                        (this.alt = !1),
                        (this.shift = !1),
                        (this.caps = !1),
                        (this.ctrl = !1),
                        (this.languages = a),
                        (this.parentElement = r),
                        localStorage.getItem("language") ? (this.activeLanguage = localStorage.getItem("language")) : localStorage.setItem("language", this.activeLanguage),
                        this.setUpListeners();
                }
                var a, r, t;
                return (
                    (a = e),
                    (r = [
                        {
                            key: "setUpListeners",
                            value: function () {
                                this.setUpMouseListeners(), this.setUpKeyboardListeners();
                            },
                        },
                        {
                            key: "setUpMouseListeners",
                            value: function () {
                                var e = this;
                                document.addEventListener("mousedown", function (a) {
                                    var r = e.keys.find(function (e) {
                                        return e.element === a.target;
                                    });
                                    r && (r.makeActive(), e.pressKey(r));
                                }),
                                    document.addEventListener("mouseup", function (a) {
                                        var r = e.keys.find(function (e) {
                                            return e.element === a.target;
                                        });
                                        r && (r.makeInactive(), "Shift" === r.lowerCase && (e.shift = !1));
                                    });
                            },
                        },
                        {
                            key: "setUpKeyboardListeners",
                            value: function () {
                                var e = this;
                                document.addEventListener("keydown", function (a) {
                                    var r = e.keys.find(function (e) {
                                        return e.code === a.code;
                                    });
                                    r && (r.makeActive(), ((e.ctrl || e.alt) && "Ctrl" !== r.lowerCase && "Alt" !== r.lowerCase) || e.pressKey(r));
                                }),
                                    document.addEventListener("keyup", function (a) {
                                        var r = e.keys.find(function (e) {
                                            return e.code === a.code;
                                        });
                                        r && (r.makeInactive(), "Shift" === r.lowerCase && ((e.shift = !1), e.toggleCapsLock()), "Ctrl" === r.lowerCase && (e.ctrl = !1), "Alt" === r.lowerCase && (e.alt = !1));
                                    });
                            },
                        },
                        {
                            key: "toggleCapsLock",
                            value: function () {
                                var e = this;
                                (this.caps = !this.caps),
                                    this.keys.forEach(function (a) {
                                        return a.setCapsLock(e.caps);
                                    });
                            },
                        },
                        {
                            key: "changeLanguage",
                            value: function () {
                                (this.activeLanguage = this.languageIds[this.nextLanguageIndex]), localStorage.setItem("language", this.activeLanguage), this.renderKeyboard();
                            },
                        },
                        {
                            key: "pressKey",
                            value: function (e) {
                                switch (e.code) {
                                    case "Backspace":
                                        this.textArea.value = this.textArea.value.slice(0, -1);
                                        break;
                                    case "ShiftLeft":
                                    case "ShiftRight":
                                        if (this.shift) break;
                                        (this.shift = !0), this.toggleCapsLock();
                                        break;
                                    case "CapsLock":
                                        this.toggleCapsLock();
                                        break;
                                    case "AltLeft":
                                    case "AltRight":
                                        this.ctrl ? this.changeLanguage() : (this.alt = !0);
                                        break;
                                    case "ControlLeft":
                                    case "ControlRight":
                                        this.alt ? this.changeLanguage() : (this.ctrl = !0);
                                        break;
                                    case "MetaLeft":
                                    case "MetaRight":
                                        break;
                                    default:
                                        this.textArea.value += e.char(this.caps);
                                }
                            },
                        },
                        {
                            key: "renderHtml",
                            value: function () {
                                this.renderTextArea(), this.renderKeyboard();
                            },
                        },
                        {
                            key: "renderTextArea",
                            value: function () {
                                (this.textArea = document.createElement("textarea")),
                                    (this.textArea.placeholder = "Press Ctrl + Alt to change the input language."),
                                    (this.textArea.className = "textBox"),
                                    (this.textArea.disabled = "disabled"),
                                    this.parentElement.append(this.textArea);
                            },
                        },
                        {
                            key: "renderKeyboard",
                            value: function () {
                                var e = this;
                                (this.keyboardElement = document.createElement("div")),
                                    (this.keyboardElement.className = "keyboard"),
                                    (this.keyboardElement.id = "keyboard"),
                                    (this.keys = []),
                                    this.languages.get(this.activeLanguage).forEach(function (a, r) {
                                        a.forEach(function (a) {
                                            var t = new n(a);
                                            t.element.classList.add("key_row_".concat(r + 1)), e.keyboardElement.append(t.element), e.keys.push(t);
                                        });
                                    });
                                var a = document.getElementById("keyboard");
                                a && this.parentElement.removeChild(a), this.parentElement.append(this.keyboardElement);
                            },
                        },
                        {
                            key: "nextLanguageIndex",
                            get: function () {
                                var e = this.languageIds.indexOf(this.activeLanguage) + 1;
                                return e >= this.languageIds.length && (e = 0), e;
                            },
                        },
                    ]) && u(a.prototype, r),
                    t && u(a, t),
                    e
                );
            })(),
            d = new Map();
        d.set("en", s), d.set("ukr", t);
        var w = new C(d, document.body);
        w.renderHtml(), (document.keyb = w);
    },
]);
