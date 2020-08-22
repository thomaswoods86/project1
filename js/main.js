

$("document").ready(function () {
  $(".has-video-left .spotlight-image, .has-video-right .spotlight-image").click(function () {
    window.open('https://www.youtube.com/watch?v=C0DPdy98e4c');
    return false;
  });

  $(".hamburger").click(function () {
    $('.hamburger').toggleClass('is-active');
    $(".overlay").fadeToggle();
  });

  $( ".catalog-spotlight .duo-swap .left" ).mouseenter(function() {
    $( ".square" ).addClass("down");
    $( ".square" ).removeClass("up");
  });
  
  $( ".catalog-spotlight .duo-swap .left" ).mouseleave(function() {
    $( ".square" ).addClass("up");
    $( ".square" ).removeClass("down");
  });

  $( ".catalog-spotlight .duo .right" ).mouseenter(function() {
    $( ".square1" ).addClass("down");
    $( ".square1" ).removeClass("up");
  });
  
  $( ".catalog-spotlight .duo .right" ).mouseleave(function() {
    $( ".square1" ).addClass("up");
    $( ".square1" ).removeClass("down");
  });

  $('.mobile-pic-wrap').slick({
    
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
          slidesToScroll: 1,
          // autoplay: true,
          dots: true,
          autoplaySpeed: 4000,
        }
      }
    ]
  });
  $('.pic-wrap').slick('unslick');


  let count = $(".new").length;
  console.log(count);


  $("a[href^='#']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top;
  
    $("body, html").animate({
      scrollTop: position
    }, 1500, 'swing' );
  });
});