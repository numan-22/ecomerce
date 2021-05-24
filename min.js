/* ---------------------- banner carousal --------------------- */
$('.owl-carousel.banner-slide').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    center: true,
    nav:true,
    animateOut: 'fadeOut',
    autoplay: true,
    margin: 0,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
});




/*---------------- top product carousal -----------------*/
$('.owl-carousel.product-carousal').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
   0:{
       items:1
   },
  
   600:{
       items:2
   },
   1000:{
       items:4
   }
  }
  })


  $('[data-fancybox]').fancybox({
	toolbar  : false,
	smallBtn : true,
iframe : {
	preload : false
	}
})


/* ---------------------- registration form banner --------------------- */
$('.owl-carousel.form-slider').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    center: true,
    nav:true,
    animateOut: 'fadeOut',
    autoplay: true,
    margin: 0,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
});

// to top
$(window).on( 'scroll.myTemplat', scrollWindow).trigger( 'scroll.myTemplat' );

function scrollWindow() {
    if ($(window).scrollTop() > 300) {
        $('.to-top').addClass('active');
    } else {
        $('.to-top').removeClass('active');
    }
}

$( 'body' ).on( 'click', '.to-top',  function(event) {
    $('html, body').animate({
        scrollTop:0
    }, 400);
    return false;
});


