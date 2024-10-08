$(document).ready(function() {

  // 하단 탑버튼 스크롤 이벤트 감지
  $(window).scroll(function(){
    if($(this).scrollTop() < 100){
      $('.topBtnFix').hide();
    } else if($(this).scrollTop() < 2178) {
      $('.topBtnFix').show();
    } else {
      $('.topBtnFix').hide();
    }
  });
  //  버튼 클릭시 상단 스크롤
  $('.topBtnFix').on('click',function(){
    $('html,body').animate({scrollTop:0},500);
    return false;
  });

  // 메뉴바 클릭 이벤트
  $('.header .container.lora .menuBar').on('click',function(){
    $('.siteMap').addClass('active');
    $('.header .container.lora .mainLogo').addClass('active');
  });

  // 닫기버튼 클릭 이벤트
  $('.siteMap .closeBtn').on('click',function(){
    $('.siteMap').removeClass('active');
    $('.header .container.lora .mainLogo').removeClass('active');
  });





  // 비주얼3 슬라이드 스와이퍼
  let swiper = new Swiper('.projectSwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    // centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // 1120px 이상
      1120: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // 870 ~ 1120px 
      870: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // 0 ~ 870px 
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  // 비주얼4 탑버튼
  $('.topBtn').on('click',function(){
    $('html,body').animate({scrollTop:0},500);
    return false;
  });
  
}); 