/*$("#search-icon").click(function() {
	$(".nav").toggleClass("search");
	$(".nav").toggleClass("no-search");
	$(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
	 $(".nav").toggleClass("mobile-nav");
	 $(this).toggleClass("is-active");
  });

  $(document).ready(function(){
	  $(window).scroll(function(){
	     if(this.scrollY > 20){ 
			 $('.nav').addClass("sticky");
		 }else{
			$('.nav').removeClass("sticky");
		 }

      })
  });*/
  $(document).ready(function(){


	$('.fa-bars').click(function(){
	  $(this).toggleClass('fa-times');
	  $('.navbar').toggleClass('nav-toggle');
	});
  
	$(window).on('load scroll',function(){
	  $('.fa-bars').removeClass('fa-times');
	  $('.navbar').removeClass('nav-toggle');
  
	  if($(window).scrollTop() > 30){
		$('.header').css({'background':'#6C5CE7','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
	  }else{
		$('.header').css({'background':'none','box-shadow':'none'});
	  }
	});
  
  
	$('.accordion-header').click(function(){
	  $('.accordion .accordion-body').slideUp();
	  $(this).next('.accordion-body').slideDown();
	  $('.accordion .accordion-header span').text('+');
	  $(this).children('span').text('-');
	});
  
  
  
  });