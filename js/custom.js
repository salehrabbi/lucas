$(document).ready(function () {
    var owl = $('.owl');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<", ">"],
        responsive: {
            0: {
                items: 2
            },
            475: {
                items: 3
            },
            600: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    })
})

$(document).scroll(function (e) {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 0) {
        console.log(scrollTop);
        $('.header-bottom').removeClass('navbar-static-top').addClass('navbar-fixed-top');
    } else {
        $('.header-bottom').removeClass('navbar-fixed-top').addClass('navbar-static-top');
    }
});

$(document).ready(function () {
    $("#search-control").click(function () {
        $(".search-form").toggleClass("active");
        $(".phone-number").removeClass("active");
        $(".font-resize").removeClass("active");
        $("#google_translate_element").removeClass("active");
    });
    $("#phone-number").click(function () {
        $(".phone-number").toggleClass("active");
        $(".search-form").removeClass("active");
        $(".font-resize").removeClass("active");
        $("#google_translate_element").removeClass("active");
    });
    $("#font-resize-control").click(function () {
        $(".font-resize").toggleClass("active");
        $(".search-form").removeClass("active");
        $(".phone-number").removeClass("active");
        $("#google_translate_element").removeClass("active");
    });
    $("#translate").click(function () {
        $("#google_translate_element").toggleClass("active");
        $(".search-form").removeClass("active");
        $(".phone-number").removeClass("active");
        $(".font-resize").removeClass("active");
    });
    $(".font-resize .fa-plus").click(function () {
        var fontSize = parseInt($(this).css("font-size"));
        fontSize = fontSize + 5 + "px";
        $('body').css({
            'font-size': fontSize
        });
    });
    $(".font-resize .fa-minus").click(function () {
        var fontSize = parseInt($(this).css("font-size"));
        fontSize = fontSize - 5 + "px";
        $('body').css({
            'font-size': fontSize
        });
    });
    $("#black-white").click(function () {
        $("body").toggleClass("gray");
        $(".goog-te-banner-frame").toggleClass("translate-posotion");
    });
});
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'es'}, 'google_translate_element');
}