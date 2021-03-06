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
画像フェード
=====================*/
function fadeAnime() {
  $(".fadein").each(function () {
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
    } else {
      $(this).removeClass("fadeUp");
    }
  });
}
$(window).scroll(function () {
  fadeAnime();
});

/*=====================
にゅ～ん
=====================*/
function smoothAnime() {
  $(".smoothTrigger").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("smooth");
    } else {
      $(this).removeClass("smooth");
    }
  });
}
$(window).scroll(function () {
  smoothAnime();
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

$(window).scroll(function () {
  slideAnime();
});

/*=====================
背景アニメーション
=====================*/
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

/*sakura--------------
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, //この数値を変更すると桜の数が増減できる
      density: {
        enable: true,
        value_area: 1121.6780303333778,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "image",
      stroke: {
        width: 0,
      },
      image: {
        src: "images/flower.png",
        width: 120,
        height: 120,
      },
    },
    opacity: {
      value: 0.06409588744762158,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8.011985930952697,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 7,
      direction: "bottom-right",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 281.9177489524316,
        rotateY: 127.670995809726,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: false,
});
--------------*/

/*=====================
背景色変更
=====================*/

//緑へ
function colorgreen() {
  $(".colorwork").each(function () {
    var elemPos = $(this).offset().top + 300;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(".main-wrapper").addClass("greencolor");
    } else {
      $(".main-wrapper").removeClass("greencolor");
    }
  });
}
$(window).scroll(function () {
  colorgreen();
});

//黒へ
function colorblack() {
  $(".colornews").each(function () {
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(".main-wrapper").addClass("blackcolor");
    } else {
      $(".main-wrapper").removeClass("blackcolor");
    }
  });
}
$(window).scroll(function () {
  colorblack();
});
