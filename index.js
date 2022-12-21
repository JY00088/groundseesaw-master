
const elBanner = document.querySelectorAll('.mainbanner .banner01'),
    elBtn = document.querySelectorAll('.arrowbtn');

// elBanner.forEach(function (elBanner,key) {
//     elBtn.addEventListener('click', function () {
            
//         })
// })

// function init() {

//     var swiper = new Swiper(".mySwiper", {
//         autoplay: {
//             //delay: 2500,
//             disableOnInteraction: false,
//         },
//         breakpoints: {
//             640: {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//             },
//             768: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//             },
//             1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 30,
//             },
//         },
//         loop: true,
//         navigation: {
//             nextEl: "swiper arrowmain01",
//             prevEl: "swiper arrowmain02",
//         },
//     });
// }

// window.onload = init;

var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 3,
    breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    767: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

  


    

