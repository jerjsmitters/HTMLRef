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
  if (!move){
    $("#main-body").css("transform", `translateX(-${mobMoved})`); //body to left
    $("#mob-menu").css("transform", "translateX(0%)"); //menu to left
    $("#sticky-chat").css("visibility", "hidden"); //sticky chat gone
    $("#darken").css("visibility", "visible").css("opacity", "1").css("z-index", "500");
    move = true;
  }else {
    $("#main-body").css("transform", "translateX(0)");
    $("#mob-menu").css("transform", "translateX(100%)");
    $("#sticky-chat").css("visibility", "visible");
    $("#darken").css("visible", "hidden").css("opacity", "0").css("z-index", "0");
    move = false;
  }
});



//Works when cardbox is of fixed width and

//menu should then become sticky.

//style menu

//fix sticky menu
