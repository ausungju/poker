  
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
	var suitList = ["♠", "◆", "♥", "♣"];
	var rankList = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"]
	var result = "";
	var sum = ""
	var getDeck = a;

	var getString =[];
	var getSwap =[];
	var getInt = []
	
	for(var i = 0; i < getDeck.length; i++){
		getSwap.push(getDeck[i].substr(1)+getDeck[i].substr(0,1));
		getString.push(getDeck[i].substr(0,1));
		getInt.push(getDeck[i].substr(1));
	}getSwap.sort();getInt.sort();getString.sort();
		
	// ◆, ♠, ♣, ♥
	//  감별
	


	var checkCard = function(m = 4,n =["0"]){
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
		
		
		
		
		var getSuit = function(){
			if(sum != "") return;
			for(var i in suitList){
				
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
				k++;
				if(m > 2){
					n.push(rankList[i]);
					sum += (rankList[i]+getSpot());
					m--;
					checkCard(m,n);
					break;
				}else if(m == 2){
					n.push(rankList[i]);	
					sum += (rankList[i]+getSpot());
					checkCard(m,n);
				}else if(m == 1){
					sum += (rankList[i]+getSpot());
					return;
				}else return;
			}
		}
		if(k == 0) {
			--m;
			console.log(m);
			if(m > 0) checkCard(m,n);
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	checkCard();

	//스트레이트
	if((/10,9,K,Q,J/).test(getInt.join()) == true){
		sum += "Kstraight";
	}else if((/10,8,9,Q,J/).test(getInt.join()) == true){
		sum += "Qstraight";
	}else if((/10,7,8,9,J/).test(getInt.join()) == true){
		sum += "Jstraight";
	}else if((/10,6,7,8,9/).test(getInt.join()) == true){
		sum += "10straight";
	}else if((/5,6,7,8,9/).test(getInt.join()) == true){
		sum += "9straight";
	}else if((/4,5,6,7,8/).test(getInt.join()) == true){
		sum += "8straight";
	}else if((/3,4,5,6,7/).test(getInt.join()) == true){
		sum += "7straight";
	}else if((/2,3,4,5,6/).test(getInt.join()) == true){
		sum += "6straight";
	}
	
	//백스트레이트
	if((/2,3,4,5,A/).test(getInt.join()) == true){
		sum += "Backstraight";
	}
	
	//마운틴
	if((/10,A,K,Q,J/).test(getInt.join()) == true){
		sum += "mountain";
	}
	
	
	//플러쉬
	if((/♥,♥,♥,♥,♥/).test(getString) == true){
		sum += "♥flush";
	}else if((/◆,◆,◆,◆,◆/).test(getString) == true){
		sum += "◆flush";
	}else if((/♠,♠,♠,♠,♠/).test(getString) == true){
		sum += "♠flush";
	}else if((/♣,♣,♣,♣,♣/).test(getString) == true){
		sum += "♣flush";
	}
	

	return sum;
};
	
var deck = (new Deck()).shuffle();
// 카드 덱에서 5장을 나누어준다

var nua = ["◆1","◆3","♣5","♣6","♣8","♣10","♠Q"];
console.log(categoriesTest(nua));






