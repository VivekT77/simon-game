var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userclickedpattern = [];
var level = 0;
var started = false;

$(document).keypress(function(){

  if(!started){
    $("#title").text("level " + level);
    nextsequence();
    started = true;
  }
});

$(".btn").onclick(function(){
  
  var usercolour = $(this).attr("id");
  userclickedpattern.push(usercolour);
  playsound(usercolour);
  animatepress(usercolour);

});

function nextsequence(){

  $("#title").text("level " + level);
  level++;
  var randomNumber = Math.floor(Math.random()*4);
  var randomColour = buttonColours[randomNumber];
  gamePattern.push(randomColour);

  $("#"+randomColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomColour);

}
 function playsound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
 }

 function animatepress(currentColour){

  $("#" +currentColour).addclass("pressed");
   setTimeout(function(){
    $("#" +currentColour).removeclass("pressed");
  },100);
 }