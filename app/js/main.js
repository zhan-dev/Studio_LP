$(document).ready(function(){

  $('.gallery-service').slick({
    arrows:true, // показать стрелки
    dots:false, // не показывать точки
    autoplay:true,
    autoplaySpeed: 3500,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

  $('.clients').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false, // показать стрелки
    dots:true, // не показывать точки
    autoplay:true,
    autoplaySpeed: 3500
  });


});



  //скрытие пустых элементов
  $("p.f:empty").hide();
  $("p.s:empty").hide();
  $("p.t:empty").hide();


//скрытие и открытие блока в галерее (galery service)
  $(".__info").hide();
  $(".gallery-service__block").hover(function(){
    $('.__info', this).show();
  },function(){
      $('.__info').hide();
  });

//scroll
  function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop-100, //100 - величина отступа 
      behavior: 'smooth'
    })
  }
  
  var button = document.querySelector('.scroll');
  var footer = document.querySelector('#log');
  
  button.addEventListener('click', () => {
    scrollTo(footer);
  })