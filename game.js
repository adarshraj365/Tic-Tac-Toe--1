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
	game.curr = 'X';
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
	// console.log(board)
	// check row wise 

	if(board[row][0] == board[row][1] && board[row][1] == board[row][2]){
		console.log("row")
		alert("Player "+board[row][0]+" Won !")
		restart();
	}
	else if(board[0][col] == board[1][col] && board[1][col] == board[2][col]){
		console.log(board)
		console.log('col')
		alert("Player "+board[0][col]+" Won !")
		restart();
	}
	else if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != " "){
		console.log(board)
		console.log("first")
		alert("Player "+board[0][0]+" Won !")
		restart();
	}
	else if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != " "){
		console.log(board)
		console.log("second")
		alert("Player "+board[2][0]+" Won !")
		restart();
	}

	nextTurn();
	if(game.step == 9){
		alert("Game End ! Please restart");
		restart();
	}
}
