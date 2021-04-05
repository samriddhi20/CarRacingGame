class Form{
    constructor(){
        this.input=createInput("name")
       this.button=createButton("play")
       this.greeting=createElement("h2")
       this.reset=createButton("reset")
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
       
        this.input.position(displayWidth/2,displayHeight/2-100)
       this. button.position(displayWidth/2,displayHeight/2-20)
       this.reset.position(displayWidth-100,50)
       this.button.mousePressed( ()=>{
        this.input.hide()
        this.button.hide()
        var name=this.input.value()
        player.name=name
        playerCount+=1
        player.index=playerCount
        player.updateCount(playerCount)
        player.update()
        this.greeting.html("Hello "+player.name)
        this.greeting.position(displayWidth/2-50,displayHeight/2-50)
        })
        this.reset.mousePressed(()=>{
         Player.resetPlayerInfo()   
        })
    }
}