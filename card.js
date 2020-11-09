function Card(suit, rank){
	this.suit = suit;
	this.rank = rank;
	
	Object.defineProperties(this,{
		color: {
			get : function(){
				switch(this.suit){
					case "club": case "spade": return "black";
					case "dia": case "hearts": return "red";
				}
			}
		},
		symbol: {
			get: function(){
				return Card.suitList[this.suit] + Card.rankList[this.rank];
			}
		}
	});
}

Card.suitList = { club: "♣", spade: "♠", dia: "◆", hearts: "♥" };
Card.rankList = {
	Two: "2", Three: "3", Four: "4", Five: "5", Six: "6", Seven: "7",
	Eight: "8", Nine: "9", Ten: "10", Jack: "J", Queen: "Q", King: "K", Ace: "A"
};

function Deck(){
	var cards = this.cards = [];
	var u_card = 0;
	for(var i in Card.suitList){
		for(var j in Card.rankList){
			cards.push(new card(i,j);
		}
	} 
};

Deck.prototype.shuffle = function(){
	var a = this.cards;
	var l =a.length, n , temp;
	
	while(l){
		n =Math.floor(Math.random()*l--);
		temp = a[l];
		a[l] = a[n];
		a[n] = temp;
	}
	return this;
};

Deck.prototype.deal = function(playerList,n){
	var a= tihs.u_Card;
	for(var i = a; i < a+n; i++){
		for(var j in game.playerList){
			i,thisDeck.push(u_Card[i];
	}
};
