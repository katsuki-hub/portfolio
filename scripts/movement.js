/*メニュースライド*/
$(document).ready(function () {
  $("#open_btn").on("click", function () {
    $("#boxmenu").slideToggle();
  });
});

/*画像フェード*/
function fadeAnime() {
  $('.fadein').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
}
$(window).scroll(function () {
  fadeAnime();
});

/*にゅ～ん*/
function smoothAnime() {
  $('.smoothTrigger').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('smooth');
    } else {
      $(this).removeClass('smooth');
    }
  });
}
$(window).scroll(function () {
  smoothAnime();
});

/*TOP PAGEへ*/
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1000) {//上から200pxスクロールしたら
    $('#page-top').removeClass('DownMove');
    $('#page-top').addClass('UpMove');
  } else {
    if ($('#page-top').hasClass('UpMove')) {
      $('#page-top').removeClass('UpMove');
      $('#page-top').addClass('DownMove');
    }
  }
}

$(window).scroll(function () {
  PageTopAnime();
});

$(window).on('load', function () {
  PageTopAnime();
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 1000);//ページトップスクロールの速さ。
  return false;//リンク自体の無効化
});