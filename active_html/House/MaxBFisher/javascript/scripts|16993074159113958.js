$(document).ready(function () {
    window.$(".menu > li").bind("mouseover", f);
    window.$(".menu > li").bind("mouseout", b);
    window.$(".menu > li > ul").bind("mouseover", a);

    function f() {
        window.$(this).find("ul").css("visibility", "visible");
        window.$(this).addClass("menuHover");
    }
    function b() {
        window.$(this).find("ul").css("visibility", "hidden");
        window.$(this).removeClass("menuHover");
    }
    function a() {
        window.$(this).closest("li").addClass("menuHover");
        window.$(this).parent().addClass("menuHover");
    }
    window.$("#subscription").submit(function (j) {
        j.preventDefault();
        var c = window.$(this),
            e = c.find('input[name="e"]').val(),
            i = c.find('input[name="z"]').val(),
            b = c.find('input[name="f"]').val(),
            k = c.find('input[name="l"]').val(),
            d = c.attr("action");
        window.$.post("/EmailSignup.ashx", {
            e: e,
            z: i,
            f: b,
            l: k
        }, function (h) {
            var g = window.$(h).find("#formResponse");
            window.$("#result").html(g);
        });
    });
    //window.$("[placeholder]").focus(function () {
    //    var c = window.$(this);
    //    if (c.val() == c.attr("placeholder")) {
    //        c.val("");
    //        c.removeClass("placeholder");
    //    }
    //}).blur(function () {
    //    var c = window.$(this);
    //    if (c.val() == "" || c.val() == c.attr("placeholder")) {
    //        c.addClass("placeholder");
    //        c.val(c.attr("placeholder"));
    //    }
    //}).blur().parents("form").submit(function () {
    //    window.$(this).find("[placeholder]").each(function () {
    //        var c = window.$(this);
    //        if (c.val() == c.attr("placeholder")) {
    //            c.val("");
    //        }
    //    });
    //});

    $(document).ready(function () {
        $(".menu-open-button a").click(function () {
            $(".overlay").fadeToggle(200);
        });
    });
    $('.overlay-close').on('click', function () {
        $(".overlay").fadeToggle(200);
        open = false;
    });
    $(window).on('resize', function () {
        var win = $(this); //this = window
        if (win.width() >= 959) {
            $(".overlay").hide();
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#backToTop').fadeIn(1500);
        } else {
            $('#backToTop').fadeOut(1500);
        }
    });

    $('#backToTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
});



function subForm() {

    const params = {
        email: document.querySelector('#subE').value,
        zip: document.querySelector('#subZ').value,
        first: document.querySelector('#subF').value,
        last: document.querySelector('#subL').value
    };

    if (document.querySelector('#subE').value.length > 0) {
        const http = new XMLHttpRequest();
        http.open('POST', '/Sub.ashx');
        http.setRequestHeader('Content-type', 'application/json');
        http.send(JSON.stringify(params));
        $("#emailSignup").hide();
        $("#signupThanks").show();
    } else {
        //Empty
        var element = document.getElementById("subE");
        element.classList.add("error");
    }
}

function sidebarSubForm() {

    const params = {
        email: document.querySelector('#sidebarSubE').value
    };

    if (document.querySelector('#sidebarSubE').value.length > 0) {
        const http = new XMLHttpRequest();
        http.open('POST', '/Sub.ashx');
        http.setRequestHeader('Content-type', 'application/json');
        http.send(JSON.stringify(params));
        $("#sidebarEmailSignupWrapper").hide();
        $("#sidebarSignupThanks").show();
    } else {
        //Empty
        var element = document.getElementById("sidebarSubE");
        element.classList.add("error");
    }
}
