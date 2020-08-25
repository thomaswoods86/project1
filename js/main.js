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


  
  function showJacket() {
    $("#filter").val('jacket');
    $('.hat').addClass('hide');
    $('.shirt').addClass('hide');
    $('.jacket').removeClass('hide');
    $('.jeans').addClass('hide');
  }
  
  function showHat() {
    $("#filter").val('hat');
    $('.hat').removeClass('hide');
    $('.shirt').addClass('hide');
    $('.jacket').addClass('hide');
    $('.jeans').addClass('hide');
  }
  
  function showShirt() {
    $("#filter").val('shirt');
    $('.hat').addClass('hide');
    $('.shirt').removeClass('hide');
    $('.jacket').addClass('hide');
    $('.jeans').addClass('hide');
  }

  function showJeans() {
    $("#filter").val('jeans');
    $('.hat').addClass('hide');
    $('.shirt').addClass('hide');
    $('.jacket').addClass('hide');
    $('.jeans').removeClass('hide');
  }

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

  $("#jeans").on("click", function () {
    localStorage.setItem('#jeans', 'clicked')
    window.location.href="catalog.html";
  });
  
if(localStorage.getItem('#jacket') === 'clicked'){
    showJacket();
  localStorage.removeItem('#jacket');
}

if(localStorage.getItem('#hat') === 'clicked'){
    showHat();
  localStorage.removeItem('#hat');
}

if(localStorage.getItem('#shirt') === 'clicked'){
    showShirt();
  localStorage.removeItem('#shirt');
}

if(localStorage.getItem('#jeans') === 'clicked'){
    showJeans();
  localStorage.removeItem('#jeans');
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
      $('.jeans').removeClass('hide');
    }
    if ($(this).val() == 'jacket') {
      $('.hat').addClass('hide');
      $('.shirt').addClass('hide');
      $('.jacket').removeClass('hide');
      $('.jeans').addClass('hide');
    }
    if ($(this).val() == 'shirt') {
      $('.shirt').removeClass('hide');
      $('.hat').addClass('hide');
      $('.jacket').addClass('hide');
      $('.jeans').addClass('hide');
    }
    if ($(this).val() == 'hat') {
      $('.hat').removeClass('hide');
      $('.shirt').addClass('hide');
      $('.jacket').addClass('hide');
      $('.jeans').addClass('hide');
    }
    if ($(this).val() == 'jeans') {
      $('.hat').addClass('hide');
      $('.shirt').addClass('hide');
      $('.jacket').addClass('hide');
      $('.jeans').removeClass('hide');
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