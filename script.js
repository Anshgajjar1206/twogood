var ClassVar = document.querySelector(".Header")
var Classlogo = document.querySelector(".logo-img")
var Classlogo_2 = document.querySelector(".logo")
var Classnav_ul = document.querySelector(".nav-ul")
var Classnav_extra = document.querySelector(".extra")
var lastScroll = window.pageYOffset;

window.onscroll = function() {
    var currentScroll = window.pageYOffset;

    if (lastScroll > currentScroll) {
        Classlogo_2.style.display = "block";
        Classlogo.style.display = "none"
        Classnav_ul.style.display = "flex"
        
    } else {
        Classlogo.style.display = "block";
        Classnav_ul.style.display = "none"
        Classlogo_2.style.display = "none";
        Classnav_extra.style.marginLeft = "auto";
    }

    lastScroll = currentScroll;
};