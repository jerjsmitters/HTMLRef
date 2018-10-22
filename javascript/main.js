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
    move = false;
  }
});


//Sticky nav bar mobile
let fillVar = true;

$(document).scroll(()=>{
  let scrollAmount = $(document).scrollTop();
  if (scrollAmount > 0) {
    if (fillVar) { //UNSTUCK -> STUCK
      $("#stickyboi").addClass("sticky-on");
      $('#logo').addClass('sticky-logo').removeAttr('id');
      $('.call').addClass('sticky-call').removeClass('call');
      $("body").prepend("<div id='filler'></div>");
      $('#filler').css("height","200px")
      $('.header').css("backgroundImage", "linear-gradient(#0ce5ff, #06cbe2, #0099ab)")
                  .css('height', '92px');
      $('#burger').addClass('sticky-burger').removeAttr('id');
      $('.card-container').addClass('card-container-fix'); //fixes misalignment issue
      fillVar = false; //So filler is only inserted once
    }
  } else { //STUCK->UNSTUCK
    $("#stickyboi").removeClass("sticky-on");
    $('.sticky-logo').attr('id', 'logo').removeClass('sticky-logo');
    $('.sticky-call').addClass('call').removeClass('sticky-call');
    $('.header').css("backgroundImage", "none")
                .css('height', '190px');
    $('.sticky-burger').attr('id', 'burger').removeClass('sticky-burger');
    $("#filler").remove();
    $('.card-container').removeClass('card-container-fix');

    fillVar=true;
  }

});
