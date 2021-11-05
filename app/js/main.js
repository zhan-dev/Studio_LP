$(document).ready(function(){

  //скрытие пустых элементов
  $("p.f:empty").hide();
  $("p.s:empty").hide();
  $("p.t:empty").hide();


  $('.gallery-service').slick({
    arrows:true, // показать стрелки
    dots:false, // не показывать точки
    autoplay:true,
    autoplaySpeed: 3500,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

});

//скрытие и открытие блока в галерее (galery service)
$(".__info").hide();
$(".gallery-service__block").hover(function(){
  $('.__info', this).show();
},function(){
    $('.__info').hide();
});
 
