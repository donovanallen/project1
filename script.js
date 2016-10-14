$(document).ready(function(){
  console.log("this works");

  var playerOne = {
    name: "",
    score: 0,
  }; // this could also be an array?

  var mainWord = "HANGMAN";

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
  $play.on("click", function(){
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
    if (evt.which == 13){
      evt.preventDefault();
      for (var i=0; i < mainWord.length; i++){
        if ($letterGuess.val() == mainWord.charAt(i)){
          alert("good guess!")
        } else {
          alert ("WRONG!")
        };
        // console.log(c);
      };
      console.log($letterGuess.val());

    };
  });
  //
  // $letterGuess.keypress(function(evt){
  //   if (evt.which == 13){
  //     evt.preventDefault();
  //   for(var i=0, c=''; c = mainWord.charAt(i); i++)
  //     console.log(i);
  //     console.log(c);
  //
  //   };
  // });


//iterate through each letter of mainWord and if #letterGuess val = _____, ; else alert("nope, try again")












});
