$(document).ready(function(){
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    });
    $(".nav-burger").click(function(){
        $(this).children("i").toggleClass("fa-times");
        $(".main-menu").toggleClass("active");
    });
});