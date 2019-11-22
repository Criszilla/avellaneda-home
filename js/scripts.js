$(function(){
    //Preload Site
    $(window).on('load', function () {
		$('.cd-loader').fadeOut('slow', function () {
			$(this).remove();
		});
    });
    
    /*--------------------------------
    -------------Sliders--------------
    ---------------------------------- */
    //Slider Home Top
    $('.slider-home-top').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    /*--------------------------------
    -----------Main Menu--------------
    ---------------------------------- */

    //Cambiar los Clicks por hovers en el Megamenu con Bootstrap4
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
    },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });

    /*-------Scroll Menu------ */

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
            $('#main-menu').addClass('scroll-menu');
		}else{
			$('#main-menu').removeClass('scroll-menu')
		}        
	});

	/*-------Elastic Mobile Menu------ */
	
	$("#btn_show").click(function(){
        $("#elastic-menu").addClass("active");
    });

    $("#btn_show2").click(function(){
        $("#elastic-menu").addClass("active");
	});
	
	$("#btn_close").click(function(){
        $("#elastic-menu").removeClass("active");
    });

    /*--------------------------------
    -----------Shared footer mobile--------------
    ---------------------------------- */

    $(".shared-btn-footer").click(function(){
        $(".shared-collapse-footer").toggleClass("hide-shared-footer");
    });

});