function forbidden_control() {
    $.extend({
        message: function(a) {
            var b = {
                title: "",
                message: "操作成功",
                time: "3000",
                type: "success",
                showClose: !0,
                autoClose: !0,
                onClose: function() {}
            };
            "string" == typeof a && (b.message = a), "object" == typeof a && (b = $.extend({}, b, a));
            var c, d, e, f = b.showClose ? '<div class="c-message--close">×</div>' : "",
                g = "" !== b.title ? '<h2 class="c-message__title">' + b.title + "</h2>" : "",
                h = '<div class="c-message animated animated-lento slideInRight"><i class=" c-message--icon c-message--' + b.type + '"></i><div class="el-notification__group">' + g + '<div class="el-notification__content">' + b.message + "</div>" + f + "</div></div>",
                i = $("body"),
                j = $(h);
            d = function() {
                j.addClass("slideOutRight"), j.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    e()
                })
            }, e = function() {
                j.remove(), b.onClose(b), clearTimeout(c)
            }, $(".c-message").remove(), i.append(j), j.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                j.removeClass("messageFadeInDown")
            }), i.on("click", ".c-message--close", function(a) {
                d()
            }), b.autoClose && (c = setTimeout(function() {
                d()
            }, b.time))
        }
    }),
    document.onkeydown = function(e) {
        if (123 == e.keyCode || e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode) || (e.ctrlKey && 85 === e.keyCode)) return $.message({
            message: "采用本站js及css请注明来源，禁止商业使用！",
            title: "你真坏，不能打开控制台喔!",
            type: "error",
            autoHide: !1,
            time: "3000"
        }), event.keyCode = 0, event.returnValue = !1, !1
    }, document.oncontextmenu = function() {
        return $.message({
            message: "采用本站js及css请注明来源，禁止商业使用！",
            title: "不能右键/长按喔！",
            type: "error",
            autoHide: !1,
            time: "3000"
        }), !1
    },
    function() {
        function e() {
            var e = new Date;
            if (new Date - e > 10) {
                try {
                    document.getElementsByTagName("html")[0].innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>'
                } catch (e) {}
                return document.body.innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>', !0
            }
            return !1
        }

        function t() {
            for (; e();) e()
        }
        e() ? t() : window.onblur = function() {
            setTimeout(function() {
                t()
            }, 500)
        }
    }(),
    function() {
        var e = /x/;
        e.toString = function() {
            try {
                document.getElementsByTagName("html")[0].innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>'
            } catch (e) {}
            return document.body.innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>', "禁止打开控制台！"
        }
    }(),
    function() {
        var e = document.createElement("div");
        Object.defineProperty(e, "id", {
            get: function() {
                try {
                    document.getElementsByTagName("html")[0].innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>'
                } catch (e) {}
                document.body.innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>'
            }
        }), console.log(e)
    }()
}


作者: Ethan.Tzy
链接: https://tzy1997.com/articles/hexo541u/#%E7%A6%81%E6%AD%A2%E5%8F%B3%E9%94%AE%E5%8F%8AF12%E7%AD%89%E4%BA%8B%E4%BB%B6
来源: 唐先森の博客
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。