$(document).ready(function(){
  $('.slider').slick({
    
    infinite: true,
    responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false
      }
    }
  ]
  });
});