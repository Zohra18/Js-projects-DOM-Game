//VARIABLES

//players
var playerOne = document.getElementById('player1');
var playerTwo = document.getElementById('player2');
var actualPlayer = true;

//scores total
var scoreTotalPlayerOne = document.getElementById('scoretotal1');
var scoreTotalPlayerTwo = document.getElementById('scoretotal2');

//scores current
var scoreCurrentOne = document.getElementById('score1');
var scoreCurrentTwo = document.getElementById('score2');

//buttons
var rollDice = document.getElementById('rolldice');
var holdScore = document.getElementById('hold');

//dices
var diceOne = document.getElementById('dice1').value;
var diceTwo = document.getElementById('dice2').value;

//scores
var scoreDiceOne = document.getElementById('score1');
var scoreDiceTwo = document.getElementById('score2');

//dices' faces values
var diceFace1 = 1;
var diceFace2 = 2;
var diceFace3 = 3;
var diceFace4 = 4;
var diceFace5 = 5;
var diceFace6 = 6;

//FUNCTIONS

//1st dice's faces
function replacingImage1(){
  if(diceFace1 == 1){
    document.getElementById('image1').src="images/dice-1.png"
  }
  else if(diceFace2 == 2){
    document.getElementById('image1').src="images/dice-2.png"
  }
  else if(diceFace3 == 3){
    document.getElementById('image1').src="images/dice-3.png"
  }
  else if(diceFace4 == 4){
    document.getElementById('image1').src="images/dice-4.png"
  }
  else if(diceFace5 == 5){
    document.getElementById('image1').src="images/dice-5.png"
  }
  else{
    document.getElementById('image1').src="images/dice-6.png"
  }
}

//2nd dice's faces
function replacingImage2(){
  if(diceFace1){
    document.getElementById('image2').src="images/dice-1.png"
  }
  else if(diceFace2){
    document.getElementById('image2').src="images/dice-2.png"
  }
  else if(diceFace3){
    document.getElementById('image2').src="images/dice-3.png"
  }
  else if(diceFace4){
    document.getElementById('image2').src="images/dice-4.png"
  }
  else if(diceFace5){
    document.getElementById('image2').src="images/dice-5.png"
  }
  else{
    document.getElementById('image2').src="images/dice-6.png"
  }
}



function additionDices(){
    scoreDiceOne + scoreDiceTwo;
  }

//functions math.random
function randomRoll(){
  return Math.floor(Math.random() * Math.floor(max));
}

//functions roll
rollDice.onclick = function(){
  if(playerOne = actualPlayer){
    return replacingImage1() && replacingImage2();
    //return scoreCurrentOne.innerHTML = 5;
  }
  else {
    return scoreCurrentTwo.innerHTML = 0;
  }
}
//function holdscore
holdScore.onclick = function () {
  scoreTotalPlayerOne = [];
  scoreTotalPlayerTwo = [];
  return playerOne = actualPlayer ? scoreTotalPlayerOne.push(): scoreTotalPlayerTwo.push();
}

//function de condition de victoire
function victoryCondition() {
  return scoreTotalPlayerOne === 100 ? playerOne = "Winner" : playerTwo = "Winner";
}

//function de switch de player
function switchPlayer() {
  if ((rollDice == 1) || (holdScore == true)) {
    
  }
}



/*rollDice.onclick = function () {
  return scoreCurrentOne.innerHTML = 5;
}*/
