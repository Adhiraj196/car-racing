class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:name,
      distance:this.distance
    });
  }
  static GetPlayerInfo(){
  var PlayerInfo = database.ref('players');
  PlayerInfo.on("value",(data) => {
  allPlayers = data.val()
  } )
  }
}
