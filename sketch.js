
var database;
var gameState=0
var playerCount;
var form;
var game;
var player;
var allPlayers
var car1,car2,car3,car4;
var cars
var car1img,car2img,car3img,car4img,trackimg;
function preload(){
    car1img=loadImage("images/car1.png")
    car2img=loadImage("images/car2.png")
    car3img=loadImage("images/car3.png")
    car4img=loadImage("images/car4.png")
    trackimg=loadImage("images/track.jpg")
}
function setup(){
    createCanvas(displayWidth-100,displayHeight-150);
    database=firebase.database();
   game=new Game( )
       game.getState()
       game.start()
  
}

function draw(){
    background("white");
   if(playerCount===4){
       game.updateState(1)
   }
   if(gameState===1){
       game.play()
   }
}

