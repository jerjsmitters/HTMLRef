$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
      loop: true,
      margin: 10,
      items: 1,
      loop: true,
      nav: true,
      navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      // autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true
    }
  );
});
