(function(a) {
    var b = function(c, k, d) {
        var l = a.document;
        var m = l.createElement("link");
        var e;
        if (k) {
            e = k
        } else {
            var i = (l.body || l.getElementsByTagName("head")[0]).childNodes;
            e = i[i.length - 1]
        }
        var f = l.styleSheets;
        m.rel = "stylesheet";
        m.href = c;
        m.media = "only x";

        function j(n) {
            if (l.body) {
                return n()
            }
            setTimeout(function() {
                j(n)
            })
        }
        j(function() {
            e.parentNode.insertBefore(m, (k ? e : e.nextSibling))
        });
        var h = function(o) {
            var n = m.href;
            var p = f.length;
            while (p--) {
                if (f[p].href === n) {
                    return o()
                }
            }
            setTimeout(function() {
                h(o)
            })
        };

        function g() {
            if (m.addEventListener) {
                m.removeEventListener("load", g)
            }
            m.media = d || "all"
        }
        if (m.addEventListener) {
            m.addEventListener("load", g)
        }
        m.onloadcssdefined = h;
        h(g);
        return m
    };
    if (typeof exports !== "undefined") {
        exports.loadCSS = b
    } else {
        a.loadCSS = b
    }
}(typeof global !== "undefined" ? global : this));
loadCSS("https://s3-us-west-2.amazonaws.com/s.cdpn.io/97621/in2m-async.css");
