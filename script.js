$(document).ready(function(){
  console.log("this works");

  var playerOne = { // this could also be an array?
    name: "",
    score: 0,
  };

  var playerTwo = {
    name: "",
    score: 0,
    wordToGuess: [""],
    word: [],
    guessedWord: [],
    incorrectLetters: []
  }

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
  // make sure to get all commented out code out of production
  // var hello = function(){
  //   playerTwo.name = $nameInput.val();
  //   alert("Your turn, " + playerTwo.name + ". You are Player 2.");
  //   console.log(playerTwo);
  //   playerTwo.wordToGuess = prompt("Enter a word for Player 1 to guess.");
  //   if (playerTwo.wordToGuess != ""){
  //     console.log(playerTwo.wordToGuess);
  //     word = playerTwo.wordToGuess.split("");
  //     console.log(playerTwo.word);
  //     $gameSpace.show();
  //     $("span").text('');
  //     $.each(word, function(index, value){
  //       $("<div />", {
  //         'html': "<span>" + value + "</span>",
  //         'class': "hiddenLetter"
  //       }).appendTo("#mainWord");
  //     });
  //   };
  // };

  var checkWin = function(){
    if (word.length == guessedWord.length){
      alert("You win!");
    } else {
      checkLose();
    };
  };

  var checkLose = function(){
    if (incorrectLetters.length >= 9){
      // $("#mainScreen").prepend("<div>").addClass("gameOver");
      // $("body").css(background: url(6913394-water-bubbles.jpg));
      alert("You lose!");
    };
  };

  $("#playerTwoScore").text(incorrectLetters.length);
  // $("#playerTwoScore").text(incorrectLetters.length)


  console.log(playerOne);
  console.log(guessedWord);

  // shows player form
  $button.on("click", function(){
    $form.show();
  });

  //gets player's name and greets, logs in obj
  $form.on("submit", function(evt){
    evt.preventDefault();
    if ( $nameInput.val() ){
      playerOne.name = $nameInput.val();
    };
    $form.hide();
    alert("Hello, " + playerOne.name + ". You are Player 1.");
    // once you've eliminated the need for a console.log() make sure you remove them, they can start clouding your console and you could start to lose track of what you're logging
    console.log(playerOne);
    wordToGuess = prompt("Enter a word for Player 2 to guess.");
    if (wordToGuess != ""){
      console.log(wordToGuess);
      word = wordToGuess.split("");
      console.log(word);
      $gameSpace.show();
      $.each(word, function(index, value){
        // oh thats cool, i didn't know you could do that
        $("<div />", {
          'html': "<span>" + value + "</span>",
          'class': "hiddenLetter"
        }).appendTo("#mainWord");
      });
    };
    console.log();
  });
  //on enter, match input with each letter of mainWord
  // this event listener is pretty unwieldy, i would recommend looking at how we can start to refactor and abstract some of this functionality
  $letterGuess.keypress(function(evt){
    var $guess = $letterGuess.val();
    // make this a more semantic variable name
    var x = "false"
    if ($guess != ""){
      if (evt.which == 13){
        evt.preventDefault();
        console.log("Your guess: " + $guess);
        console.log("Hidden word: " + word);
        // indexOfMatch = $.inArray($guess, word);
        var indexesOfMatches = [];
        // with this .filter your using it similarly to the .forEach, filter returns a subset for anything that returns true from the callback
        word.filter(function(value, index){
          if (value == $guess){
            indexesOfMatches.push(index);
          };
        });
        console.log(indexesOfMatches);



        console.log(indexesOfMatches);
        if(indexesOfMatches.length>=1){
          for (i=0; i<indexesOfMatches.length; i++){
            var matchedLetter = word[ indexesOfMatches[i] ];

            guessedWord.push(matchedLetter);

            $("span").eq(indexesOfMatches[i]).show();
          };
          // console.log(word[i]);
          console.log("presplice", guessedWord, "idx of match", indexesOfMatches);
          // guessedWord.splice(indexOfMatch, 0, matchedLetter); // *

          console.log("post splice", guessedWord);
          console.log(indexesOfMatches);
          $letterGuess.val("");
          x="true";
          checkWin();
        };
        if (x == "false") {
          console.log("wrong");
          $("#hangman div.emptyTank:last").removeClass("emptyTank").addClass("filledTank");
          incorrectLetters.push($guess + ", ");
          $letterGuess.val("");
          console.log(incorrectLetters);
          $("p.incorrect").html(incorrectLetters);
          $("#playerOneScore").text(incorrectLetters.length + " feet of water");
        };
      };
      // checkWin();
      checkLose();
    };
  });

  // if (checkLose = true){
  //   hello();
  // } else if (checkWin = true) {
  //   hello();
  // };
  console.log(word);
  console.log(guessedWord);

  // IF GUESSED WORD ARRAY = WORD ARRAY












});
