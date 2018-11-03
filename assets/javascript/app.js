
var timer = 60;
var intervalID;
var correct = 0;
var incorrect = 10;

function run() {
  clearInterval(intervalID);
  intervalID = setInterval(decrement, 1000);
}
// FUNCTIONS - HAD A HARD TIME WITH THIS AND NEEDED TO CROSS REFERENCE OUR ACTIVITIES AND PLENTY OF STACK OVERFLOWS
function decrement() {
  timer--;
  $("#timer").html(" " + timer + " seconds");
  if (timer === 0) {
    stop();
    $(".trivia-game").hide();
    $(".score").show();
  }
}

function stop() {
  clearInterval(intervalID);
  timer = 60;
  correct = 0;
  incorrect = 10;
  // $("input") = empty();
}

function checkAnswers() {
  for (var i = 0; i < $("input:checked").length; i++) {
    if ($("input:checked").val("correct")) {
      correct++;
      incorrect--;
    } 
   
    $("#correct").text("You answered " + correct + " questions correctly");
    $("#incorrect").text("You answered " + incorrect + " questions incorrectly");
  }
}

$(document).ready(function() {
  console.log("document is ready");

  $(".trivia-game").hide();
  $(".score").hide();

  $(".start-game").on("click", function() {
    // console.log("start button has been clicked");
    $(".welcome").hide();
    $(".trivia-game").show();
    run();
    decrement();
  })

  $(".submit").on("click", function() {
    stop();
    $(".trivia-game").hide();
    $(".score").show();
    checkAnswers();
})

  $(".replay").on("click", function() {
    // console.log("replay button has been clicked");

    $(".welcome").show();
    $(".score").hide();
    run();
  })

})