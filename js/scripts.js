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

var 
    modalButton = document.getElementById('modalButton'),
    modalClose = document.getElementById('modalClose');



modalButton.onclick = function(e) {
  e.preventDefault();
  modal.classList.toggle('modal-window-show');}

modalClose.onclick = function(e) {
  e.preventDefault();
  modal.classList.toggle('modal-window-show');}
