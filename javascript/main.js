//SignUp Button
$("#email").click( () =>{
  $("#sign-up").slideDown("fast", "swing");
  $("#email").css("marginBottom", "0px");
});


//SideMenu
let move = false;
let mobMoved = $("#mob-menu").css("width"); //width of mobile menu; used to determine
                                            //how much body will move upon slide.

$("#burger").click( () => {
  //Problems:
  //If burger is clicked and then unclicked, menu becomes unstuck.
  //If burger is clicked and then scrolling occurs, menu becomes unstuck.
  //Around 936px, if the menu becomes sticky, the cards becomes grossly misaligned with the rest of the document.

  //THE CODE BELOW IS FINE
  if (!move){
    $("#main-body").css("transform", `translateX(-${mobMoved})`); //body to left
    $("#mob-menu").css("transform", "translateX(0%)"); //side-menu to left
    $("#sticky-chat").css("visibility", "hidden"); //sticky chat gone
    $("#darken").css("visibility", "visible").css("opacity", "1").css("z-index", "500"); //darken effect
    move = true;
  }else {
    $("#main-body").css("transform", "translateX(0)");
    $("#mob-menu").css("transform", "translateX(100%)");
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
      $('.header').css("backgroundImage", "linear-gradient(#0ce5ff, #06cbe2, #0099ab)")
                  .css('height', '92px');
      $('#burger').addClass('sticky-burger').removeAttr('id');
      $('.card-container').addClass('card-container-fix');
      fillVar = false; //So filler is only inserted once
    }

  } else { //STUCK->UNSTUCK
    $("#stickyboi").removeClass("sticky-on");
    $('.sticky-logo').attr('id', 'logo').removeClass('sticky-logo');
    $('.sticky-call').addClass('call').removeClass('sticky-call');
    $('.header').css("backgroundImage", "none")
                .css('height', 'auto');
    $('.sticky-burger').attr('id', 'burger').removeClass('sticky-burger');
    $("#filler").remove();
    $('.card-container').removeClass('card-container-fix');

    fillVar=true;
  }

});
