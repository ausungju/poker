var newPage = function( get, seed ){
	var basic = document.getElementById("basic");
	
	while ( basic.hasChildNodes() ) { 
		basic.removeChild( basic.firstChild ); 
	}
	
	
	switch( get ){
		case "main" : {
			var Home = document.getElementById("home");
			Home.innerText = "H";
			createNode( "button", "저장", basic, [ ["onclick", "user.save()"], ["id", "save"] ] )
			createNode( "button", "시작", basic, [ ["onclick", "newPage(\"game\")"], ["id", "start"] ] )
			createNode("div", (user.name + ",  Money : " + user.money), basic, [ ["id", ("state")] ] );
			break;
		}
		case "game" : {
			game = new Game( seed )
			var List = game.playerList;
			
			createNode( "div", game.seed, basic, [ ["id", "seed"] ] );
			for(var i in List){

				createNode("div", (List[i].name + ",  Money : " + List[i].money), basic, [ ["class", ("player")] ] );
			}
			
			break;
		}
		
	}
	console.log(document.body);
};

//html 요소 추가
var createNode = function(tag, textNode, stand = document.body, Attribute = []){
	var element = document.createElement( tag );
	var node = document.createTextNode( textNode );
	if(Attribute != []){
		for(var i in Attribute){
			element.setAttribute( Attribute[i][0], Attribute[i][1] );
		}
	}
	element.appendChild( node );
	stand.appendChild( element );
};
	
function goHome(){
	if(confirm("메인화면으로 이동합니다"))
		newPage("main");
	
	
}
	
function Game(seed = 5000){

	this.playerList = [ 
		user,new nonUser("A",10000), new nonUser("B",10000),
		new nonUser("C",10000), new nonUser("D",10000)
	];
	
	var seed = this.seed = seed;
	this.stake = 0;
};



	







