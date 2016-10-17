$(document).ready(function(){
  console.log("this works");

  var playerOne = { // this could also be an array?
    name: "",
    score: 0,
    // incorrectLetters: []
  };

  var wordToGuess = [""];
  var word = [];
  var guessedWord = [];
  var incorrectLetters = [];

  var $letterGuess = $("#letterGuess");

  var $gameSpace = $("#gameSpace");

  var $button = $("button");

  var $nameInput = $("#nameInput");

  var $form = $("form");

  var $play = $("#playGame");

  var currentWord = $("#mainWord");

  var $incorrectField = $("p.incorrect");

  var wrong = function(){
    console.log("wrong. try again.");
    $("#hangman div.emptyTank:last").addClass("filledTank");
    $("p.incorrect").html(incorrectLetters)
  };

  var checkWin = function(){
    console.log("hello");
    if ($("span").val()){
      console.log($("span").val());
      alert("You win!")
    }
  };

  var checkLose = function(){
    if (incorrectLetters.length >= 6){
      alert("You lose!")
    }
  };


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
      $.each(word, function(index, value){
        $("<div />", {
          'html': "<span>" + value + "</span>",
          'class': "hiddenLetter"
        }).appendTo("#mainWord");
      });
    };
    console.log();
  });

//on enter, match input with each letter of mainWord
$letterGuess.keypress(function(evt){
    var $guess = $letterGuess.val();
    var x = "false"

    if (evt.which == 13){
      evt.preventDefault();
      console.log("Your guess: " + $guess);
      console.log("Hidden word: " + word);
      var indexOfMatch = $.inArray($guess, word);
      if (indexOfMatch >= 0) {
        var matchedLetter = word[indexOfMatch];
        guessedWord.splice(indexOfMatch, 0, matchedLetter);
        $("span").eq(indexOfMatch).show();
        console.log(indexOfMatch);
        $letterGuess.val("");
        x="true";
      };
      if (x == "false") {
          console.log("wrong");
          $("#hangman div.emptyTank:last").removeClass("emptyTank").addClass("filledTank");
          incorrectLetters.push($guess + ", "); // fill one tank div
          // display incorrect guesses on screen
          $letterGuess.val("");
          console.log(incorrectLetters);
          $("p.incorrect").html(incorrectLetters);
        };
    };
    checkWin();
    checkLose();
});


// check if user guess array matches each letter of word array; if yes, add user guess value at same index of word that matches user guess, check if all user guess array = word array, if yes WIN, if no, do nothing (clear input box)












});
