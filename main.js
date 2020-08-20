

$("document").ready(function () {
  $(".has-video-left .spotlight-image, .has-video-right .spotlight-image").click(function () {
    window.open('https://www.youtube.com/watch?v=C0DPdy98e4c');
    return false;
  });

  $(".hamburger").click(function () {
    $('.hamburger').toggleClass('is-active');
    $(".overlay").fadeToggle();
  });

  // $('.pic-wrap').slick('unslick');

  $('.mobile-pic-wrap').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
  });


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