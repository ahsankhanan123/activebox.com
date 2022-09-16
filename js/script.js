
let toggle = document.querySelector(".toggle");
let nav = document.querySelector(".nav");

toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    autoplay: true,
    responsive:{
        0:{
            items:1,
            dots: false
        },
        600:{
            items:1,
            dots: false
        },
        1000:{
            items:1
        }
    }
  })





