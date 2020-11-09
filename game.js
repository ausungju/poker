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
	if(a == /♠.♠.♠.♠.♠./){
		return "flush";
	}
	return "flush";
};
var deck = (new Deck()).shuffle();
// 카드 덱에서 5장을 나누어준다

var nua = "♠1♠2♠3♠4♠5";
console.log(categoriesTest(nua));​
