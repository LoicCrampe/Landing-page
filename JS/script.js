$(function () {
    $("#Menu").on("click", function (e) {
        $(".subMenu").slideToggle();
        $(".subMenu").toggleClass("collapse");
    });
});
