$(document).ready(function(){
  $('.portfolio-slider').slick({
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    dots: true,
    centerMode: false,
  });

  $('.feedback-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });
});