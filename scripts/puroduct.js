/*=====================
メニュースライド
=====================*/
$("#open_btn").click(function () {
  $("#boxmenu").toggleClass('panelactive');
});

$("#boxmenu a").click(function () {
  $("#boxmenu").removeClass('panelactive');
});

$('#boxmenu a').click(function () {
  var elmHash = $(this).attr('href'); //hrefの内容を取得
  var pos = Math.round($(elmHash).offset().top - 60); //headerの高さを引く
  $('body,html').animate({ scrollTop: pos }, 1000);//※数値が大きいほどゆっくりスクロール
  return false;
});


/*=====================
TOP PAGEへ
=====================*/
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
    //上から200pxスクロールしたら
    $("#page-top").removeClass("DownMove");
    $("#page-top").addClass("UpMove");
  } else {
    if ($("#page-top").hasClass("UpMove")) {
      $("#page-top").removeClass("UpMove");
      $("#page-top").addClass("DownMove");
    }
  }
}

$(window).scroll(function () {
  PageTopAnime();
});

$(window).on("load", function () {
  PageTopAnime();
});

// #page-topをクリックした際の設定
$("#page-top a").click(function () {
  $("body,html").animate({
    scrollTop: 0,
  },
    1000
  ); //ページトップスクロールの速さ。
  return false; //リンク自体の無効化
});

/*=====================
流れるテキスト
=====================*/
function slideAnime() {
  //====左に動くアニメーションここから===
  $(".leftAnime").each(function () {
    var elemPos = $(this).offset().top - 10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
    } else {
      $(this).removeClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
    }
  });
}

$(window).on('load', function () {
  slideAnime();
});

function galleryAnime() {
  $('.gallery li').each(function () {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('flipLeft');
    } else {
      $(this).removeClass('flipLeft');
    }
  });
}

$(window).scroll(function () {
  galleryAnime();
});