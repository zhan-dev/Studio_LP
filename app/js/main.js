$(document).ready(function(){

  //скрытие пустых элементов
  $("p.f:empty").hide();
  $("p.s:empty").hide();
  $("p.t:empty").hide();


  $('.yourClass').slick({
    arrows:true, // показать стрелки
    dots:false, // не показывать точки
    autoplay:true,
    autoplaySpeed: 3500,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

});
