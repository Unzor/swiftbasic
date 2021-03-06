parcelRequire = function(e, t, n, r) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        s = "function" == typeof require && require;

    function u(n, r) {
        if (!t[n]) {
            if (!e[n]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!r && i) return i(n, !0);
                if (o) return o(n, !0);
                if (s && "string" == typeof n) return s(n);
                var a = new Error("Cannot find module '" + n + "'");
                throw a.code = "MODULE_NOT_FOUND", a
            }
            l.resolve = function(t) {
                return e[n][1][t] || t
            }, l.cache = {};
            var c = t[n] = new u.Module(n);
            e[n][0].call(c.exports, l, c, c.exports, this)
        }
        return t[n].exports;

        function l(e) {
            return u(l.resolve(e))
        }
    }
    u.isParcelRequire = !0, u.Module = function(e) {
        this.id = e, this.bundle = u, this.exports = {}
    }, u.modules = e, u.cache = t, u.parent = o, u.register = function(t, n) {
        e[t] = [function(e, t) {
            t.exports = n
        }, {}]
    };
    for (var a = 0; a < n.length; a++) try {
        u(n[a])
    } catch (e) {
        i || (i = e)
    }
    if (n.length) {
        var c = u(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function() {
            return c
        }) : this["pg-basic"] = c
    }
    if (parcelRequire = u, i) throw i;
    return u
}({
    "node_modules/context-eval/lib/context-browser.js": [function(e, t, n) {
        function r(e, t) {
            this.iframe = document.createElement("iframe"), this.iframe.style.display = "none", (t = t || document.body).appendChild(this.iframe), this.iframe.contentWindow, e && this.extend(e)
        }
        arguments[3], r.prototype.evaluate = function(e) {
            return this.iframe.contentWindow.eval(e)
        }, r.prototype.destroy = function() {
            this.iframe && (this.iframe.parentNode.removeChild(this.iframe), this.iframe = null)
        }, r.prototype.getGlobal = function() {
            return this.iframe.contentWindow
        }, r.prototype.extend = function(e) {
            var t = this.getGlobal();
            Object.keys(e).forEach(function(n) {
                t[n] = e[n]
            })
        }, t.exports = r
    }, {}],
    "functions.js": [function(e, t, n) {
        var r = {
                ABS: function(e) {
                    return Math.abs(e)
                },
                COS: function(e) {
                    return Math.cos(e)
                },
                SIN: function(e) {
                    return Math.sin(e)
                },
                TAN: function(e) {
                    return Math.tan(e)
                },
                EXP: function(e) {
                    return Math.exp(e)
                },
                INT: function(e) {
                    return Math.floor(e)
                },
                FLOOR: function(e) {
                    return Math.floor(e)
                },
                ROUND: function(e) {
                    return Math.round(e)
                },
                ATN: function(e) {
                    return Math.atan(e)
                },
                LOG: function(e) {
                    return Math.log(e)
                },
                SGN: function(e) {
                    return 0 === e ? 0 : e < 0 ? -1 : 1
                },
                SQR: function(e) {
                    return Math.sqrt(e)
                },
                VAL: function(e) {
                    var t = parseFloat(e);
                    return isNaN(t) ? 0 : t
                },
                RND: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return 0 === e ? Math.random() : Math.ceil(Math.random() * e)
                },
                ASC: function(e) {
                    return e.charCodeAt(0)
                },
                LEFT: function(e, t) {
                    return e.slice(0, t)
                },
                MID: function(e, t, n) {
                    return e.substr(t, n)
                },
                RIGHT: function(e, t) {
                    return e.slice(-1 * t)
                },
                CHR: function(e) {
                    return String.fromCharCode(e)
                },
                STR: function(e) {
                    return String.fromCharCode(e)
                },
                LEN: function(e) {
                    return e.length
                },
                SPC: function(e) {
                    return " ".repeat(e)
                },
                COLOR: function() {
                    throw new Error("Unimplemented")
                },
                GETCHAR: function() {
                    throw new Error("Unimplemented")
                },
                UPPERCASE: function(e) {
                    return e.toUpperCase()
                },
                LOWERCASE: function(e) {
                    return e.toLowerCase()
                }
            },
            i = {
                LEFT$: "LEFT",
                ATAN: "ATN",
                CHR$: "CHR",
                MID$: "MID",
                RIGHT$: "RIGHT",
                RAND: "RND",
                TAB: "SPC"
            };
        for (var o in i) r[o] = r[i[o]];
        t.exports = r
    }, {}],
    "tokenizer.js": [function(e, t, n) {
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function o(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }
        var s = e("./functions"),
            u = function() {
                function e(t, n) {
                    r(this, e), this.type = t, this.lexeme = n
                }
                return o(e, [{
                    key: "toJSON",
                    value: function() {
                        return {
                            type: this.type,
                            lexeme: this.lexeme
                        }
                    }
                }]), e
            }(),
            a = new u("eof", ""),
            c = /^\s*(\d+)\s*/,
            l = /^"((\\.|[^"\\])*)"\s*/,
            h = new RegExp("^(" + ["IF", "THEN", "ELSE", "FOR", "ON", "TO", "STEP", "GOTO", "GOSUB", "RETURN", "NEXT", "INPUT", "LET", "CLC", "CLT", "CLS", "END", "PRINT", "PLOT", "DRAW", "UNDRAW", "ARRAY", "DIM", "DATA", "READ", "REM", "PAUSE", "STOP"].join("|") + ")\\s*", "i"),
            f = new RegExp("^(" + Object.keys(s).join("|") + ")\\s*", "i"),
            p = new RegExp("^(" + ["LEVEL", "PI"].join("|") + ")\\s*", "i"),
            v = /^([a-z][0-9]*)\$?\s*/i,
            y = /^(\d+(\.\d+)?)\s*/i,
            d = /^(<>|>=|<=|[,\+\-\*\/%=<>\(\)\]\[])\s*/i,
            m = /^(AND|OR)\s*/i,
            x = /^(;)\s*/i,
            b = function() {
                function e(t) {
                    r(this, e), this.stmnt = t, this.tokens = [], this.index = 0, this.tokenized = !1
                }
                return o(e, null, [{
                    key: "tokenizeLine",
                    value: function(t) {
                        var n = new e(t);
                        return n.tokenize(), n.tokens
                    }
                }, {
                    key: "expressionTypes",
                    get: function() {
                        return ["string", "function", "operation", "number", "variable", "logic", "constant"]
                    }
                }, {
                    key: "eof",
                    get: function() {
                        return a
                    }
                }]), o(e, [{
                    key: "assertTokenized",
                    value: function() {
                        if (!this.tokenized) throw new Error("call tokenize first")
                    }
                }, {
                    key: "peek",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return this.assertTokenized(), this.index >= this.tokens.length ? a : this.tokens[this.index + e]
                    }
                }, {
                    key: "next",
                    value: function() {
                        return this.assertTokenized(), this.index >= this.tokens.length ? a : this.tokens[this.index++]
                    }
                }, {
                    key: "nextExpr",
                    value: function() {
                        this.assertTokenized();
                        for (var t = []; this.index !== this.tokens.length && e.expressionTypes.includes(this.peek().type);) t.push(this.next());
                        return t
                    }
                }, {
                    key: "tokenize",
                    value: function() {
                        var e = this.stmnt.match(c);
                        if (!e) throw new Error("Expected line number");
                        for (this.tokens.push(new u("lineno", parseInt(e[1]))), this.stmnt = this.stmnt.slice(e[0].length); this.stmnt.length;) {
                            var t = this.eatKeyword() || this.eatQuote() || this.eatLogic() || this.eatFunction() || this.eatConstant() || this.eatVariable() || this.eatNumber() || this.eatOperation() || this.eatLineMod();
                            if (!t) throw new Error("Invalid syntax near: `" + this.stmnt + "'");
                            this.stmnt = this.stmnt.slice(t.length)
                        }
                        this.tokenized = !0
                    }
                }, {
                    key: "eatLogic",
                    value: function() {
                        var e = this.stmnt.match(m);
                        if (e && e[0]) {
                            var t = e[1].toUpperCase();
                            return this.tokens.push(new u("logic", t)), e[0]
                        }
                        return null
                    }
                }, {
                    key: "eatKeyword",
                    value: function() {
                        var e = this.stmnt.match(h);
                        if (e && e[0]) {
                            var t = e[1].toUpperCase();
                            return this.tokens.push(new u("keyword", t)), "REM" === t ? (this.tokens.push(new u("comment", this.stmnt.slice(e[0].length))), this.stmnt) : e[0]
                        }
                        return null
                    }
                }, {
                    key: "eatFunction",
                    value: function() {
                        var e = this.stmnt.match(f);
                        if (e && e[0]) {
                            var t = e[1].toUpperCase();
                            return this.tokens.push(new u("function", t)), e[0]
                        }
                        return null
                    }
                }, {
                    key: "eatConstant",
                    value: function() {
                        var e = this.stmnt.match(p);
                        if (e && e[0]) {
                            var t = e[1].toUpperCase();
                            return this.tokens.push(new u("constant", t)), e[0]
                        }
                        return null
                    }
                }, {
                    key: "eatVariable",
                    value: function() {
                        var e = this.stmnt.match(v);
                        if (e && e[0]) {
                            var t = e[1].toUpperCase();
                            return this.tokens.push(new u("variable", t)), e[0]
                        }
                        return null
                    }
                }, {
                    key: "eatNumber",
                    value: function() {
                        var e = this.stmnt.match(y);
                        if (e && e[0]) {
                            var t = parseFloat(e[1], 10);
                            if (isNaN(t)) throw new Error("Error parsing number:" + e[1]);
                            return this.tokens.push(new u("number", t)), e[0]
                        }
                        return null
                    }
                }, {
                    key: "eatOperation",
                    value: function() {
                        var e = this.stmnt.match(d);
                        return e && e[0] ? (this.tokens.push(new u("operation", e[1])), e[0]) : null
                    }
                }, {
                    key: "eatQuote",
                    value: function() {
                        var e = this.stmnt.match(l);
                        return e && e[0] ? (this.tokens.push(new u("string", '"'.concat(e[1], '"'))), e[0]) : null
                    }
                }, {
                    key: "eatLineMod",
                    value: function() {
                        var e = this.stmnt.match(x);
                        return e && e[0] ? (this.tokens.push(new u("linemod", '"'.concat(e[1], '"'))), e[0]) : null
                    }
                }]), e
            }();
        t.exports = b
    }, {
        "./functions": "functions.js"
    }],
    "nodes.js": [function(e, t, n) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function i(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function o(e) {
            return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && function(e, t) {
                (Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }(e, t)
        }

        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function c(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }
        var l = function() {
                function e(t, n) {
                    u(this, e), this.lineno = t, this.type = n
                }
                return c(e, [{
                    key: "toJSON",
                    value: function() {
                        var e = this,
                            t = {};
                        return Object.keys(this).forEach(function(n) {
                            t[n] = e[n]
                        }), t
                    }
                }, {
                    key: "assert",
                    value: function(e, t) {
                        if (!e) throw new Error("Line ".concat(this.lineno, ": ").concat(t))
                    }
                }]), e
            }(),
            h = function(e) {
                function t(e, n, r) {
                    var s;
                    return u(this, t), (s = i(this, o(t).call(this, e, "variable"))).name = n, null == r ? s.array = !1 : (s.array = !0, s.subscript = r), s
                }
                return s(t, l), t
            }(),
            f = function(e) {
                function t(e, n) {
                    var r;
                    return u(this, t), (r = i(this, o(t).call(this, e, "REM"))).comment = n, r
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function() {}
                }]), t
            }(),
            p = function(e) {
                function t(e, n, r) {
                    var s;
                    return u(this, t), (s = i(this, o(t).call(this, e, "PRINT"))).expr = n, s.newline = !r, s
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        var t = e.evaluate(this.expr);
                        e.print(t), this.newline && e.print("\n")
                    }
                }]), t
            }(),
            v = function(e) {
                function t(e, n) {
                    var r;
                    return u(this, t), (r = i(this, o(t).call(this, e, "GOTO"))).expr = n, r
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        var t = e.evaluate(this.expr);
                        this.assert("number" == typeof t, "Expected GOTO `expr` to evaluate to a number"), e.goto(t)
                    }
                }]), t
            }(),
            y = function(e) {
                function t(e, n, r) {
                    var s;
                    return u(this, t), (s = i(this, o(t).call(this, e, "LET"))).variable = n, s.expr = r, s
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        var t = e.evaluate(this.expr);
                        if (this.variable.array) {
                            var n = e.evaluate(this.variable.subscript);
                            e.setArray(this.variable.name, n, t)
                        } else e.set(this.variable.name, t)
                    }
                }]), t
            }(),
            d = function(e) {
                function t(e, n) {
                    var r;
                    return u(this, t), (r = i(this, o(t).call(this, e, "PAUSE"))).expr = n, r
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        var t = e.evaluate(this.expr);
                        if ("number" != typeof t) throw new Error("Expected pause value to be a number");
                        e.pause(t)
                    }
                }]), t
            }(),
            m = function(e) {
                function t(e, n, r) {
                    var s;
                    return u(this, t), (s = i(this, o(t).call(this, e, "INPUT"))).expr = n, s.variable = r, s
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        var t = this,
                            n = e.evaluate(this.expr);
                        e.print(n), e.halt(), e.input(function(n) {
                            if (t.variable.array) {
                                var r = e.evaluate(t.variable.subscript);
                                e.setArray(t.variable.name, r, n)
                            } else e.set(t.variable.name, n);
                            e.execute()
                        })
                    }
                }]), t
            }(),
            x = function(e) {
                function t(e, n, r, s, a) {
                    var c;
                    return u(this, t), (c = i(this, o(t).call(this, e, "FOR"))).lineno = e, c.variable = n, c.left = r, c.right = s, c.step = a, c
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        var t = e.evaluate(this.left),
                            n = e.evaluate(this.right),
                            r = this.step ? e.evaluate(this.step) : 1;
                        if (this.variable.array) throw new Error("Cannot use variables in for");
                        e.loopStart({
                            variable: this.variable.name,
                            value: t,
                            max: n,
                            increment: r
                        })
                    }
                }]), t
            }(),
            b = function(e) {
                function t(e, n) {
                    var r;
                    return u(this, t), (r = i(this, o(t).call(this, e, "NEXT"))).variable = n, r
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        e.loopJump(this.variable.name)
                    }
                }]), t
            }(),
            k = function(e) {
                function t(e, n, r) {
                    var s, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "black";
                    return u(this, t), (s = i(this, o(t).call(this, e, "PLOT"))).x = n, s.y = r, s.color = a, s
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        e.plot(e.evaluate(this.x), e.evaluate(this.y), e.evaluate(this.color))
                    }
                }]), t
            }(),
            w = function(e) {
                function t() {
                    return u(this, t), i(this, o(t).apply(this, arguments))
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        e.end()
                    }
                }]), t
            }(),
            g = function(e) {
                function t(e, n, r, s) {
                    var a;
                    return u(this, t), (a = i(this, o(t).call(this, e, "IF"))).condition = n, a.then = r, a.elze = s, a
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        e.evaluate(this.condition) ? this.then.run(e) : this.other && this.elze.run(e)
                    }
                }]), t
            }(),
            E = function(e) {
                function t(e, n) {
                    var r;
                    return u(this, t), (r = i(this, o(t).call(this, e, "GOSUB"))).expr = n, r
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        var t = e.evaluate(this.expr);
                        if ("number" != typeof t) throw new Error("Expected GOSUB argument to be a number");
                        e.gosub(t)
                    }
                }]), t
            }(),
            T = function(e) {
                function t() {
                    return u(this, t), i(this, o(t).apply(this, arguments))
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        e.return()
                    }
                }]), t
            }(),
            O = function(e) {
                function t(e, n) {
                    var r;
                    return u(this, t), (r = i(this, o(t).call(this, e, "ARRAY"))).variable = n, r
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        e.array(this.variable.name)
                    }
                }]), t
            }(),
            L = function(e) {
                function t() {
                    return u(this, t), i(this, o(t).apply(this, arguments))
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        e.clearAll()
                    }
                }]), t
            }(),
            R = function(e) {
                function t() {
                    return u(this, t), i(this, o(t).apply(this, arguments))
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        e.clearConsole()
                    }
                }]), t
            }(),
            C = function(e) {
                function t() {
                    return u(this, t), i(this, o(t).apply(this, arguments))
                }
                return s(t, l), c(t, [{
                    key: "run",
                    value: function(e) {
                        e.clearGraphics()
                    }
                }]), t
            }();
        t.exports = {
            Node: l,
            PRINT: p,
            GOTO: v,
            LET: y,
            REM: f,
            PAUSE: d,
            INPUT: m,
            FOR: x,
            NEXT: b,
            PLOT: k,
            END: w,
            IF: g,
            GOSUB: E,
            RETURN: T,
            ARRAY: O,
            CLS: L,
            CLT: R,
            CLC: C,
            Variable: h
        }
    }, {}],
    "expr.js": [function(e, t, n) {
        t.exports = function(e) {
            for (var t = ""; e.length;) {
                var n = e.shift();
                if ("variable" !== n.type)
                    if ("function" !== n.type)
                        if ("constant" !== n.type)
                            if ("logic" !== n.type) {
                                if ("operation" === n.type) {
                                    if ("<>" === n.lexeme) {
                                        t += "!=";
                                        continue
                                    }
                                    if ("=" === n.lexeme) {
                                        t += "==";
                                        continue
                                    }
                                }
                                t += n.lexeme
                            } else "AND" === n.lexeme ? t += "&&" : "OR" === n.lexeme && (t += "||");
                else t += '__pgb.getConst("' + n.lexeme + '")';
                else t += '__pgb.fun("' + n.lexeme + '")';
                else t += '__pgb.get("' + n.lexeme + '")'
            }
            return t
        }
    }, {}],
    "errors.js": [function(e, t, n) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && a(e, t)
        }

        function u(e) {
            var t = "function" == typeof Map ? new Map : void 0;
            return (u = function(e) {
                if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                var n;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, r)
                }

                function r() {
                    return function(e, t, n) {
                        return (function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }() ? Reflect.construct : function(e, t, n) {
                            var r = [null];
                            r.push.apply(r, t);
                            var i = new(Function.bind.apply(e, r));
                            return n && a(i, n.prototype), i
                        }).apply(null, arguments)
                    }(e, arguments, c(this).constructor)
                }
                return r.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), a(r, e)
            })(e)
        }

        function a(e, t) {
            return (a = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function c(e) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var l = function(e) {
                function t(e, n) {
                    var r;
                    return i(this, t), (r = o(this, c(t).call(this))).message = "Parse error on line ".concat(e, ": ").concat(n), r.name = "ParseError", r
                }
                return s(t, u(Error)), t
            }(),
            h = function(e) {
                function t(e, n) {
                    var r;
                    return i(this, t), (r = o(this, c(t).call(this))).message = "Error on line ".concat(e, ": ").concat(n), r.name = "RuntimeError", r
                }
                return s(t, u(Error)), t
            }();
        t.exports = {
            ParseError: l,
            RuntimeError: h
        }
    }, {}],
    "parser.js": [function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }
        var o = e("./tokenizer"),
            s = e("./nodes"),
            u = s.PRINT,
            a = s.LET,
            c = s.REM,
            l = s.PAUSE,
            h = s.INPUT,
            f = s.FOR,
            p = s.NEXT,
            v = s.GOTO,
            y = s.END,
            d = s.IF,
            m = s.GOSUB,
            x = s.RETURN,
            b = s.ARRAY,
            k = s.PLOT,
            w = s.CLS,
            g = s.CLC,
            E = s.CLT,
            T = s.Variable,
            O = e("./expr"),
            L = e("./errors").ParseError,
            R = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.tokenizer = t, this.lineno = this.getLineNo(this.tokenizer.next())
                }
                return i(e, null, [{
                    key: "parseLine",
                    value: function(t) {
                        var n = new o(t);
                        return n.tokenize(), new e(n).parse()
                    }
                }]), i(e, [{
                    key: "parse",
                    value: function() {
                        var e = this.tokenizer.next();
                        switch (this.assertType(e, "keyword"), e.lexeme) {
                            case "PRINT":
                                return new u(this.lineno, this.expectExpr(), this.acceptLineMod());
                            case "LET":
                                var t = this.expectVariable();
                                return this.expectOperation("="), new a(this.lineno, t, this.expectExpr());
                            case "REM":
                                return new c(this.lineno, this.expectComment());
                            case "PAUSE":
                                return new l(this.lineno, this.expectExpr());
                            case "INPUT":
                                var n = this.expectExpr();
                                return this.expectLineMod(), new h(this.lineno, n, this.expectVariable());
                            case "FOR":
                                var r = this.expectVariable();
                                this.expectOperation("=");
                                var i = this.expectExpr();
                                this.expectKeyword("TO");
                                var o = this.expectExpr(),
                                    s = this.acceptKeyword("STEP") ? this.expectExpr() : null;
                                return new f(this.lineno, r, i, o, s);
                            case "NEXT":
                                return new p(this.lineno, this.expectVariable());
                            case "GOTO":
                                return new v(this.lineno, this.expectExpr());
                            case "END":
                                return new y(this.lineno);
                            case "IF":
                                var T, O = this.expectExpr();
                                this.expectKeyword("THEN"), T = "number" === this.tokenizer.peek().type ? new v(this.lineno, this.expectExpr()) : this.parse();
                                var R = null;
                                return this.acceptKeyword("else") && (R = "number" === this.tokenizer.peek().type ? new v(this.lineno, this.expectExpr()) : this.parse()), new d(this.lineno, O, T, R);
                            case "GOSUB":
                                return new m(this.lineno, this.expectExpr());
                            case "RETURN":
                                return new x(this.lineno);
                            case "ARRAY":
                                return new b(this.lineno, this.expectVariable());
                            case "PLOT":
                                var C = this.expectExpr(!0);
                                this.expectOperation(",");
                                var N = this.expectExpr(!0);
                                this.expectOperation(",");
                                var S = this.expectExpr(!0);
                                return new k(this.lineno, C, N, S);
                            case "CLS":
                                return new w(this.lineno);
                            case "CLC":
                                return new g(this.lineno);
                            case "CLT":
                                return new E(this.lineno)
                        }
                        throw new L(this.lineno, "Unexpected token ".concat(e.lexeme))
                    }
                }, {
                    key: "acceptKeyword",
                    value: function(e) {
                        return "keyword" === this.tokenizer.peek().type ? this.tokenizer.next() : null
                    }
                }, {
                    key: "expectKeyword",
                    value: function(e) {
                        var t = this.acceptKeyword(e);
                        if (null == t) throw new L(this.lineno, "Expected ".concat(e, " but got ").concat(this.tokenizer.peek().lexeme));
                        return t.lexeme
                    }
                }, {
                    key: "expectComment",
                    value: function() {
                        var e = this.tokenizer.next();
                        return "comment" === e.type ? (this.assertType(this.tokenizer.next(), "eof"), e.lexeme) : (this.assertType(e, "eof"), "")
                    }
                }, {
                    key: "expectOperation",
                    value: function(e) {
                        var t = this.tokenizer.next();
                        if (this.assertType(t, "operation"), t.lexeme !== e) throw new L(this.lineno, "Expected operation " + e);
                        return t.lexeme
                    }
                }, {
                    key: "expectVariable",
                    value: function() {
                        var e = this.tokenizer.next();
                        return this.assertType(e, "variable"), new T(this.lineno, e.lexeme, this.acceptSubscript())
                    }
                }, {
                    key: "expectExpr",
                    value: function() {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = [], n = 0; this.tokenizer.peek() != o.eof && (!e || "," !== this.tokenizer.peek().lexeme) && o.expressionTypes.includes(this.tokenizer.peek().type);) {
                            var r = this.tokenizer.peek();
                            if (0 === n && ("]" === r.lexeme || ")" === r.lexeme)) break;
                            this.tokenizer.next(), "[" !== r.lexeme && "(" !== r.lexeme || n++, "]" !== r.lexeme && "]" !== r.lexeme || n--, t.push(r)
                        }
                        if (0 === t.length) throw new L(this.lineno, "Expected expression");
                        return O(t)
                    }
                }, {
                    key: "expectLineMod",
                    value: function() {
                        if (!this.acceptLineMod()) throw new L(this.lineno, "Expected ;");
                        return !0
                    }
                }, {
                    key: "acceptLineMod",
                    value: function() {
                        return "linemod" === this.tokenizer.peek().type && (this.tokenizer.next(), !0)
                    }
                }, {
                    key: "acceptSubscript",
                    value: function() {
                        if ("[" !== this.tokenizer.peek().lexeme) return null;
                        this.assertType(this.tokenizer.next(), "operation", "[");
                        var e = this.expectExpr();
                        return this.assertType(this.tokenizer.next(), "operation", "]"), e
                    }
                }, {
                    key: "assertType",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        if (e.type !== t) throw new L(this.lineno, "Expected a ".concat(t, " but got a ").concat(e.type, " instead ????"));
                        if (null != n && e.lexeme !== n) throw new L(this.lineno, "Expected a ".concat(n, " but got a ").concat(e.lexeme))
                    }
                }, {
                    key: "getLineNo",
                    value: function(e) {
                        if (this.assertType(e, "lineno"), "number" != typeof e.lexeme) throw new L(this.lineno, "Lines should start with line numbers");
                        return e.lexeme
                    }
                }]), e
            }();
        t.exports = R
    }, {
        "./tokenizer": "tokenizer.js",
        "./nodes": "nodes.js",
        "./expr": "expr.js",
        "./errors": "errors.js"
    }],
    "basic.js": [function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var i = e("context-eval"),
            o = e("./parser"),
            s = e("./functions"),
            u = e("./errors"),
            a = u.ParseError,
            c = (u.RuntimeError, function() {
                function e(t) {
                    var n = t.console,
                        r = t.debugLevel,
                        o = t.display,
                        s = t.constants,
                        u = void 0 === s ? {
                            PI: Math.PI,
                            LEVEL: 1
                        } : s;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.debugLevel = r, this.console = n, this.context = new i({
                        __pgb: this
                    }), this.variables = {}, this.lineno = -1, this.program = [], this.loops = {}, this.stack = [], this.jumped = !1, this.display = o, this.constants = u
                }
                var t, n;
                return t = e, (n = [{
                    key: "debug",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        this.debugLevel >= t && console.log("Debug ".concat(this.lineno, ":"), e)
                    }
                }, {
                    key: "run",
                    value: function(e) {
                        var t = this;
                        return new Promise(function(n, r) {
                            t.onEnd = {
                                resolve: n,
                                reject: r
                            }, t.ended = !1;
                            var i = {};
                            if (t.program = e.split("\n").filter(function(e) {
                                    return "" !== e.trim()
                                }).map(function(e) {
                                    try {
                                        return o.parseLine(e)
                                    } catch (e) {
                                        t.end(e)
                                    }
                                }).sort(function(e, t) {
                                    return e.lineno - t.lineno
                                }), t.program.forEach(function(e) {
                                    var n = e.lineno;
                                    i[n] && t.end(new a(n, "Line with number ".concat(n, " repeated"))), i[n] = !0
                                }), !t.program.length) return t.end();
                            t.lineno = t.program[0].lineno, t.execute()
                        })
                    }
                }, {
                    key: "execute",
                    value: function() {
                        for (var e = this;;) {
                            if (this.step(), this.ended) return;
                            if (this.jumped) this.jumped = !1;
                            else {
                                var t = this.getNextLine();
                                if (!t) return void this.end();
                                this.lineno = t.lineno
                            }
                            if (this.delay) {
                                var n = this.delay;
                                return this.delay = null, setTimeout(function() {
                                    e.execute()
                                }, n)
                            }
                            if (this.halted) return
                        }
                    }
                }, {
                    key: "getCurLine",
                    value: function() {
                        var e = this;
                        return this.program.find(function(t) {
                            return t.lineno === e.lineno
                        })
                    }
                }, {
                    key: "getNextLine",
                    value: function() {
                        return this.program[this.program.indexOf(this.getCurLine()) + 1]
                    }
                }, {
                    key: "step",
                    value: function() {
                        var e = this.getCurLine();
                        e || this.end(new Error("Cannot find line with number ".concat(this.lineno))), this.debug("step", 1), this.debug(e.toJSON(), 2), e.run(this)
                    }
                }, {
                    key: "end",
                    value: function(e) {
                        if (this.ended = !0, e) throw this.debug("program ended with error: ".concat(e.message)), this.onEnd.reject(e), e;
                        this.debug("program ended"), this.onEnd.resolve()
                    }
                }, {
                    key: "evaluate",
                    value: function(e) {
                        try {
                            return this.context.evaluate(e)
                        } catch (t) {
                            throw console.error("Error evaluating code:", e), t
                        }
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        this.variables[e] = t
                    }
                }, {
                    key: "setArray",
                    value: function(e, t, n) {
                        this.variables[e][t] = n
                    }
                }, {
                    key: "array",
                    value: function(e) {
                        this.variables[e] = {}
                    }
                }, {
                    key: "fun",
                    value: function(e) {
                        switch (s[e] || this.end(new Error("Function ".concat(e, " does not exist"))), e.toLowerCase()) {
                            case "color":
                                return this.color.bind(this);
                            case "getchar":
                                return this.getChar.bind(this)
                        }
                        return s[e]
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        return this.variables[e] || 0
                    }
                }, {
                    key: "getConst",
                    value: function(e) {
                        if (this.constants.hasOwnProperty(e)) return this.constants[e];
                        this.end(new Error("Constant ".concat(e, " undefined")))
                    }
                }, {
                    key: "pause",
                    value: function(e) {
                        this.debug("pause ".concat(e)), this.delay = e
                    }
                }, {
                    key: "goto",
                    value: function(e) {
                        this.debug("goto ".concat(e)), this.lineno = e, this.jumped = !0
                    }
                }, {
                    key: "loopStart",
                    value: function(e) {
                        var t = e.variable,
                            n = e.value,
                            r = e.increment,
                            i = e.max;
                        this.debug("marking loop ".concat(t)), this.set(t, n);
                        var o = this.getNextLine();
                        if (!o) return this.end();
                        this.loops[t] = {
                            variable: t,
                            value: n,
                            increment: r,
                            max: i,
                            lineno: o.lineno
                        }
                    }
                }, {
                    key: "loopJump",
                    value: function(e) {
                        this.debug("jumping to loop ".concat(e));
                        var t = this.loops[e];
                        t.value += t.increment, this.set(t.variable, t.value), t.value >= t.max || this.goto(t.lineno)
                    }
                }, {
                    key: "gosub",
                    value: function(e) {
                        var t = this.getNextLine();
                        t ? this.stack.push(t.lineno) : this.stack.push(this.lineno + 1), this.goto(e)
                    }
                }, {
                    key: "return",
                    value: function() {
                        0 === this.stack.length && this.end(new Error("No function calls to return from"));
                        var e = this.stack.pop();
                        this.goto(e)
                    }
                }, {
                    key: "assertDisplay",
                    value: function() {
                        this.display || this.end(new Error("No display found"))
                    }
                }, {
                    key: "plot",
                    value: function(e, t, n) {
                        this.assertDisplay(), this.display.plot(e, t, n)
                    }
                }, {
                    key: "color",
                    value: function(e, t) {
                        return this.assertDisplay(), this.display.color(e, t)
                    }
                }, {
                    key: "clearAll",
                    value: function() {
                        this.clearConsole(), this.clearGraphics()
                    }
                }, {
                    key: "print",
                    value: function(e) {
                        this.console.log(e.toString())
                    }
                }, {
                    key: "clearConsole",
                    value: function() {
                        this.console.clear()
                    }
                }, {
                    key: "clearGraphics",
                    value: function() {
                        this.assertDisplay(), this.display.clear()
                    }
                }, {
                    key: "getChar",
                    value: function() {
                        return this.assertDisplay(), this.display.getChar() || ""
                    }
                }, {
                    key: "input",
                    value: function(e) {
                        this.console.input(e)
                    }
                }, {
                    key: "halt",
                    value: function() {
                        this.halted = !0
                    }
                }]) && r(t.prototype, n), e
            }());
        t.exports = c
    }, {
        "context-eval": "node_modules/context-eval/lib/context-browser.js",
        "./parser": "parser.js",
        "./functions": "functions.js",
        "./errors": "errors.js"
    }],
    "../../home/runner/bundle-repl/node_modules/process/browser.js": [function(e, t, n) {
        var r, i, o = t.exports = {};

        function s() {
            throw new Error("setTimeout has not been defined")
        }

        function u() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === s || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
            try {
                return r(e, 0)
            } catch (t) {
                try {
                    return r.call(null, e, 0)
                } catch (t) {
                    return r.call(this, e, 0)
                }
            }
        }! function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : s
            } catch (e) {
                r = s
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : u
            } catch (e) {
                i = u
            }
        }();
        var c, l = [],
            h = !1,
            f = -1;

        function p() {
            h && c && (h = !1, c.length ? l = c.concat(l) : f = -1, l.length && v())
        }

        function v() {
            if (!h) {
                var e = a(p);
                h = !0;
                for (var t = l.length; t;) {
                    for (c = l, l = []; ++f < t;) c && c[f].run();
                    f = -1, t = l.length
                }
                c = null, h = !1,
                    function(e) {
                        if (i === clearTimeout) return clearTimeout(e);
                        if ((i === u || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                        try {
                            i(e)
                        } catch (t) {
                            try {
                                return i.call(null, e)
                            } catch (t) {
                                return i.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function y(e, t) {
            this.fun = e, this.array = t
        }

        function d() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            l.push(new y(e, t)), 1 !== l.length || h || a(v)
        }, y.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = d, o.addListener = d, o.once = d, o.off = d, o.removeListener = d, o.removeAllListeners = d, o.emit = d, o.prependListener = d, o.prependOnceListener = d, o.listeners = function(e) {
            return []
        }, o.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    }, {}],
    "index.js": [function(e, t, n) {
        e("process"), window.Basic = e("./basic")
    }, {
        "./basic": "basic.js",
        process: "../../home/runner/bundle-repl/node_modules/process/browser.js"
    }]
}, {}, ["index.js"]), window.Basic.interpret_only_result = function(e, t) {
    return new Promise((n, r) => {
        new Basic({
            console: console,
            debugLevel: 99
        }).run(e).then(() => {
            logger.getLogs().forEach(function(e) {
                var n = e[0];
                1 == e.length && n.replace(/\s/g, "").length && (t(e), logger.clear())
            })
        })
    })
};
var logger = {};
console.defaultLog = console.log.bind(console), console.logs = [], console.log = function() {
    console.defaultLog.apply(console, arguments), console.logs.push(Array.from(arguments))
}, logger.getLogs = function() {
    return console.logs
}, logger.clear = function() {
    console.logs = []
};
