var newPage = function(){
	var page = document.body;

	while ( page.firstChild ) { 
		page.removeChild( page.firstChild ); 
	}

	var div1 = document.createElement("div");
	div1.setAttribute("onclick", "console.log(\"안녕\");");
	var divnode = document.createTextNode("안녕");
	div1.appendChild( divnode );
	page.appendChild(div1);
}
	
	
function game(seed){

	var playerList =[ 
		user,new nonUser("A",10000), new nonUser("B",10000),
		new nonUser("C",10000), new nonUser("C",10000)
	];
	
	var seed = this.seed = seed;
	this.stake = 0;
};



	







