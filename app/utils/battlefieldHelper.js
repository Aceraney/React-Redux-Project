export function getBFStats(platform, username){

	//calls the bf4stats api and returns the data to the user reducer which then updates the store.
	//currently called synchrinously. Need to look into an asynchrinous call. Returns an alert window if the user cannot be found


var params = {
	plat: platform,
	displayName: username
}

var request = new XMLHttpRequest();
var status;



request.open('GET', 'https://api.bf4stats.com/api/playerInfo?plat=pc&name='+params.displayName+'&output=json', false);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    
    console.log('Headers:', this.getAllResponseHeaders());
    status=this.status;
    if (status===404){
    	window.alert("The player was not found")
    }
    
   
    
  }
};






request.send();

//removes unused API data by combining the stats and the player sections and not saving the rest of the data such as weapons and vechicle data.
var data = request.responseText;
data =JSON.parse(data);
var stats=data.stats;
var player= data.player;
var combo =Object.assign(player,stats)

return combo;



}