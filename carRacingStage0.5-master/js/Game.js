class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var PlayerCountRef = await database.ref('playerCount').once ("value")
      if (PlayerCountRef.exists()){
      playerCount = PlayerCountRef.val()
      player.getCount();
      }
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(32);
    text ("Game Starts", 100,100)
    player.GetPlayerInfo();
    if (allPlayers!== undefined ){
    var DisplayPosition = 130;
    for(var plr in allPlayers){
      if (plr === "player" + player.index){
      fill("red")}
      else{
        fill("black")
      }
    DisplayPosition += 20
    text (allPlayers[plr].name +":" + allPlayers[plr].distance ,130,DisplayPosition)
    }
  }
  if (keyIsDown ( UP_ARROW ) && player.index !== null){
     player.distance += 50
     player.update();
  }
} 
}