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