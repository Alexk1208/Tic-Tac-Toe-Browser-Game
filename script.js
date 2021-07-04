const player = (letter, name, turn) => {
    return {letter, name, turn};
};

const GameBoard = (() => {
    const insertAt = (array, index, element) =>{
        array.splice(index, 1, element);
    }

    const gameBoardDisplayArray = (player1, player2) =>{
        let gameBoard = ['', '', '', '', '', '', '','',''];
        document.querySelectorAll('td').forEach((element) => {
            element.addEventListener('click', ()=>{
                let elementVal = parseInt(element.id);
                if(gameBoard[elementVal] === 'x' || gameBoard[elementVal] === 'o'){
                    return alert('That spot is already taken');
                }
                else if(player1.turn === true){
                    insertAt(gameBoard, elementVal, player1.letter);
                    player1.turn = false;
                    player2.turn = true;
                }
                else{
                    insertAt(gameBoard, elementVal, player2.letter);
                    player2.turn = false;
                    player1.turn = true;
                }
                for(i = 0; gameBoard.length > i; i++){
                    document.getElementById(i).textContent = gameBoard[i];
                };
                console.log(player1);
                console.log(player2);
                console.log(gameBoard)
            });
        });
    };



    const resetGame = () =>{

    }
    
    return{gameBoardDisplayArray, startGame, resetGame};
})();

const GameFlow = (() => {
    document.getElementById('startGame').addEventListener('click', () =>{
        const eachName1 = document.getElementById('player1Name').value;
        const eachShape1 = document.getElementById('player1Select').value;
        const playerNum1 = player(eachShape1, eachName1, true);

        const eachName2 = document.getElementById('player2Name').value;
        const eachShape2 = document.getElementById('player2Select').value;
        const playerNum2 = player(eachShape2, eachName2, false);
        
        GameBoard.gameBoardDisplayArray(playerNum1, playerNum2);
        console.log(playerNum1);
        console.log(eachShape1);
    })
})();