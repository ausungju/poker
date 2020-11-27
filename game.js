var newPage = function( get, seed ){
	var page = document.body;
	
	while ( page.firstChild ) {
		var ppage = page.firstChild
		if(page.firstChild == ""){
			console.log("앙ㄴ녕")
		}
		console.log(page.firstChild);
		if(document.body.getAttribute("id") == "default"){
			continue;
		}
		page.removeChild( page.firstChild ); 
	}
	switch( get ){
		case "main" : {
		createNode( "button", "저장", undefined, [ ["onclick", "user.save()"], ["id", "save"] ] )
		createNode( "button", "시작", undefined, [ ["onclick", "newPage(\"game\")"], ["id", "start"] ] )
		createNode("div", (user.name + ",  Money : " + user.money), undefined, [ ["id", ("state")] ] );
		break;
		}
		case "game" : {
			game = new Game( seed )
			var List = game.playerList;
			
			createNode( "div", game.seed, undefined, [ ["id", "seed"] ] );
			createNode( "div", game.seed, undefined, [ ["id", "seed"] ] );
			for(var i in List){

				createNode("div", (List[i].name + ",  Money : " + List[i].money), undefined, [ ["class", ("player")] ] );
			}
			console.log(document.body);
			break;
		}
		
	}
};
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
	
	
function Game(seed = 5000){

	this.playerList = [ 
		user,new nonUser("A",10000), new nonUser("B",10000),
		new nonUser("C",10000), new nonUser("D",10000)
	];
	
	var seed = this.seed = seed;
	this.stake = 0;
};



	







