const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var fixed = document.querySelector('#fixed-image');
var elems = document.querySelector('#elem-container');
elems.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
elems.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2, // Default value
        spaceBetween: 30,
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewheel: true,
        keyboard: true,
        breakpoints: {
          // When the viewport width is >= 600px
          600: {
            slidesPerView: 3, // Change to 3 slides
          },
        },
      });
      


  function menuAnimation() {

  var menu = document.querySelector("nav h3")
  var full = document.querySelector("#full-scr")
  var navimg = document.querySelector("nav img")
  var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
    
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}


loaderAnimation()
menuAnimation()