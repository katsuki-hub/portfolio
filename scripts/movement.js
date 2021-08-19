/*メニュースライド*/
$(document).ready(function () {
  $("#open_btn").on("click", function () {
    $("#boxmenu").slideToggle();
  });
});

/*画像フェード*/
function fadeAnime() {
  $('.fadein').each(function () { //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    } else {
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
  });
}
$(window).scroll(function () {
  fadeAnime();
});