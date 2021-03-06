// 사용자의 정보를 저장한 객체
function User(LOAD = null,name = ""){
	this.name = name;
	this.numOfDie = 0;
	this.money = 1000000;
	
	this.thisDeck = [];


	// 만약 사용자가 플레이한 기록이 있을시 불러오기
	if(LOAD != null){
		if(LOAD.numOfDie > 0) return;
		this.name = LOAD.name;
		this.numOfDie = LOAD.numOfDie;
		this.money = LOAD.money;
	}
};

// 저장하기
User.prototype.save = function(){
	
	function saveToFile(fileName, content) {
		var blob = new Blob([content], { type: 'text/plain' });
		objURL = window.URL.createObjectURL(blob);
            
		// 이전에 생성된 메모리 해제
		if (window.__Xr_objURL_forCreatingFile__) {
			window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
		}
		window.__Xr_objURL_forCreatingFile__ = objURL;
		var a = document.createElement('a');
		a.download = fileName;
		a.href = objURL;
		a.click();
	}

	var fileName = this.name + ".js"
	var content = "var " + "LOAD" + " = { id = 001, name: \"" + this.name + "\", numOfDie: " 
	+ this.numOfDie + ", money: " + this.money + "};";
	saveToFile(fileName, content);
};
// 새로하기
function newUser(){
	var getUserName = prompt("닉네임을 입력하시오","홍길동");
	// 게임 시작유무 확인
	if(getUserName == null);
	else if (confirm("사용자 이름을 \"" + getUserName+ "\" 으로 지정하시겠습니까?")) {
		output.innerText = getUserName +"님 환영합니다.";
		LOAD = new User(null,getUserName);	
		//alert("게임을 시작합니다.");
		//newPage("main");
	}
};

function newGame(){
	user = new User(LOAD);
	alert("게임을 시작합니다.");
	newPage("main");
};

// 불러오기
function openTextFile() {
	var getFile = "";
	
	var processFile = function(file){
		var reader = new FileReader();
		
		reader.onload = function () {
			var userName = file.name.match(/.+\./).join().slice(0,-1);
			
			getFile = file.name;
			createNode("script", "", document.head, [["src", getFile]]);
			
			setTimeout(function() {
			if(typeof LOAD == "undefined"){
				alert("잘못된 파일입니다.")
			}
			// 받은 데이터가 알맞은 데이터인지 확인
			else if(LOAD.id != 001 || typeof LOAD == "undefined"){
				alert("잘못된 파일입니다.");
			}
			// 받은 데이터가 파산한 테이터인지 확인
			else if(LOAD.numOfDie > 0){
				alert(LOAD.name + "님은 이미 파산 하였습니다.")
			}

			else if (confirm(userName + "님이 맞습니까?")) { 
				
				output.innerText = userName +"님 환영합니다.";
				alert(userName + "님의 정보를 불러왔습니다");	
				console.log(document.head);
			}else alert("다시 시도하세요!")
			
			}, 10);
		}
		reader.readAsText(file, /* optional */ "euc-kr");
	};
	
	var input = document.createElement("input");
	input.type = "file";
	input.accept = "text/plain, text/html, .js"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
	input.onchange = function (event) {
		processFile(event.target.files[0]);
	}

	input.click();
};

// npc
function nonUser(name, money){
	this.name = name;
	this.money = money;
	this.numOfDie = 0;
	this.thisDeck = [];
};

// 플레이어의 사망 유무 확인
var die = function(Unit){
	if(Unit.money < 0) Unit.numOfDie++;
};

window.onload = function(){};






