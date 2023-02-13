// pre-loading 
$(document).ready(function(){
  setTimeout(() => {
    $(".forloading").fadeOut(onload , function(){
      $("html,body").css({overflow : "visible"})
      });
  }, 1000);
});

// owlCarousel section4 - home page
$(document).ready(function(e) {
    $(".owl1").owlCarousel({
      loop:true,
      margin:50,
      responsive:{
        100:{
          items:2
        },
        400:{
          items:3
        },
        768:{
          items:4
        },
        992:{
          items:6
        }
      }
    })
});
// ==========================================================================================
// owlCarousel section8 home page

function owlInitialize() {
  if ($(window).width() > 1199) {
    $('#home #section8 .owl-carousel').owlCarousel('destroy');
    $('#home #section8 .owl2').removeClass("owl-carousel");
    $('#home #section8 .owl2').addClass("owl-carousel");
    $(".owl2").owlCarousel({
      loop:true,
      nav:true,
      navText: ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
      margin:30,
      items:1,
      responsive:{
        990:{
          items:2
        }
      },
    });
  }else{
    $('#home #section8 .owl-carousel').owlCarousel('destroy');
    $('#home #section8 .owl2').removeClass("owl-carousel");
    $('#home #section8 .owl2').addClass("owl-carousel");
     $(".owl2").owlCarousel({ 
        loop:true,
        nav:false,
        dots:true,
        margin:30,
        items:1,
        responsive:{
          990:{
            items:2
          }
        },
      });
  }
}

$(document).ready(function(e) {
  owlInitialize();
});

$(window).resize(function() {
  owlInitialize();
});

// ==========================================================================================
// Swip Up Button

$(window).scroll(function(){

  var myScrollTop = $(window).scrollTop();
 
  if( myScrollTop >= 650)
  {
      $(".swipUp").fadeIn(650)
  }
  else
  {
      $(".swipUp").fadeOut(650)
  }
})

$("button.swipUp").click(function(){
  $("html,body").animate( { scrollTop: 0 } , 1000 )
  // $(window).scrollTop(0);
})

// navbar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    $("html,body").css({overflow : "hidden"})
    $("#bodyOverlay").removeClass("d-none");
    document.getElementById("bodyOverlay").style.width = "100%";
}

function openInfoSidebar() {
  document.getElementById("contactInfo").style.width = "250px";
  $("html,body").css({overflow : "hidden"})
  $("#bodyOverlay").removeClass("d-none");
  document.getElementById("bodyOverlay").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $("html,body").css({overflow : "auto"})
    $("#bodyOverlay").addClass("d-none");
    document.getElementById("bodyOverlay").style.width = "0";
}

function closeInfoSidebar() {
  document.getElementById("contactInfo").style.width = "0";
  $("html,body").css({overflow : "auto"})
  $("#bodyOverlay").addClass("d-none");
  document.getElementById("bodyOverlay").style.width = "0";
}

// prevent Chrome violation warnings => [Violation] Added non-passive event listener to a scroll-blocking
jQuery.event.special.touchstart = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("touchstart", handle, { passive: false });
    } else {
      this.addEventListener("touchstart", handle, { passive: true });
    }
  }
};

// ========================================
// search overlay
$('.search-btn,.search-close').click(function (e) { 
  let $searchbar = $('.overlay-search');
  e.preventDefault();
  $searchbar.toggleClass("open")
  return false;
});

      // Info side bar events
      $('#openInfoSidebar').click(function (e) { 
        openInfoSidebar();
      });

      $('#closeInfoSidebar').click(function (e) { 
        closeInfoSidebar();
      });

      // Navbar Toggle
      $('#openNav').click(function (e) { 
        openNav();
      });

      $('#closeNav').click(function (e) { 
        closeNav();
      });

      // Close aside bar on click
      $('aside#mySidenav .navbar-nav .nav-item .nav-link').click(function (e) { 
        closeNav();
      });

      // control aside and navbar in resize mode
      $(window).resize(function(){
        if($(window).width() > "1199"){
          closeNav();
        }else{
          closeInfoSidebar();
        }
      });