var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

if(randomNumber1==1){
  document.querySelector(".firstDice").setAttribute("src", "images/dice1.png");
}
else if(randomNumber1==2){
  document.querySelector(".firstDice").setAttribute("src", "images/dice2.png");
}
else if(randomNumber1==3){
 document.querySelector(".firstDice").setAttribute("src", "images/dice3.png");
}
else if(randomNumber1==4){
  document.querySelector(".firstDice").setAttribute("src", "images/dice4.png");
}
else if(randomNumber1==5){
  document.querySelector(".firstDice").setAttribute("src", "images/dice5.png");
}
else if(randomNumber1==6){
 document.querySelector(".firstDice").setAttribute("src", "images/dice6.png");
}

var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

if(randomNumber2==1){
  document.querySelector(".secondDice").setAttribute("src", "images/dice1.png");
}
else if(randomNumber2==2){
  document.querySelector(".secondDice").setAttribute("src", "images/dice2.png");
}
else if(randomNumber2==3){
  document.querySelector(".secondDice").setAttribute("src", "images/dice3.png");
}
else if(randomNumber2==4){
  document.querySelector(".secondDice").setAttribute("src", "images/dice4.png");
}
else if(randomNumber2==5){
  document.querySelector(".secondDice").setAttribute("src", "images/dice5.png");
}
else if(randomNumber2==6){
  document.querySelector(".secondDice").setAttribute("src", "images/dice6.png");
}

if(randomNumber1>randomNumber2){
    document.querySelector(".heading").innerText="Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector(".heading").innerText="Player 2 Wins";
}
else{
    document.querySelector(".heading").innerText="Draw!";
}
