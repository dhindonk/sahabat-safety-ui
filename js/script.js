// Navbar ShowHide
var lastScrollTop = 0;
navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});