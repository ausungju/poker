window.onload = function(){
	
};
// 사용자의 정보를 저장한 객체
function User(LOAD = NULL,name){
	// 사용자의 이름, 죽은 휫수, 돈의 변수 선언
	this.name = name;
	this.numOfDie =numOfDie;
	this.money = money;
	
	this.thisDeck = [];
	
	// 만약 사용자가 플레이한 기록이 있을시 불러오기
	if(LOAD != NULL){
		this.name = LOAD.name;
		this.numOfDie = LOAD.numOfDie;
		this.money = LOAD.money;
		};
};
// npc
function nonUser(name, money){
	this.name = name;
	this.money = money;
	this.numOfDie = 0;
	this.thisDeck = [];
};
