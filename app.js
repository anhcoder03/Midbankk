
window.addEventListener("load", function () {
    const anh = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    // click --> 3 gạch --> add class vào.
    anh && anh.addEventListener("click", inMenu);
    function inMenu(event) {
    menu && menu.classList.add("is-show");
    }
    
    // click -- ngoài menu --> remove class
    document.addEventListener("click", outInMenu);
    function outInMenu(event) {
    if (event.target.matches(".menu-toggle") || event.target.matches(".menu"))
    return;
    menu && menu.classList.remove("is-show");
    }
});
// load //
$(window).on("load", function (event) {
    $("body").removeClass("preloading");
    $(".load").delay(1000).fadeOut("fast");
});
