class Game{
constructor(){

}
getState(){
var gameStateref=database.ref("gamestate")
gameStateref.on("value",function(data){
gameState=data.val()
})
}
updateState(state){
    database.ref("/").update({
        gamestate:state
    })
}
start(){
    console.log (gameState)
    if(gameState===0){
        player=new Player()
        player.getplayercount()
        form=new Form()
        form.display()
car1=createSprite(100,200)
car1.addImage(car1img)
car2=createSprite(300,200)
car2.addImage(car2img)
car3=createSprite(500,200)
car3.addImage(car3img)
car4=createSprite(700,200)
car4.addImage(car4img)
cars=[car1,car2,car3,car4]
    }
}
play(){
    form.hide()
    //text("gameStart",120,100)
    Player.getPlayersInfo()
    image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
    var displayPosition=130
    var x=100
    var y=0
    var index=0
    for(var plr in allPlayers){
        x=x+200
        y=displayHeight-150-allPlayers[plr].distance
        cars[index].x=x
        cars[index].y=y
        index=index+1
        if(plr==="player"+player.index){
            
        }
        else{
            fill ("black")
        } 
    displayPosition+=20
    if(index===player.index){
        cars[index-1].shapeColor="red"
        camera.position.x=displayWidth/2
        camera.position.y=cars[index-1].y
        fill ("red");
    ellipse(x,y,80,80)
    }
    //text (allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
    if(keyIsDown(UP_ARROW) && player.index!=null){
player.distance+=50
player.update()
    }
    drawSprites();
    }  
}
}