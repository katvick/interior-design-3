$(document).ready(function(){
  $(".header-slider").owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 600,
    // autoplay: true,
    // autoplayTimeout: 3000,
    margin: 5,
  });

  $('.slider-next').click(function() {
    $(".header-slider").trigger('next.owl.carousel');
  });

  $('.slider-prev').click(function() {
    $(".header-slider").trigger('prev.owl.carousel');
  });
});