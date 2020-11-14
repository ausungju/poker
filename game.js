  
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
	}getSwap.sort();getInt.sort();getString.sort();getDeck.sort();
	// ◆, ♠, ♣, ♥
	//  감별
	
	var getRem = function(reg,get,list){
			var matchingCard = get.join("").match(reg);
			for(var i in list){
				for(var j = 0; j <= matchingCard[0].length; j++){
						if(matchingCard[0][j] == list[i]) {
							sum += list[i];
							return;
						}
				}
			}
		}
	
	
	
	//페어 카드
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
		
		for(var i in rankList){
			var a = 0;
			for(var j in n){
				if(n[j] == rankList[i]) a++;
			}
			if(a != 0) continue;
			
			console.log
			var reg = new RegExp( (rankList[i]+".").repeat(m) );
			if(reg.test(getSwap.join("")) ==true){
				getRem(reg,getSwap,suitList);
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
			if(m > 0) checkCard(m,n);
		}
	}
	
	//마운틴
	if((/10.+A.J.K.Q./).test(getSwap.join("")) == true){
		for(var i in getSwap){
			if(getSwap[i][0] == "A") sum += getSwap[i][1];
		}
		sum += "mountain";
	}
	

	
	
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
	
	console.log(getSwap.join(""));
	
	
	checkCard();
	
	//플러쉬
	for(var i in suitList){
		var reg = new RegExp( (suitList[i] + ".+").repeat(5) );
		if(reg.test(getDeck.join("")) == true){
			getRem(reg,getDeck,rankList);
			sum += suitList[i]+"flush";
		}
	}


	return sum;
};
	
var deck = (new Deck()).shuffle();
// 카드 덱에서 5장을 나누어준다

var nua = ["◆10","◆A","♣K","♣Q","♣J","♠2","♣3"];
console.log(categoriesTest(nua));






