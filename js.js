$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".darken-overlay").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".darken-overlay").removeClass("active");
    }
});

  $(function () {
            $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
        });

        // Adding animations to the sections
        $("section").addClass("wow fadeIn");

        // Animations Init
        new WOW().init();



/**
$(document).ready(function(){
  
  $(".scroll").click(function(){
    $(".darken-overlay").toggleClass("active");
    $(".darken-overlay").focus();
  });
  
});


$(document).ready(function(){
	var scroll_start= 0;
	var startchange = $('.carousel-caption');
	var offset = startchange.offset();
	if (startchange.lenght){

$(document).scroll(function() {
	scroll_start = $(this).scrollTop();
		if(scroll_start > offset.top) {
			$(".navbar").css('background', 'rgba(255,255,255,0.8)');
			$(".navbar-brand").css('color','white');
		} else {
			$(".navbar").css('background', 'transparent');
			$(".navbar-brand").css('color','#4a4a4a');
		}
	});

	}
});




/* Change heading:
"use strict";

const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const myNav = document.querySelector('nav');
const myElenTag = document.querySelector('nav li a');

let scrolled = () => {
	let dec = scrolled / (bodyTag.scrollHeigh - innerheight);
	return Math.floor(dec * 10);
}

addEventLister('scrool', () => {
	myNav.style.setPropertly('background' ,scrolled() >50 ?
		"var(--color)" var(---color);

})

	*/