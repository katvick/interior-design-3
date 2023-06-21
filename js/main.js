$(document).ready(function(){

  // header-slider
  $(".header-slider").owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 600,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 5,
  });

  $('.slider-next').click(function() {
    $(".header-slider").trigger('next.owl.carousel');
  });

  $('.slider-prev').click(function() {
    $(".header-slider").trigger('prev.owl.carousel');
  });

  // portfolio-slider
  const owlConfig = {
    items: 1,
    loop: true,
    smartSpeed: 600,
    stagePadding: 40,
    margin: 15,
    responsive: {
      500: {
        items: 2,

      }
    }
  }

  $('.portfolio-content').owlCarousel(owlConfig)

  if (window.innerWidth >= 768) {
    $('.portfolio-content').trigger('destroy.owl.carousel');
  }

  window.addEventListener('resize', () => {
    if ( window.innerWidth >= 768) {
      $('.portfolio-content').trigger('destroy.owl.carousel');
    } else {
      $('.portfolio-content').owlCarousel(owlConfig);
    }
  })

  // Fancybox
  Fancybox.bind("[data-fancybox]", {
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  });

  // animated
  let show = true;
  let countbox = ".animated-number";
  $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      let w_height = $(window).height(); // Высота окна браузера
      let d_height = $(document).height(); // Высота всего документа
      let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.num').css('opacity', '1');
          $('.num').spincrement({
              thousandSeparator: "",
              duration: 2000
          });

          show = false;
      }
  });

});