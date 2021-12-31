$(function () {
  $('header .menu_btn').click(function () {
    $(this).toggleClass('on');
    $('body').toggleClass('hidden');
    $('header .logo, header .util_wrap, header .menu_area').toggleClass('on');

    if ($(this).hasClass('on')) {
      $('.book_badge').animate({
        'opacity': 0
      }, function () {
        $('.book_badge').addClass('on');
      })
    } else {
      $('.book_badge').removeClass('on');
      $('.book_badge').animate({
        'opacity': 1
      });
    }
  });

  $('header .gnb a').on('mouseenter focus', function () {
    let idx = $(this).parent('li').index();
    console.log(idx);
    $('header .menu_area .ani_area > div').fadeOut().removeClass('on');
    $('header .menu_area .ani_area > div').eq(idx).fadeIn().addClass('on');

    $('header .gnb a').on('mouseleave blur', function () {
      $('header .menu_area .ani_area > div').fadeOut().removeClass('on');
    });
  });

  function followBtn() {
    $('.main_video').mousemove(function (e) {
      if ($(window).width() > 1024) {
        $('.main_video .play_btn').addClass('fixed');
        w = $('.main_video .play_btn').outerWidth() / 2;
        h = $('.main_video .play_btn').outerHeight() / 2;

        gsap.to('.main_video .play_btn', {
          x: e.clientX - w,
          y: e.clientY - h,
        })
      }
    })
  }

  function fixedBtn(){
    $('.main_video').mouseleave(function () {
      if ($(window).width() > 1024) {
        $('.main_video .play_btn').removeClass('fixed');
      
        gsap.to('.main_video .play_btn', {
          x: 0,
          y: 0,
        })
      } else {
        $('.main_video').mouseleave(function () {
          $('.main_video .play_btn').removeClass('fixed');
          gsap.to('.main_video .play_btn', {
            x: '50%',
            y: 'calc(50% - 16vw)',
            xPercent: 50,
          })
        });
      }
    });
  }

  followBtn();
  fixedBtn();

  $(window).resize(function () {
    followBtn()
    fixedBtn();
  });


  $('section .img_wrap').each(function (index, item) {
    let triggerEl = $(this).parents('section');
    let yVal = $(this).data('y') ? $(this).data('y') : 0;

    gsap.to(
      item, {
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top 80%',
          end: 'bottom top',
          scrub: 1,
        },
        yPercent: yVal,
      })
  });

  $('section .img_area').each(function (index, item) {
    let triggerEl = $(this).parents('section');
    let yVal = $(this).data('y') ? $(this).data('y') : 0;

    gsap.from(
      item, {
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top 80%',
          end: 'bottom top',
          scrub: 1,
        },
        yPercent: yVal,
      })
  });

  $('.sc_games .game_list a').on('mouseenter focus', function () {
    let idx = $(this).parents('li').index();

    $('.sc_games .game_list a').removeClass('on');
    $('.sc_games .img_wrap .inner, .sc_games .sub_txt p').removeClass('on');
    $('.sc_games .img_wrap .inner').eq(idx).addClass('on')
    $('.sc_games .sub_txt p').eq(idx).addClass('on')
  })

  $('.sc_location .content img').each(function (index, item) {

    gsap.from(item, {
      scrollTrigger: {
        trigger: $('.sc_location'),
        start: 'top 80%',
        end: 'bottom bottom',
        scrub: 1,
      },
      scale: .5,
    })
  });

  $('.motion_rotate').each(function (index, item) {
    let triggerEl = $(this).parents('section') ? $(this).parents('section') : $(this).parent('footer');
    let rVal = $(this).data('rotation') ? $(this).data('rotation') : 30;

    gsap.to(item, {
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top 80%',
        end: 'bottom top',
        scrub: 1,
      },
      rotation: rVal,
    })
  });

  $('.motion_sprite').each(function (index, item) {
    let triggerEl = $(this).parents('section');
    let idx = $(this).index();
    let yVal = -idx * $(this).data('y');
    let opc = 0.6 / idx;

    gsap.to(item, {
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top 80%',
        end: '50% top',
        scrub: 1,
      },
      yPercent: yVal,
      opacity: opc,
    })
  });

  $('.sc_location .location_list h3 > a').on('mouseenter focus', function () {
    let idx = $(this).parents('li').index();

    if (!$(this).hasClass('on')) {
      $(this).parents('li').siblings().find('a').removeClass('on');
      $(this).addClass('on');
      $('.sc_location .content > img').eq(idx).siblings('img').removeClass('on').addClass('off');
      $('.sc_location .content > img').eq(idx).removeClass('off').addClass('on');
    }
  });
})