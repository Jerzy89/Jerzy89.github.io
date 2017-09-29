$(document).ready(function () {
	function n() {
		a++, s.innerHTML = (100 / t * a << 0) + "%", a >= t && setTimeout(function () {
			o.classList.contains("done") || o.classList.add("done")
		}, 1e3)
	}

	function e() {
		$(".top_header").css("height", $(window).height())
	}

	for (var i = document.images, t = i.length, a = 0, o = document.getElementById("page-preloader"), s = document.getElementById("load_perc"), c = 0; c < t;
		 c++) image_clone = new Image, image_clone.onload = n, image_clone.onerror = n, image_clone.src = i[c].src;
	e(), $(window).resize(function () {
		e()
	}), $(".top_header").parallax({imageSrc: "../img/top_headerBg.jpg"}), function (n) {
		n(function () {
			n(".toggle-overlay").click(function () {
				n("aside").toggleClass("open"), n(".bar").toggleClass("animate")
			})
		})
	}(jQuery), $("nav li a").click(function () {
		$("aside").toggleClass("open"), $(".bar").toggleClass("animate")
	}), (new WOW).init(), $.fn.extend({
		animateCss: function (n) {
			return this.addClass("animated " + n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
				$(this).removeClass("animated " + n)
			}), this
		}
	}),
		$(".job_icon").animateCss("flipInX"), $(".study_icon").animateCss("flipInX"),
		$(".popup_content").magnificPopup({type: "inline"}), $("input,select,textarea").jqBootstrapValidation()
});