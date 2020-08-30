const game = {
	curr : 'x',
	step:0,
}


function nextTurn(){
	game.step++;
	if(game.curr == 'x'){
		game.curr = '0';
	}else{
		game.curr = 'x'
	}
	document.getElementById("player").textContent = game.curr;
}

function restart(){
	for (var i = 0; i < 3; i++) {
		for(var j  = 0;j<3;j++){
			document.getElementById("game").children[0].children[i].children[j].textContent = ' '
		}
	}
	game.curr = 'x';
	game.step = 0;
	document.getElementById("player").textContent = game.curr;

}

var board = [
	[' ',' ',' '],
	[' ',' ',' '],
	[' ',' ',' '],
]

function getBoard(){
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			board[i][j] = document.getElementById("game").children[0].children[i].children[j].textContent;
		}
	}
}


function Click(row,col){
	


	if(document.getElementById("game").children[0].children[row].children[col].textContent != " "){
		return ;
	}
	document.getElementById("game").children[0].children[row].children[col].textContent = game.curr ;


	getBoard();




	if(board[row][0] == board[row][1] && board[row][1] == board[row][2]){
		console.log("row")
		document.getElementById("game").children[0].children[row].style.backgroundColor = '#00ff00';
		play1();
		setTimeout(() => {  hi(row,col,1); }, 1000);//hi(row,col,1);
	}
	else if(board[0][col] == board[1][col] && board[1][col] == board[2][col]){
		console.log(board)
		console.log('col')
		document.getElementById("game").children[0].children[0].children[col].style.backgroundColor='#00ff00';
		document.getElementById("game").children[0].children[1].children[col].style.backgroundColor='#00ff00';
		document.getElementById("game").children[0].children[2].children[col].style.backgroundColor='#00ff00';
		play1();

		setTimeout(() => {  hi(row,col,2); }, 1000);//hi(row,col,2);
	}
	else if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != " "){
		console.log(board)
		console.log("first")
		document.getElementById("game").children[0].children[0].children[0].style.backgroundColor='#00ff00';
		document.getElementById("game").children[0].children[1].children[1].style.backgroundColor='#00ff00';
		document.getElementById("game").children[0].children[2].children[2].style.backgroundColor='#00ff00';
		play1();
		setTimeout(() => {  hi(row,col,3); }, 1000);//hi(row,col,3);
	}
	else if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != " "){
		console.log(board)
		console.log("second")
		document.getElementById("game").children[0].children[0].children[2].style.backgroundColor='#00ff00';
		document.getElementById("game").children[0].children[1].children[1].style.backgroundColor='#00ff00';
		document.getElementById("game").children[0].children[2].children[0].style.backgroundColor='#00ff00';
		play1();
	setTimeout(() => {  hi(row,col,4); }, 1000);
		//hi(row,col,4);
	}else{play();}

	//play();

	nextTurn();
	if(game.step == 9){
		alert("Game End ! Please restart");
		restart();
	}



	
     
   }


   function hi(row,col,i){

   	switch(i){


   	case 1:


   	alert("Player "+board[row][0]+" Won !")
   	document.getElementById("game").children[0].children[row].style.backgroundColor = '#176E78';
   	restart(); 
   	break;

   	case 2:
   	alert("Player "+board[0][col]+" Won !")
   	document.getElementById("game").children[0].children[0].children[col].style.backgroundColor='#176E78';
		document.getElementById("game").children[0].children[1].children[col].style.backgroundColor='#176E78';
		document.getElementById("game").children[0].children[2].children[col].style.backgroundColor='#176E78';
   	restart();
   	break;

   	case 3:
   	alert("Player "+board[0][0]+" Won !")
   	document.getElementById("game").children[0].children[0].children[0].style.backgroundColor='#176E78';
		document.getElementById("game").children[0].children[1].children[1].style.backgroundColor='#176E78';
		document.getElementById("game").children[0].children[2].children[2].style.backgroundColor='#176E78';
   	restart();
   	break;

   	case 4:

   	alert("Player "+board[2][0]+" Won !")
   		document.getElementById("game").children[0].children[0].children[2].style.backgroundColor='#176E78';
		document.getElementById("game").children[0].children[1].children[1].style.backgroundColor='#176E78';
		document.getElementById("game").children[0].children[2].children[0].style.backgroundColor='#176E78';
   	restart();
   	break;
   }}

        function play() { 
            var audio = new Audio( 
'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3'
        ); 
            audio.play(); 
        } 

         function play1() { 
            var audio = new Audio( 
'win.mp3'
        ); 
            audio.play(); 
        } 



//// code

	// console.log(board)
	// check row wise 



