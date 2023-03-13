
// burger
$(document).ready(function () {
    $(".burger").on("click", function (event) {
        $(".burger, .nav__item").toggleClass("active");
        $("body").toggleClass("lock");
    })
});



// aos
  AOS.init();
