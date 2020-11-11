  
function game(seed,playerList){
	var seed = this.seed = seed;
	this.playerList = playerList;
	this.stake = 0;
};

game.prototype.oring = function(){
	for(var p in this.playerList){
		if(p.money == 0){
			p.numOfDie++;
		}
	}
};

var categoriesTest = function(a){
	//var handDeck = a.thisDeck;
	//var handCard = "";
	//for(var i in handDeck){
	//	handCard += i.symbol;
	//}
	var sum = ""
	var getDeck = a;
	getDeck.sort();
	var getString =[];
	var getInt = []
	
	for(var i = 0; i < getDeck.length; i++){
		getInt.push(getDeck[i].substr(1));
		getString.push(getDeck[i].substr(0,1));
	}

	console.log(getString);
	if((/1,2,3,4,5|2,3,4,5,6|3,4,5,6,7|4,5,6,7,8|5,6,7,8,9|,6,7,8,9,10/).test(getInt.join()) == true){
		sum += "straight";
	}
	if((/10,A,K,Q,j/).test(getInt.join()) == true){
		sum += "mountain";
	}if((/◆,◆,◆,◆,◆|♣,♣,♣,♣,♣/).test(getString) == true){
		sum += "flush";
	}
	return sum;
};
var deck = (new Deck()).shuffle();
// 카드 덱에서 5장을 나누어준다

var nua = ["◆6","◆7","◆8","◆9","◆10"];
console.log(nua.sort());
console.log(categoriesTest(nua));






