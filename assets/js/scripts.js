$(document).ready(function(){
	$('.apps-carousel').owlCarousel({
		loop:true,
		dots:false,
		margin:15,
  		nav: true,
  		autoplay:1000,
    	responsiveClass:true,
  		navText: ["<img src='assets/images/left-arrow.png'>","<img src='assets/images/right-arrow.png'>"],
  		responsive:{
  			0:{
  				items:1
  			},
  			576:{
  				items:2
  			},
  			992:{
  				items:3
  			},
  			1200:{
  				items:4
  			}
  		}


	})	
	$('.client-carousel').owlCarousel({
		items:2,
		loop:true,
		dots:true,
		nav:false,
		margin:50,
		autoplay:1000,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1400:{
				items:3
			}
		}
	});
	$('.nav-icon').click(function(){
		$('.menu').slideToggle(700);
		return false;
	})
})

$(window).scroll(function(){
	var scrollvalue = $(this).scrollTop();

	// sticky
	if(scrollvalue>150){
		$('header').addClass('sticky');
	}else{
		$('header').removeClass('sticky');
		
	 return false;
	}
})