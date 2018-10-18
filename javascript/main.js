//SignUp Button
$("#email").click( () =>{
  $("#sign-up").slideDown("fast", "swing");
  $("#email").css("marginBottom", "0px");
});

//SideMenu
let move = false;
$("#burger").click( () => {
  if (!move){
    $("#main-body").css("transform", "translateX(-35%)");
    move = true;
  }else {
    $("#main-body").css("transform", "translateX(0)");
    move = false;
  }
});

//establish positions of menu  COMPLETE
//construct selector that selects all in body but #mob-menu COMPLETE
//menu moves to left on burger click
//menu should then become sticky.
//sticky chat should disappear
//style menu
