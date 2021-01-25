var fire, betty, jughead, blackHood, riddle1, riddle2, riddle3, serpent, blackHoodCaught;
var fireImg, riddle1Img, riddle2Img, riddle3Img, serpentImg, blackHoodCaughtImg;
var randomNumber, answer, submit;
var gameState;

function preload(){
  fireImg = loadImage("fire.png");
  riddle1Img = loadImage("riddle1.png");
  riddle2Img = loadImage("riddle2.png");
  riddle3Img = loadImage("riddle3.jpg");
  serpentImg = loadImage("theSerpents.jpg");
  blackHoodCaughtImg = loadImage("blackHoodCaught.png");
  
}

function setup() {
  createCanvas(800,800);
   randomNumber = Math.round(random(1,3))
   answer = createInput("Enter The Answer Here in Small Letters");
   submit = createButton("Click to Submit");
   gameState = "start";
}


function draw() {
  background("yellow"); 
  

  if(gameState === "win"){
    image(blackHoodCaughtImg, 300, 300);
    answer.hide();
    submit.hide();
  }

  if(gameState === "start"){
    answer.position(500, 600);
  submit.position(500, 700);

    if(randomNumber === 1){
      image(riddle1Img, 50, 100);
    }
    else if(randomNumber === 2){
      image(riddle2Img, 50, 100);
    }
    else{
      image(riddle3Img, 50, 100);
    }
    submit.mousePressed(function(){
      if(randomNumber === 1 ){
        if(answer.value() === "silence"){
        gameState = "win";
        }
      }
      if(randomNumber === 2 ){
        if(answer.value() === "candle"){
        gameState = "win";
        }
      }
      if(randomNumber === 3 ){
        if(answer.value() === "keyboard"){
        gameState = "win";
        }
      }
    })

  }

 
  
  drawSprites();
}