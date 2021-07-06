const player = (letter, name, turn) => {
    return {letter, name, turn};
};

const GameBoard = (() => {
    let gameBoard = ['', '', '', '', '', '', '','',''];

    const insertAt = (array, index, element) =>{
        array.splice(index, 1, element);
    }

    const gameBoardVictoryLogic = (board, letter, player) =>{
        switch (true) {
            case board[0] === letter && board[1] === letter && board[2] === letter:
                alert(`${player} Wins!`)
                break;
            case board[3] === letter && board[4] === letter && board[5] === letter:
                alert(`${player} Wins!`)
                break;
            case board[6] === letter && board[7] === letter && board[8] === letter:
                alert(`${player} Wins!`)
                break;
            case board[0] === letter && board[3] === letter && board[6] === letter:
                alert(`${player} Wins!`)
                break;
            case board[1] === letter && board[4] === letter && board[7] === letter:
                alert(`${player} Wins!`)
                break;
            case board[2] === letter && board[5] === letter && board[8] === letter:
                alert(`${player} Wins!`)
                break;
            case board[0] === letter && board[4] === letter && board[8] === letter:
                alert(`${player} Wins!`)
                break;
            case board[2] === letter && board[4] === letter && board[6] === letter:
                alert(`${player} Wins!`)
                break;
            case board.every(item => item === 'x' || item === 'o'):
                alert(`Tie Game!`)
                break;
        }
    }

    const gameBoardDisplayArray = (player1, player2) =>{
        document.querySelectorAll('td').forEach((element) => {
            element.addEventListener('click', ()=>{
                let elementVal = parseInt(element.id);
                if(gameBoard[elementVal] === 'x' || gameBoard[elementVal] === 'o'){
                    return alert('That spot is already taken');
                }
                else if(player1.turn === true){
                    insertAt(gameBoard, elementVal, player1.letter);
                    for(i = 0; gameBoard.length > i; i++){
                        document.getElementById(i).textContent = gameBoard[i];
                    };
                    player1.turn = false;
                    player2.turn = true;
                    gameBoardVictoryLogic(gameBoard, player1.letter, player1.name);
                }
                else if(player2.turn === true){
                    insertAt(gameBoard, elementVal, player2.letter);
                    for(i = 0; gameBoard.length > i; i++){
                        document.getElementById(i).textContent = gameBoard[i];
                    };
                    player2.turn = false;
                    player1.turn = true;
                    gameBoardVictoryLogic(gameBoard, player2.letter, player2.name);
                }
            });
        });
    };

    const players = () => {
        const eachName1 = document.getElementById('player1Name').value;
        const eachShape1 = document.getElementById('player1Select').value;
        const eachName2 = document.getElementById('player2Name').value;
        const eachShape2 = document.getElementById('player2Select').value;

        if(eachName1 === 'placeholder'|| eachShape1 === 'default'){
            return alert('Player 1 must enter all Details');
        }
        else if(eachName2 === 'placeholder'|| eachShape2 === 'default'){
            return alert('Player 2 must enter all Details');
        }
        else{
            p1 = player(eachShape1, eachName1, true);
            p2 = player(eachShape2, eachName2,false);
            return p1, p2;
        }
    }

    return{gameBoardDisplayArray, players};
})();

const GameFlow = (() => {
    document.getElementById('getPlayers').addEventListener('click', () =>{
        GameBoard.players();
    })
    document.getElementById('startGame').addEventListener('click', () =>{
        GameBoard.gameBoardDisplayArray(p1, p2);
    })

    // document.getElementById('resetGame').addEventListener('click', () =>{
    //     playerNum1 = null;
    //     playerNum2 = null;

    // })
})();