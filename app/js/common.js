$(function() {

	//toggle-menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-menu").slideToggle();
		return false;
	});

	//equalHeights
	$(".s3-item").equalHeights();

	//owl-carousel
	$(".owl-carousel").owlCarousel({
		items: '1',
		loop: 'true',
		center: 'true',
		nav: 'true',
		navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
	});

	//magnific-popup
	$(".gallery-sertificates").magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});

	$('.popup-content').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: false,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	//animation
	$(".s-1").waypoint(function(){
		$(".s1-text").addClass("animated fadeInRight")
	}, {
		offset: '65%'
	});

	$(".s-2").waypoint(function(){
		$(".s2-items").addClass("animated fadeInUp")
	}, {
		offset: '55%'
	});

	$(".s-3").waypoint(function(){
		$(".s3item-left").addClass("animated fadeInLeft"), $(".s3item-right").addClass("animated fadeInRight")
	}, {
		offset: '65%'
	});

	$(".s-4").waypoint(function(){
		$(".s4item-left").addClass("animated fadeInLeft"), $(".s4item-right").addClass("animated fadeInRight")
	}, {
		offset: '65%'
	});

	$(".s-6").waypoint(function(){
		$(".s6-items").addClass("animated fadeInUp")
	}, {
		offset: '65%'
	});

	$(".s-7").waypoint(function(){
		$(".s7-text").addClass("animated fadeInRight")
	}, {
		offset: '65%'
	});

	$(".s-8").waypoint(function(){
		
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1300,
			easing: 'swing',
			step: function() {
				$(".s-8 span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".s-8 span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "40px"},
				1300);
		});

	}, {
		offset: '93%'
	});

	$(".s-12").waypoint(function(){
		$(".s12-item").addClass("animated zoomIn")
	}, {
		offset: '60%'
	});

	//кнопка наверх
	$("body").append('<div class="buttonUp"><i class="fa fa-arrow-up"></i></div>');

	$(".buttonUp").click(function(){
		$("html, body").animate({scrollTop: 0}, 1500);
	});

	$(".arrow-down").click(function(){
		$("html, body").animate({scrollTop: 1250}, 1500);
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".buttonUp").addClass("activeButton")
		}	else {
			$(".buttonUp").removeClass("activeButton")
		}
	});

	slowScroll = function(id){
		var offset = 0;
		$('html, body').animate({scrollTop: $(id).offset().top - offset}, 1500);
		return false;
	};

	//E-mail Ajax Send
	$("body").append('<div class="thx">Спасибо за заявку!</div>');

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".thx").addClass("thx-active");
			setTimeout(function() { $(".thx").removeClass("thx-active"); }, 2000);
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//preloader
	$(".hellopreloader_preload").addClass("preloader-active");
	setTimeout(function() { $(".hellopreloader_preload").removeClass("preloader-active"); }, 3000);

});
