var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userclickedpattern = [];
var level = 0;
var started = false;

$(document).keypress(function(){

  if(!started){
    $("#title").text("Level " + level);
    nextsequence();
    started = true;
  }
});

$(".btn").click(function(){
  
  var userColour = $(this).attr("id");
  userclickedpattern.push(userColour);
  playsound(userColour);
  animatepress(userColour);

  checkanswer(userclickedpattern.length-1);
});

function checkanswer(currentLevel){

  if(gamePattern[currentLevel] === userclickedpattern[currentLevel]){
   if(userclickedpattern.length === gamePattern.length){
     setTimeout(function(){
      nextsequence();
     },1000);

    }
    }
    else{
      playsound("wrong");
      $("body").addClass("game-over");
      $("#title").text("Press K To Restart 🤦‍♂️🤦‍♂️");

      setTimeout(function(){
        $("body").removeClass("game-over");
      },200);

      startover();

    }
   }

function nextsequence(){

  userclickedpattern = [];
  level++;
  $("#title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColour = buttonColours[randomNumber];
  gamePattern.push(randomColour);

  $("#"+ randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomColour);

}
 function animatepress(currentColor){

  $("#" + currentColor).addClass("pressed");
   setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },100);
 }

 
 function playsound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
 }

 function startover(){

  level = 0;
  gamePattern = [];
  started = false;

 }