$(document).ready(function(){
  console.log("this works");

  var playerOne = {
    name: "",
    score: 0,
  }; // this could also be an array?

  var mainWord = "hangman";

  var $letterGuess = $("#letterGuess");



  var $button = $("button");

  var $nameInput = $("#nameInput");

  var $form = $("form");

  var $play = $("#playGame");

  console.log(playerOne);
  console.log(mainWord);

// shows player form
  $button.on("click", function(){
    $form.show();
  });

//gets player's name and greets, logs in obj
  $play.on("click", function(evt){
    evt.preventDefault();
    playerOne.name = $nameInput.val();
    $form.hide();
    alert("Hello, " + playerOne.name);
    console.log(playerOne);
  });

//get value of #letterGuess on submit
// .keypress(function(event) {
//   if (event.which == 13) {
//       event.preventDefault();
//       $("form").submit();
//   }
// });

  $letterGuess.keypress(function(evt){
    var $guess = $letterGuess.val();
    if (evt.which == 13){
      evt.preventDefault();
      console.log($guess);
      if ($letterGuess.val().length > 1){
        alert("Please enter one letter at a time!")
      } else {
        // var guess = $letterGuess.val();
        for (var i=0; i < mainWord.length; i++){
          var letters = mainWord.charAt(i);
          console.log(letters);
          var $guess = $letterGuess.val();
          console.log($guess);
          if (letters == $guess){
            console.log("good guess!");
          } else if (letters != $guess) {
            console.log("WRONG!")
          };
        };
        console.log($letterGuess.val());
      }

    };
  });


//iterate through each letter of mainWord and if #letterGuess val = _____, ; else alert("nope, try again")












});
