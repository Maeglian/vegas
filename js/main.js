$(document).ready(function(){
  const navs = ['', ''];

  $(".Carousel-Slider").owlCarousel({
    loop: true,
    items: 5,
    margin: 10,
    nav: true,
    dots: false,
    navText: navs
  });

  $(".Tournaments-Slider").owlCarousel({
    loop: true,
    items: 1,
    navText: navs
  });
});
