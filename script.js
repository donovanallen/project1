$(document).ready(function(){
  console.log("this works");

  var playerOne = {
    name: "",
    score: 0,
  };

  var $button = $("button");

  var $nameInput = $("#nameInput");

  var $form = $("form");

  var $play = $("#playGame")

  var $name = $()

  console.log(playerOne)

  $button.on("click", function(){
    $form.show();
  });

  $play.on("click", function(){
    playerOne.name = $nameInput.val();
    $form.hide();
    alert("Hello, " + playerOne.name);
    console.log(playerOne);
  });

  








});
