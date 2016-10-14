$(document).ready(function(){
  console.log("this works");

  var playerOne = { // this could also be an array?
    name: "",
    score: 0,
  };

  var wordToGuess = ["hangman"];
  var word = [];

  var mainWord = "hangman";

  var $letterGuess = $("#letterGuess");

  var $gameSpace = $("#gameSpace");

  var $button = $("button");

  var $nameInput = $("#nameInput");

  var $form = $("form");

  var $play = $("#playGame");

  var currentWord = $("#mainWord");

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
    alert("Hello, " + playerOne.name + ". You are Player 1.");
    console.log(playerOne);
    wordToGuess = prompt("Enter a word for Player 2 to guess.");
    console.log(wordToGuess);
    word = wordToGuess.split("");
    console.log(word);
    $gameSpace.show();
    $.each(word, function(index, value){
      $("<div />", {
        'text': value,
        'class': "hiddenLetter"
      }).appendTo("#mainWord");
    });
    console.log();
  });

//select a word

//

//on enter, match input with each letter of mainWord
  $letterGuess.keypress(function(evt){
    var $guess = $letterGuess.val();

    if (evt.which == 13){
      evt.preventDefault();
      console.log($guess);

      if ($letterGuess.val().length > 1){
        alert("Please enter one letter at a time!")
      } else {
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

          if (letters == $guess){
            alert($guess + " is a good guess")
          };

        };
        console.log($guess);
      }

    };
  });


//iterate through each letter of mainWord and if #letterGuess val = _____, ; else alert("nope, try again")












});
