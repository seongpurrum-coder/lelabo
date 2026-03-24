$(document).ready(function () {//시작

  //another13
  $(".big-img li").hide();
  $(".big-img li").eq(0).show();

  $('.small-img li').click(function () {

    let listNum = $(this).index();

    $(this).addClass('active').siblings().removeClass('active');
    $('.big-img li').eq(listNum).fadeIn().siblings().hide();
  });



  //가격
  $(".price li").hide();
  $(".price li").eq(0).show();

  $('.box2 ul li').click(function () {

    let listNum = $(this).index();

    $(this).addClass('active').siblings().removeClass('active');
    $('.price li').eq(listNum).fadeIn().siblings().hide();
  });

  //글자수세기
  const input = document.querySelector(".msg-box input");
  const counter = document.querySelector(".count");

  input.addEventListener("input", function () {
    const length = this.value.length;
    counter.textContent = length + "/18";
  });


  //자세히보기
  const btn = document.querySelector(".toggle-btn");
  const moreText = document.querySelector(".more-text");

  btn.addEventListener("click", function () {

    if (moreText.style.display === "block") {
      moreText.style.display = "none";
      btn.textContent = "more";
    } else {
      moreText.style.display = "block";
      btn.textContent = "close";
    }

  });


  //상품
  const typeSlide = new Swiper(".typeslide", {
    loop: true,
    autoplay: { delay: 2000, disableOnInteraction: false },
    speed: 700,
    spaceBetween: 24,

    breakpoints: {
      0: { slidesPerView: 1.2 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1400: { slidesPerView: 4 }  // ✅ 큰 화면에서 4개 딱
    }
  });

  /*ask*/
	$(".ask-wrap").hide();
	$(".ask").click(function () {
		$(".ask-wrap").stop().show();
	});
	$(".ask-close").click(function () {
		$(".ask-wrap").stop().hide();
	});

}); //끝