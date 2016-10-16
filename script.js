$(document).ready(function(){
  console.log("this works");

  var playerOne = { // this could also be an array?
    name: "",
    score: 0,
  };

  var wordToGuess = [""];
  var word = [];
  var guessedWord = [];

  var $letterGuess = $("#letterGuess");

  var $gameSpace = $("#gameSpace");

  var $button = $("button");

  var $nameInput = $("#nameInput");

  var $form = $("form");

  var $play = $("#playGame");

  var currentWord = $("#mainWord");


  console.log(playerOne);
  console.log(guessedWord);

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
    if (wordToGuess != ""){
      console.log(wordToGuess);
      word = wordToGuess.split("");
      console.log(word);
      $gameSpace.show();
      // function showGuessField(){
      //   for (var i=0; i < guessedWord.length; i++){
      //     var guessedLetter = $("#guessedWord");
      //     var correctLetter = guessedWord.text()
      //     $("#mainWord").appendChild(correctLetter);
      //   }
      // }
      $.each(word, function(index, value){
        $("<div />", {
          'text': "_",
          'class': "hiddenLetter"
        }).appendTo("#mainWord");
      });
    };
    console.log();
  });

//on enter, match input with each letter of mainWord
$letterGuess.keypress(function(evt){
    var $guess = $letterGuess.val();

    if (evt.which == 13){
      evt.preventDefault();
      console.log($guess);
      console.log(word);
      var indexOfMatch = $.inArray($guess, word);

      for (var i=0; i < word.length; i++){
          // var $guess = $letterGuess.val();
          if (indexOfMatch >= 0){
            var matchedLetter = word[indexOfMatch];
            guessedWord.splice(indexOfMatch, 0, matchedLetter)
            console.log("match!");
            console.log("Your guess: " + $guess);
            console.log("Hidden word: " + word);
            console.log("Your correct word so far: " + guessedWord);
            console.log("correct letter guess: " +  $.inArray($guess, word));
            console.log(guessedWord);
            $(".hiddenLetter").eq(indexOfMatch).replaceWith(matchedLetter);
            $letterGuess.val("");
            return matchedLetter;
            } else {
            console.log("wrong")
            $letterGuess.val("");
            };
          // else if (word[i] != $guess) {
          //   alert("try again");
          //   $letterGuess.val("");
          //   console.log($guess);
          //   console.log(word);
          // };
      };
    };
});


// check if user guess array matches each letter of word array; if yes, add user guess value at same index of word that matches user guess, check if all user guess array = word array, if yes WIN, if no, do nothing (clear input box)












});
