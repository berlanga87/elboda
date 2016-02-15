//global variables
var images=new Array('/assets/sc_globo2.jpg',
                     '/assets/boda_crop.jpg',
                     './assets/sc_boda2.jpg',
                     './assets/sol_carlos.gif');

var nextimage = 0;

//start slideshow
$(document).ready(function(){
  // $(window).on('hashchange', function() {
  //   if (window.location.hash != "#1"){
  //       $("#navbar").addClass("navbar-fixed-top")
  //   }
  //   else {
  //     $("#navbar").removeClass("navbar-fixed-top")
  //   }
  //   //mkae navbar fixed
  //
  // });

  console.log("running slideshow");
  doSlideshow();
  $("#flag").mouseover(function(){
    console.log("hovering over flag");
    $("#flag_img").attr('src', "/assets/arg_flag_small.png")
  });
  $("#flag").mouseleave(function(){
    console.log("hovering over flag");
    $("#flag_img").attr('src', "/assets/flag_mexico.jpg")
  });

  $("#btn_rsvp").click(function () {
    console.log("clicked RSVP");
    $.scrollify.move("#3");
  })


})

//Hero background-image slideshow
function doSlideshow(){
  if (nextimage>=images.length) nextimage=0
  $('#hero_section').css('background-image','url("'+images[nextimage++]+'")')
                    .hide()
                    .fadeIn("fast",function(){
                      console.log("changing image " + nextimage);
                      setTimeout(doSlideshow,3000);
                    });
}

//Enable Scrollify
$(function() {
  $.scrollify({
    section : "section",
  });
});
