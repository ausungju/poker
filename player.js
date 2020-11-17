window.onload = function(){
	
};
// 사용자의 정보를 저장한 객체
function User(LOAD = null,name = ""){
	// 사용자의 이름, 죽은 휫수, 돈의 변수 선언
	this.name = name;
	var numOfDie = 0;
	this.money = 1000000;
	
	this.thisDeck = [];
	
	// 만약 사용자가 플레이한 기록이 있을시 불러오기
	if(LOAD != null){
		if(LOAD.numOfDie > 0) return;
		this.name = LOAD.name;
		this.numOfDie = LOAD.numOfDie;
		this.money = LOAD.money;
		};
};
User.prototype.save = function(){
	saveToFile(this.name + ".js", (
	"var " + this.name + " = { name: \"" + this.name + "\", numOfDie: " 
	+ this.numOfDie + ", money: " + this.money + "};"
	))
};
// npc
function nonUser(name, money){
	this.name = name;
	this.money = money;
	this.numOfDie = 0;
	this.thisDeck = [];
};

var die = function(Unit){
	if(Unit.money < 0) Unit.numOfDie++;
};


var you = {name: "my", numOfDie: 0, money: 100000};
var me = new User(you);
console.log(me);
me.save();



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
};

