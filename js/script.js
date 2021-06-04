$(window).scroll(function(){
 if( $(window).scrollTop() > 100){
   $(".menu").addClass ("stickumenu")
 } 
 else{
  $(".menu").removeClass ("stickumenu")
 }

 if( $(window).scrollTop() > 500){
  $(".up-botton").fadeIn()
} 
else{
 $(".up-botton").fadeOut()
}

});

$(window).load(function(){
  if( $(window).scrollTop() > 100){
    $(".menu").addClass ("stickumenu")
  } 
  else{
   $(".menu").removeClass ("stickumenu")
  }
 
 });
 
 $(".up-botton").click(function(){
   $("html,body").animate({
     scrollTop:0
   },1000)
 })














$('.banner-slider').slick({
  dots: false,
  infinite: true,
  arrows:true,
  speed: 300,
  fade:true,
  autoplay:true,
  autoplaySpeed:3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<i class="fas fa-arrow-circle-left prev"></i>',
  nextArrow:'<i class="fas fa-arrow-circle-right next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:false
        ,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.service-slider').slick({
  dots: false,
  infinite: true,

  speed: 300,
 
  autoplay:false,
  autoplaySpeed:3000,
  slidesToShow: 3,
  slidesToScroll: 1,
    vertical:true,
    centerMode:true,
    centerPadding:"0",
    prevArrow:'<i class="fas fa-angle-up prev"></i>',
  nextArrow:'<i class="fas fa-angle-down next"></i>',

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        vertical:false,
        dots: true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        centerMode:false,
        centerPadding:"0",
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
        dots: true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
        dots: true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

$('.img-slider').slick({
  dots: false,
  infinite: true,
  arrows:false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"20",
  autoplay:true,
  autoplaySpeed:2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        centerMode:false,
        centerPadding:"0",
        
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        centerMode:false,
        centerPadding:"0",
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode:false,
        centerPadding:"0",
        autoplay:true,
        autoplaySpeed:3000,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
        dots: false,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


 
});


$('.round-slider').slick({
  dots: false,
  infinite: true,
  arrows:true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"0",
  vertical:true,
  asNavFor:'.texti-slider',
  prevArrow:'<i class="fas fa-angle-up prev"></i>',
  nextArrow:'<i class="fas fa-angle-down next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        vertical:false,
        dots:false,
        arrows:false,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        arrows:false,
        vertical:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
        dots: false,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  

 

 
});

$('.texti-slider').slick({
  dots: false,
  infinite:true,
  arrows:false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor:'.round-slider',
  fade:true,
 
});

$('.member-slider').slick({
  dots:false,
  infinite: true,
  arrows:false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  
  autoplay:true,
  autoplaySpeed:2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
       
      }
    },
    
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
       
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
        dots: false,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

 
});

