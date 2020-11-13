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
				return Card.Suit[this.suit] + Card.Rank[this.rank];
			}
		}
	});
}

Card.Suit = { spade: "♠", dia: "◆", hearts: "♥", club: "♣" };
Card.Rank = {
	Two: "2", Three: "3", Four: "4", Five: "5", Six: "6", Seven: "7",
	Eight: "8", Nine: "9", Ten: "10", Jack: "J", Queen: "Q", King: "K", Ace: "A"
};

function Deck(){
	var cards = this.cards = [];
	for(var s in Card.Suit){
		for(var r in Card.Rank){
			cards.push(new Card(s,r));
		}
	}
}

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
			i,thisDeck.push(u_Card[i]);
			}
	}
};
