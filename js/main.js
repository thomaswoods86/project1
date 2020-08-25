$("document").ready(function () {
  $(".has-video-left .spotlight-image, .has-video-right .spotlight-image").click(function () {
    window.open('https://www.youtube.com/watch?v=C0DPdy98e4c');
    return false;
  });

  $(".hamburger").click(function () {
    $('.hamburger').toggleClass('is-active');
    $(".overlay").fadeToggle();
  });

  $(".catalog-spotlight .duo-swap .left").mouseenter(function () {
    $(".square").addClass("down");
    $(".square").removeClass("up");
  });

  $(".catalog-spotlight .duo-swap .left").mouseleave(function () {
    $(".square").addClass("up");
    $(".square").removeClass("down");
  });

  $(".catalog-spotlight .duo .right").mouseenter(function () {
    $(".square1").addClass("down");
    $(".square1").removeClass("up");
  });

  $(".catalog-spotlight .duo .right").mouseleave(function () {
    $(".square1").addClass("up");
    $(".square1").removeClass("down");
  });


  
  function show() {
    $("#filter").val('jacket');
    $('.hat').addClass('hide');
    $('.shirt').addClass('hide');
    $('.jacket').removeClass('hide');
  }
  
  function show1() {
    $("#filter").val('hat');
    $('.hat').removeClass('hide');
    $('.shirt').addClass('hide');
    $('.jacket').addClass('hide');
  }
  
  function show2() {
    $("#filter").val('shirt');
    $('.hat').addClass('hide');
    $('.shirt').removeClass('hide');
    $('.jacket').addClass('hide');
  }
  
  // function jk(){
  //   var a = 10;
  //   return a;
  // }
  // function ht(){
  //   var a = 20;
  //   return a;
  // }
  // function sr(){
  //   var a = 30;
  //   return a;
  // }
  $("#jacket").on("click", function () {
    localStorage.setItem('#jacket', 'clicked')
    window.location.href="catalog.html";
  });
  
  $("#hat").on("click", function () {
    localStorage.setItem('#hat', 'clicked')
    window.location.href="catalog.html";
  });
  
  $("#shirt").on("click", function () {
    localStorage.setItem('#shirt', 'clicked')
    window.location.href="catalog.html";
  });
  
  if(localStorage.getItem('#jacket') === 'clicked'){
    // if (jk() == 10) {
      show();
    // }
    localStorage.removeItem('#jacket');

}

if(localStorage.getItem('#hat') === 'clicked'){
  // if (ht() == 20) {
    show1();
  // }
  localStorage.removeItem('#hat');

}

if(localStorage.getItem('#shirt') === 'clicked'){
  // if (sr() == 30) {
    show2();
  // }
  localStorage.removeItem('#shirt');

}

  


  // $("#shirt").on("click", function () {
  //   //hum(6);
  //   console.log(hum(6));
  // });
  // if (hum(6) == 6) {
  //   $('.hat').addClass('hide');
  //   $('.shirt').removeClass('hide');
  //   $('.jacket').addClass('hide');
  // }

  $('.mobile-pic-wrap').slick({

    responsive: [{
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 4000,
      }
    }]
  });
  // $('.pic-wrap').slick('unslick');

  // $('.page-header').on("click", function(){
  // // $('.shirt').fadeToggle('hide');
  // $('.shirt').toggleClass('hide');
  // });

  $(document).on("change", "#filter", function () {
    if ($(this).val() == 'all') {
      $('.hat').removeClass('hide');
      $('.shirt').removeClass('hide');
      $('.jacket').removeClass('hide');
    }
    if ($(this).val() == 'jacket') {
      $('.hat').addClass('hide');
      $('.shirt').addClass('hide');
      $('.jacket').removeClass('hide');
    }
    if ($(this).val() == 'shirt') {
      $('.shirt').removeClass('hide');
      $('.hat').addClass('hide');
      $('.jacket').addClass('hide');
    }
    if ($(this).val() == 'hat') {
      $('.hat').removeClass('hide');
      $('.shirt').addClass('hide');
      $('.jacket').addClass('hide');
    }
  });

  // let count = $(".new").length;
  // console.log(count);


  $("a[href^='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
      scrollTop: position
    }, 1500, 'swing');
  });
});