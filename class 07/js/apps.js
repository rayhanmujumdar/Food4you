$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      center:true,
      nav:true,
      navText:[
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ],
      autoplay:false,
      autoplayTimeout:3000,
      autoplayHoverPause:false,
      responsive:{
          0:{
              items:1,     
          },
          600:{
              items:3,
          },
          1000:{
              items:3,
          }
      }
  })
  });

window.addEventListener('scroll',function(){
    let topHeader = document.querySelector('header');
    topHeader.classList.toggle('sticky',window.scrollY>0)
  })