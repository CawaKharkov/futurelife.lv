
  var buttonMenu = document.querySelector('.btn-toggle-menu'),
      menuGlobal = document.querySelector('.menu-swiper-global');

  // Global slider
  var gSwiper = new Swiper('.swiper-global', {
    speed: 700,
    pagination: {
      el: '.g-swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return '<span class="cur">'+current+'</span>' + ' of ' + '<span class="total">'+total+'</span>';
      }
    },
    navigation: {
      nextEl: '.g-swiper-button-next',
      prevEl: '.g-swiper-button-prev',
    },
  });


  // Menu slider
  var menuSwiper = new Swiper('.menu-swiper-global', {
    speed: 700,
    // loop: true,
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    allowTouchMove: true,
    centeredSlides: true,
    freeMode: true,
  });

  gSwiper.on('slideChange', function () {
    menuSwiper.slideTo(gSwiper.realIndex, 700);
  });

  menuSwiper.on('slideChange', function () {
    gSwiper.slideTo(menuSwiper.realIndex, 700);
  });

  // Mini slider (slide #5)
  var mSwiper = new Swiper('.swiper-mini', {
    init: false,
    autoplay: {
      delay: 2000,
    },
    loop: true,
    speed: 700,
    pagination: {
      el: '.m-swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.m-swiper-button-next',
      prevEl: '.m-swiper-button-prev',
    },
  });

  // first slide == index 0
  gSwiper.on('slideChange', function () {
    if (gSwiper.activeIndex !== 4) {
      mSwiper.autoplay.stop();
      return;
    }
    mSwiper.init();
    mSwiper.autoplay.start();
  });

  buttonMenu.addEventListener('click', function() {
    menuGlobal.classList.toggle('show');
    buttonMenu.classList.toggle('shown');
  });


