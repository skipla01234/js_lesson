$(document).ready(function() {
  $('.slick_01').slick({
    dots: true,
  });

  $('.slick_02').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });

  $('.slick_03').slick({
    dots: true,
    infinite: true,
    speed: 300, /* 300ミリ秒 (0.3秒)でスライドさせる */
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.slick_04').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  /* 両端を見せる */
  $('.slick_05').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrow: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrow: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  });

  /* 自動再生 */
  $('.slick_06').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: 200,
    autoplaySpeed: 1000, /* 1000ミリ秒 = 1秒 */
  });

  /* フェード */
  $('.slick_07').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
  });

  /* 遅延読み込み */
  $('.slick_08').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 2,
    slidesToScroll: 1,
  });

  /* カード形式のカルーセル */
  $('.slick_card').slick({
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  /* カード形式のカルーセル② */
  $('.slick_card_02').slick({
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
});
