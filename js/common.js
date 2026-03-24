$(document).ready(function () {//시작

	$(".depth2").hide();
	$("header .gnb > li").mouseenter(function () {
		$(this).children(".depth2").stop().slideDown();
	});
	$("header .gnb > li").mouseleave(function () {
		$(this).children(".depth2").stop().slideUp();
	});

	/*search*/
	$(".search-wrap").hide();
	$(".search").click(function () {
		$(".search-wrap").stop().slideDown();
	});
	$(".search-close").click(function () {
		$(".search-wrap").stop().slideUp();
	});

	var options = {
		ovalWidth: 350,
		ovalHeight: 50,
		offsetX: 50,
		offsetY: 0,
		angle: 0,
		activeItem: 0,
		duration: 350,
		className: 'item'
	}

	var carousel = $('.carousel').CircularCarousel(options);

	/* Previous button */
	$('.controls .previous').click(function (e) {
		carousel.cycleActive('previous');
		e.preventDefault();
	});

	/* Next button */
	$('.controls .next').click(function (e) {
		carousel.cycleActive('next');
		e.preventDefault();
	});

	/* Manaully click an item anywhere in the carousel */
	$('.carousel .item').click(function (e) {
		var index = $(this).index('li');
		carousel.cycleActive(index);
		e.preventDefault();
	});

	/*section5*/
	const video = document.querySelector(".video5");
	const playBtn = document.querySelector(".play");

	playBtn.addEventListener("click", (e) => {
		e.preventDefault();

		if (video.paused) {
			video.play();
			playBtn.classList.add("is-playing");
		} else {
			video.pause();
			playBtn.classList.remove("is-playing");
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


});//끝