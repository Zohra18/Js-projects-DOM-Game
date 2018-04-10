var newGame = document.getElementById('newgame');
var current = document.getElementById('currentvalue');
var result  = document.querySelectorAll('.result');
var hold     = document.getElementById('hold');
var roll     = document.getElementById('roll');
var img1     = "<img src=./images/dice-1.png>";
var img2     = "<img src=./images/dice-2.png>";
var img3     = "<img src=./images/dice-3.png>";
var img4     = "<img src=./images/dice-4.png>";
var img5     = "<img src=./images/dice-5.png>";
var img6     = "<img src=./images/dice-6.png>";
var des        = document.querySelectorAll('.de')
var imgTab  = [img1, img2, img3, img4, img5, img6];
var de1     = document.getElementById('de1');
var de2     = document.getElementById('de2');
var randomDice1 = Math.floor(Math.random() * 6)+1;
var randomDice2 = Math.floor(Math.random() * 6)+1;


newGame.onclick = function() {
    current.innerHTML = 0;
    result.innerHTML  = 0;
}


roll.onclick = function(){
    conditionDe1();
    conditionDe2();
    //diceCurrentAddition();
    return current.number = randomDice1 + randomDice2;

}



var conditionDe1 = function(){
    randomDice1 = Math.floor(Math.random() * 6)+1;
    if(randomDice1 === 1){
        return de1.innerHTML = imgTab[0]
    }
    if(randomDice1 === 2){
        return de1.innerHTML = imgTab[1]
    }
    if(randomDice1 === 3){
        return de1.innerHTML = imgTab[2]
    }
    if(randomDice1 === 4){
        return de1.innerHTML = imgTab[3]
    }
    if(randomDice1 === 5){
        return de1.innerHTML = imgTab[4]
    }
    if(randomDice1 === 6){
        return de1.innerHTML = imgTab[5]
    }
}

var conditionDe2 = function(){
    randomDice2 = Math.floor(Math.random() * 6)+1;
    if(randomDice2 === 1){
        return de2.innerHTML = imgTab[0]
    }
    if(randomDice2 === 2){
        return de2.innerHTML = imgTab[1]
    }
    if(randomDice2 === 3){
        return de2.innerHTML = imgTab[2]
    }
    if(randomDice2 === 4){
        return de2.innerHTML = imgTab[3]
    }
    if(randomDice2 === 5){
        return de2.innerHTML = imgTab[4]
    }
    if(randomDice2 === 6){
        return de2.innerHTML = imgTab[5]
    }
}

/*function diceCurrentAddition() {
    //var result =  randomDice1 + randomDice2;
    console.log(randomDice2)
    console.log(randomDice1)
        return current.innerHTML = randomDice1 + randomDice2;
    }*/





hold.onclick = function() {}
