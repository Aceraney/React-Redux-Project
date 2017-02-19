export function getBFStats(platform, username){



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


var data = request.responseText;
data =JSON.parse(data);
var stats=data.stats;
var player= data.player;
console.log('Status before return:', status);
var combo =Object.assign(player,stats)

return combo;



}