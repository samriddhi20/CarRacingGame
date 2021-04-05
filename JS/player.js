class Player{
    constructor()
    {
this.index=null
this.distance=0
this.name=null
    }
    getplayercount(){
       var playercountref =database.ref("playercount")
        playercountref.on("value",function(data){
        playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
            playercount:count
        })
    }
    update(){
var playerIndex="players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
   static getPlayersInfo(){
        var getPlayerinfo=database.ref("players")
        getPlayerinfo.on("value",(data)=>{
            allPlayers=data.val()
        })
    }
static resetPlayerInfo(){
database.ref("/").set({
    gamestate:0,
    playercount:0
})
}
}