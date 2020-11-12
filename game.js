  
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
	
	console.log(getSwap.join());
	
	//투페어
	var twoCard = function(n= "0"){
		var c = getInt[0];
		if((/2,2/).test(getInt.join()) == true){
			if(n == "2") return;
			sum += "2two";
			c++;
		}else if((/3,3/).test(getInt.join()) == true){
			if(n == "3") return;
			sum += "3two";
			c++;
		}else if((/4,4/).test(getInt.join()) == true){
			if(n == "4") return;
			sum += "4two";
			c++;
		}else if((/5,5/).test(getInt.join()) == true){
			if(n == "5") return;
			sum += "5two";
			c++;
		}else if((/6,6/).test(getInt.join()) == true){
			if(n == "6") return;
			sum += "6two";
			c++;
		}else if((/7,7/).test(getInt.join()) == true){
			if(n == "7") return;
			sum += "7two";
			c++;
		}else if((/8,8/).test(getInt.join()) == true){
			if(n == "8") return;
			sum += "8two";
			c++;
		}else if((/9,9/).test(getInt.join()) == true){
			if(n == "9") return;
			sum += "9two";
			c++;
		}else if((/10,10/).test(getInt.join()) == true){
			if(n == "10") return;
			sum += "10two";
			c++;
		}else if((/J,J/).test(getInt.join()) == true){
			if(n == "J") return;
			sum += "Jtwo";
			c++;
		}else if((/Q,Q/).test(getInt.join()) == true){
			if(n == "Q") return;
			sum += "Qtwo";
			c++;
		}else if((/K,K/).test(getInt.join()) == true){
			if(n == "K") return;
			sum += "Ktwo";
			c++;
		}else if((/A,A/).test(getInt.join()) == true){
			if(n == "A") return;
			sum += "Atwo";
			c++;
		}
	}
	
	//  감별
	var HighCard = function(){
		var c = getInt[0];
		if(c == 10){
			return getSwap[0][1]+c;
		}else{
			return getSwap[6][1]+getInt[6];
		}
	}
	
	var HighInt = function(){
		var c = getInt[0];
		if(c == 10){
			return c;
		}else{
			return getInt[6];
		}
	}

	console.log(HighCard());
	
	
	//포카드
	if((/2,2,2,2/).test(getInt.join()) == true){
		return "2four";
	}else if((/3,3,3,3/).test(getInt.join()) == true){
		return "3four";
	}else if((/4,4,4,4/).test(getInt.join()) == true){
		return "4four";
	}else if((/5,5,5,5/).test(getInt.join()) == true){
		return "5four";
	}else if((/6,6,6,6/).test(getInt.join()) == true){
		return "6four";
	}else if((/7,7,7,7/).test(getInt.join()) == true){
		return "7four";
	}else if((/8,8,8,8/).test(getInt.join()) == true){
		return "8four";
	}else if((/9,9,9,9/).test(getInt.join()) == true){
		return "9four";
	}else if((/10,10,10,10/).test(getInt.join()) == true){
		return "10four";
	}else if((/J,J,J,J/).test(getInt.join()) == true){
		return "Jfour";
	}else if((/Q,Q,Q,Q/).test(getInt.join()) == true){
		return "Qfour";
	}else if((/K,K,K,K/).test(getInt.join()) == true){
		return "Kfour";
	}else if((/A,A,A,A/).test(getInt.join()) == true){
		return "Afour";
	}
	
	//스트레이트
	if((/10,9,K,Q,J/).test(getInt.join()) == true){
		sum += "straight";
	}else if((/10,8,9,Q,J/).test(getInt.join()) == true){
		sum += "straight";
	}else if((/10,7,8,9,J/).test(getInt.join()) == true){
		sum += "straight";
	}else if((/10,6,7,8,9/).test(getInt.join()) == true){
		sum += "straight";
	}else if((/5,6,7,8,9/).test(getInt.join()) == true){
		sum += "straight";
	}else if((/4,5,6,7,8/).test(getInt.join()) == true){
		sum += "straight";
	}else if((/3,4,5,6,7/).test(getInt.join()) == true){
		sum += "straight";
	}else if((/2,3,4,5,6/).test(getInt.join()) == true){
		sum += "straight";
	}
	
	//백스트레이트
	if((/2,3,4,5,A/).test(getInt.join()) == true){
		sum += "Backstraight";
	}
	
	//마운틴
	if((/10,A,K,Q,J/).test(getInt.join()) == true){
		sum += "mountain";
	}
	
	//트리플 
	if((/2,2,2/).test(getInt.join()) == true){
		sum += "three";
		twoCard("2");
	}else if((/3,3,3/).test(getInt.join()) == true){
		sum += "three";
		twoCard("3");
	}else if((/4,4,4/).test(getInt.join()) == true){
		sum += "three";
		twoCard("4");
	}else if((/5,5,5/).test(getInt.join()) == true){
		sum += "three";
		twoCard("5");
	}else if((/6,6,6/).test(getInt.join()) == true){
		sum += "three";
		twoCard("6");
	}else if((/7,7,7/).test(getInt.join()) == true){
		sum += "three";
		twoCard("7");
	}else if((/8,8,8/).test(getInt.join()) == true){
		sum += "three";
		twoCard("8");
	}else if((/9,9,9/).test(getInt.join()) == true){
		sum += "three";
		twoCard("9");
	}else if((/10,10,10/).test(getInt.join()) == true){
		sum += "three";
		twoCard("10");
	}else if((/J,J,J/).test(getInt.join()) == true){
		sum += "three";
		twoCard("J");
	}else if((/Q,Q,Q/).test(getInt.join()) == true){
		sum += "three";
		twoCard("Q");
	}else if((/K,K,K/).test(getInt.join()) == true){
		sum += "three";
		twoCard("K");
	}else if((/A,A,A/).test(getInt.join()) == true){
		sum += "three";
		twoCard("A");
	}else{
		twoCard();
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
	
	result = HighInt() +sum;
	return result;
};
	
var deck = (new Deck()).shuffle();
// 카드 덱에서 5장을 나누어준다

var nua = ["◆2","♠9","♠4","♠A","♠5","♠8","♠6"];
console.log(nua.sort());
console.log(categoriesTest(nua));






