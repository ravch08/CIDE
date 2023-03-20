'use strict';

const header = document.querySelector('header');
const scrollTop = document.querySelector('.scrollTop');
const sliderSection = document.querySelector('.slider');

const arrivalTabs = document.querySelectorAll('.arrival-tab');
const arrivalItems = document.querySelectorAll('.product-item');

const fadeIns = document.querySelectorAll('.fade-in');


// ----- Intersection Observer  -------------------------------------------------------------------

const options = {
   threshold: 1
};

const appearOptions = {
   threshold: 0.9,
   rootMargin: '-100px 0px -100px 0px'
}

const headerObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {

      !entry.isIntersecting ? header.classList.add('sticky') : header.classList.remove('sticky');
   })
}, options);

const scrollObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {

      !entry.isIntersecting ? scrollTop.classList.add('show') : scrollTop.classList.remove('show');
   });
}, options);

const appearObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if (!entry.isIntersecting) return
      else {
         entry.target.classList.add('appear');
         appearObserver.unobserve(entry.target);
      };
   });
});

headerObserver.observe(sliderSection);
scrollObserver.observe(sliderSection);

fadeIns.forEach(fadeIn => {
   appearObserver.observe(fadeIn);
});



// ----- Event Listeners  -------------------------------------------------------------------

scrollTop.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});

arrivalTabs.forEach(arrivalTab => {
   arrivalTab.addEventListener('click', () => {
      arrivalTabs.forEach(tab => tab.classList.remove('active'));
      arrivalTab.classList.add('active');

      let dataFilter = arrivalTab.getAttribute('data-filter');

      arrivalItems.forEach(arrivalItem => {
         arrivalItem.classList.remove('show');
         arrivalItem.classList.add('hide');

         if (arrivalItem.getAttribute('data-item') === dataFilter || dataFilter === 'all') {
            arrivalItem.classList.remove('hide');
            arrivalItem.classList.add('show');
         };
      });
   });
});


// ----- Swiper  -------------------------------------------------------------------

const swiperSlider = new Swiper('#swiper-slider', {

   init: true,
   loop: true,
   speed: 1500,
   keyboard: true,
   effect: "fade",
   spaceBetween: 0,
   loopedSlides: 50,
   grabCursor: true,
   mousewheel: false,
   centeredSlides: true,
   slidesPerView: "auto",
   breakpointsInverse: true,
   loopFillGroupWithBlank: false,

   // breakpoints: {
   //    640: {
   //       slidesPerView: 2,
   //       spaceBetween: 20,
   //    },
   //    768: {
   //       slidesPerView: 4,
   //       spaceBetween: 40,
   //    },
   //    1024: {
   //       slidesPerView: 5,
   //       spaceBetween: 50,
   //    }
   // },

   navigation: {
      nextEl: ".swiper-button-next"
   },

   // pagination: {
   //    el: '.swiper-pagination',
   //    dynamicBullets: true,
   //    clickable: 'true'
   // },

   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   }
});

const swiperTestimonial = new Swiper('#swiper-testimonial', {

   init: true,
   loop: true,
   speed: 1500,
   spaceBetween: 30,
   keyboard: false,
   loopedSlides: 50,
   grabCursor: true,
   mousewheel: false,
   centeredSlides: true,
   slidesPerView: "3",
   breakpointsInverse: true,
   loopFillGroupWithBlank: false,

   navigation: {
      nextEl: ".swiper-button-next"
   },

   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: 'true'
   },

   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   }
});