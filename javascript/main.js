//SideMenu
let move = false;
let mobMoved = $("#mob-menu").css("width"); //width of mobile menu; used to determine
                                            //how much body will move upon slide.

$("#burger").click( () => {
  if (!move){
    $("html").css("overflow", "hidden");
    $("#main-body").css("right", `${mobMoved}`).css('overflow', 'hidden'); //body to left
    $("#mob-menu").css("right", "0").css("top", "0"); //side-menu to left
    $("#sticky-chat").css("visibility", "hidden"); //sticky chat gone
    $("#darken").css("visibility", "visible").css("opacity", "1").css("z-index", "500"); //darken effect
    move = true;
  }else {
    $("html").css("overflow", "visible");
    $("#main-body").css("right", "0").css('overflow', 'visible');
    $("#mob-menu").css("right", `-${mobMoved}`);
    $("#sticky-chat").css("visibility", "visible");
    $("#darken").css("visibility", "hidden").css("opacity", "0").css("z-index", "0");
    if (!mobAUdrop || !mobNewsDrop){
      $('#mob-news-dropdown').slideUp('fast');
      $('#mob-au-dropdown').slideUp('fast');
    }
    move = false;
  }
});

//Sticky nav bar
let fillVar = true;
let scrollStart;
const vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const headerHeight = $(".header").css('height');

$(document).scroll(()=>{
  let scrollAmount = $(document).scrollTop();

  if (vpWidth < 992) {
    scrollStart = 40;
  } else{
    scrollStart = 120;
  }
  if (scrollAmount > scrollStart) {
    if (fillVar) { //UNSTUCK -> STUCK
      $("#stickyboi").addClass("sticky-on");
      $('#logo').addClass('sticky-logo').removeAttr('id');
      $("body").prepend("<div id='filler'></div>");
      $('#filler').css("height",`${headerHeight}`);

      fillVar = false; //So filler is only inserted once

      if (vpWidth < 992){ //Mobile features
        $('.call').addClass('sticky-call').removeClass('call');
        $('.header').css("backgroundImage", "linear-gradient(#0ce5ff, #0099ab)")
                    .css('height', '80px');
        $('#burger').addClass('sticky-burger').removeAttr('id');
        $('#mob-menu').css("backgroudColor", "none")
                      .css("backgroundImage", "linear-gradient(rgb(12, 229, 255) 0%, rgb(0, 153, 171) 8.7%, #008999)");

      }else { //Desktop features
        $(".header").removeClass("header").addClass("sticky-header");
        $(".sticky-logo").attr("src", "img/logo-mini.png");
      }
    }

  } else { //STUCK->UNSTUCK
    $("#stickyboi").removeClass("sticky-on");
    $('.sticky-logo').attr('id', 'logo').removeClass('sticky-logo');
    // $('.card-container').removeClass('card-container-fix');
    $("#filler").remove();
    fillVar=true;
    if (vpWidth < 992) { //Mobile features
      $('.sticky-call').addClass('call').removeClass('sticky-call');
      $('.header').css("backgroundImage", "none")
                  .css('height', '190px');
      $('.sticky-burger').attr('id', 'burger').removeClass('sticky-burger');
      $('#mob-menu').css("backgroudColor", "#0099ab")
                    .css("backgroundImage", "none");
    }else {
      $(".sticky-header").removeClass("sticky-header").addClass("header")
      $("#logo").attr("src", "img/logo.png");
    }
  }
});

//mob menu dropdowns
let mobAUdrop = false;
$('#mob-au').click(()=>{
  if (!mobAUdrop){
    $('#mob-au-dropdown').slideDown('slow');
    mobAUdrop=true;
  } else {
    $('#mob-au-dropdown').slideUp('slow');
    mobAUdrop = false;
  }
});

let mobNewsDrop = false;
$('#mob-news').click(()=>{
  if (!mobNewsDrop){
    $('#mob-news-dropdown').slideDown('slow');
    mobNewsDrop=true;
  } else {
    $('#mob-news-dropdown').slideUp('slow');
    mobNewsDrop = false;
  }
});

//prevents scrolling to the top of the page for au and news
$('#mob-au').click((e)=>{
  e.preventDefault();
});

$('#mob-news').click((e)=>{
  e.preventDefault();
});


//cookies
const cookiebtn = $("#cookies button");
const cookiebox = $("#cookies");

setTimeout(()=>{
  cookiebox.slideDown("slow");
}, 2000);

cookiebtn.click(()=>{
  cookiebox.slideUp("slow");
});


//Sign up button
$("#email").click(()=>{
  $("#sign-up").slideDown("slow");
});
