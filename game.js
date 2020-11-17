  
function game(seed,playerList){
	var seed = this.seed = seed;
	this.playerList = playerList;
	this.stake = 0;
};


var categoriesTest = function(a){
	var suitList = ["♠", "◆", "♥", "♣"];
	var rankList = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"]
	var result = "";
	var sum = [];
	var getDeck = a;
	var getSwap =[];

	for(var i = 0; i < getDeck.length; i++){
		getSwap.push(getDeck[i].substr(1)+getDeck[i].substr(0,1));
	}getSwap.sort();getDeck.sort();
	

	//감별
	var getRem = function(reg,get,list){
		var matchingCard = get.join("").match(reg);
		for(var i in list){
			for(var j = 0; j <= matchingCard[0].length; j++){
					if(matchingCard[0][j] == list[i]) {
						return list[i];
					}
			}
		}
	}
	
	//페어 카드
	var checkCard = function(m = 4,n =["0"]){
		var inSum = "";
		var k = 0;
		var s = "";
		var n = this.n = n;
		var m = this.m =m;
		
		var getSpot = function(){
			switch(m){
				case 4: return "Four";
				case 3: return "Three";
				case 2: return "Two";
				case 1: return "one";
			}
		}	
		
		for(var i in rankList){
			var a = 0;
			for(var j in n){
				if(n[j] == rankList[i]) a++;
			}
			if(a != 0) continue;
			
			console.log
			var reg = new RegExp( (rankList[i]+".").repeat(m) );
			if(reg.test(getSwap.join("")) ==true){
				inSum = getRem(reg,getSwap,suitList);
				k++;
				if(m > 2){
					n.push(rankList[i]);
					inSum += (rankList[i]+getSpot());
					sum.push(inSum);
					m--;
					checkCard(m,n);
					break;
				}else if(m == 2){
					n.push(rankList[i]);	
					inSum += (rankList[i]+getSpot());
					sum.push(inSum);
					checkCard(m,n);
				}else if(m == 1){
					inSum += (rankList[i]+getSpot());
					sum.push(inSum);
					return;
				}else return;
			}
		}
		if(k == 0) {
			--m;
			if(m > 0) checkCard(m,n);
		}
	}
	
	//마운틴
	if((/10.+A.J.K.Q./).test(getSwap.join("")) == true){
		var inSum = "";
		for(var i in getSwap){
			if(getSwap[i][0] == "A") inSum = getSwap[i][1];
		}
		inSum += " Mountain";
		sum.push(inSum);
	}

	//백스트레이트
	else if((/2.3.4.5.+A./).test(getSwap.join("")) == true){
		var inSum ="";
		for(var i in getSwap){
			if(getSwap[i][0] == "A") {
				inSum = getSwap[i][1];
			}
		}
		inSum += " Backstraight";
		sum.push(inSum);
	}

	//스트레이트
	else { 
		for(var i = 1; i<9; i++){
			var inSum = "";
			
			if(i == 1){
				var reg = new RegExp(rankList[i+3]+".+"+rankList[i+4]+".+"+rankList[i+2]+".+"+rankList[i+1]+".+"+rankList[i]);
			}else if(i == 2){
				var reg = new RegExp(rankList[i+2]+".+"+rankList[i+4]+".+"+rankList[i+3]+".+"+rankList[i+1]+".+"+rankList[i]);
			}else if(i == 3){
				var reg = new RegExp(rankList[i+1]+".+"+rankList[i+4]+".+"+rankList[i+3]+".+"+rankList[i+2]+".+"+rankList[i]);
			}else if(i == 4){
				var reg = new RegExp(rankList[i]+".+"+rankList[i+4]+".+"+rankList[i+3]+".+"+rankList[i+2]+".+"+rankList[i+1]);
			}else var reg = new RegExp(rankList[i+4]+".+"+rankList[i+3]+".+"+rankList[i+2]+".+"+rankList[i+1]+".+"+rankList[i]);
			if(reg.test(getSwap.join("")) == true){
				inSum = getRem(reg,getSwap,suitList) + rankList[i] + "Straight";
				sum.push(inSum);
				break;
			}
		}
	}
	
	//플러쉬
	for(var i in suitList){
		var inSum = "";
		var reg = new RegExp( (suitList[i] + ".+").repeat(5) );
		if(reg.test(getDeck.join("")) == true){
			inSum = suitList[i] + getRem(reg,getDeck,rankList) + "Flush";
			sum.push(inSum);
		}
	}
	
	checkCard();

	if(/.+Straight.+flush/.test(sum)){
		if(sum[0][1] == "1"){
		result = sum[0][0] + sum[0][1] + sum[0][2]+ " Straight Flush";
		}else result = sum[0][0] + sum[0][1] + " Straight Flush";
	}else if(/.+Backstraight.+flush/.test(sum)){
		result = sum[0][0] + " Backstraight Flush";
	}else if(/.+mountain.+flush/.test(sum)){
		result = sum[1][0] + " Royal Straight Flush";
	}else if(/.+Flush/.test(sum)){
		result = sum[1];
	}else if(/.+Mountain/.test(sum)){
		result = sum[0];
	}else if(/.+Backstraight/.test(sum)){
		result = sum[0];
	}else if(/.+Straight/.test(sum)){
		if(sum[0][1] == "1"){
		result = sum[0][0] + sum[0][1] + sum[0][2]+ " Straight";
		}else result = sum[0][0] + sum[0][1] + " Straight";
	}else if(/.+Four/.test(sum)){
		if(sum[0][1] == "1"){
		result = sum[0][0] + sum[0][1] + sum[0][2]+ " Four of a Kind";
		}else result = sum[0][0] + sum[0][1] + " Four of a Kind";
	}else if(/.+Three.+Two/.test(sum)){
		if(sum[0][1] == "1"){
		result = sum[0][0] + sum[0][1] + sum[0][2] + " " + sum[1][0] + sum[1][1] + " Full House";
		}else if(sum[1][1] =="1"){
			result = sum[0][0] + sum[0][1] + " " + sum[1][0] + sum[1][1] + sum[1][2]+ " Full House";
		}else result = sum[0][0] + sum[0][1] + " " + sum[1][0] + sum[1][1] + " Full House";
	}else if(/.+Three/.test(sum)){
		if(sum[0][1] == "1"){
		result = sum[0][0] + sum[0][1] + sum[0][2] + " Three of a Kind";
		}else result = sum[0][0] + sum[0][1] + " Three of a Kind";
	}else if(/.+Two.+Two/.test(sum)){
		if(sum[0][1] == "1"){
			result = sum[0][0] + sum[0][1] + sum[0][2] + " " + sum[1][0] + sum[1][1] + " Two Pairs";
		}else if(sum[1][1] =="1"){
			result = sum[0][0] + sum[0][1] + " " + sum[1][0] + sum[1][1] + sum[1][2]+ " Two Pairs";
		}else result = sum[0][0] + sum[0][1] + " " + sum[1][0] + sum[1][1] + " Two Pairs";
	}else if(/.+Two/.test(sum)){
		if(sum[0][1] == "1"){
		result = sum[0][0] + sum[0][1] + sum[0][2] + " One Pair";
		}else result = sum[0][0] + sum[0][1] + " One Pair";
	}else {
		if(sum[0][1] == "1"){
		result = sum[0][0] + sum[0][1] + sum[0][2] + " High Hand";
		}else result = sum[0][0] + sum[0][1] + " High Hand";
	}
	return result;
};
	
var deck = (new Deck()).shuffle();
// 카드 덱에서 5장을 나누어준다

var nua = [deck.cards[0].symbol,deck.cards[1].symbol,deck.cards[2].symbol,deck.cards[3].symbol,deck.cards[4].symbol,deck.cards[5].symbol,deck.cards[6].symbol];
console.log(categoriesTest(nua));






