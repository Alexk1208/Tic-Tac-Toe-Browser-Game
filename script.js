const player = (letter, name, turn) => {
    return {letter, name, turn};
};

const GameBoard = (() => {
    let gameBoard = ['', '', '', '', '', '', '','',''];

    const insertAt = (array, index, element) =>{
        array.splice(index, 1, element);
    }

    const gameBoardVictoryLogic = (letter, player) =>{
        let winnerDisplay = document.getElementById('winnerDisplay');
        if(winnerDisplay.textContent !== ''){
            console.log('read winner')
            return;
        }
        switch (true) {
            case gameBoard[0] === letter && gameBoard[1] === letter && gameBoard[2] === letter:
                winnerDisplay.textContent = (`${player} Wins!`);
                break;
            case gameBoard[3] === letter && gameBoard[4] === letter && gameBoard[5] === letter:
                winnerDisplay.textContent = (`${player} Wins!`);
                break;
            case gameBoard[6] === letter && gameBoard[7] === letter && gameBoard[8] === letter:
                winnerDisplay.textContent = (`${player} Wins!`);
                break;
            case gameBoard[0] === letter && gameBoard[3] === letter && gameBoard[6] === letter:
                winnerDisplay.textContent = (`${player} Wins!`);
                break;
            case gameBoard[1] === letter && gameBoard[4] === letter && gameBoard[7] === letter:
                winnerDisplay.textContent = (`${player} Wins!`);
                break;
            case gameBoard[2] === letter && gameBoard[5] === letter && gameBoard[8] === letter:
                winnerDisplay.textContent = (`${player} Wins!`);
                break;
            case gameBoard[0] === letter && gameBoard[4] === letter && gameBoard[8] === letter:
                winnerDisplay.textContent = (`${player} Wins!`);
                break;
            case gameBoard[2] === letter && gameBoard[4] === letter && gameBoard[6] === letter:
                winnerDisplay.textContent = (`${player} Wins!`);
                break;
            case gameBoard.every(item => item === 'x' || item === 'o'):
                winnerDisplay.textContent = (`Tie Game!`);
                break;
        }
    }

    const gameBoardDisplayArray = (element, player1, player2) =>{
        let elementVal = parseInt(element.id);
        let winnerDisplay = document.getElementById('winnerDisplay');
        if(winnerDisplay.textContent !== ''){
            console.log('read winner')
            return;
        }
        else if(gameBoard[elementVal] === 'x' || gameBoard[elementVal] === 'o'){
            return alert('That spot is already taken');
        }
        else if(player1.turn === true){
            insertAt(gameBoard, elementVal, player1.letter);
            for(i = 0; gameBoard.length > i; i++){
                document.getElementById(i).textContent = gameBoard[i];
            };
            player1.turn = false;
            player2.turn = true;
            gameBoardVictoryLogic('x', player1.name);
        }
        else{
            insertAt(gameBoard, elementVal, player2.letter);
            for(i = 0; gameBoard.length > i; i++){
                document.getElementById(i).textContent = gameBoard[i];
            };
            player1.turn = true;
            player2.turn = false;
            gameBoardVictoryLogic('o', player2.name);
        }
        console.log(gameBoard)
    };

    const resetButton = (p1, p2) =>{
        gameBoard = ['', '', '', '', '', '', '','',''];
        p1.turn = true;
        p2.turn = false;
        let winnerDisplay = document.getElementById('winnerDisplay');
        winnerDisplay.innerHTML = '';
        for(i = 0; gameBoard.length > i; i++){
            document.getElementById(i).textContent = gameBoard[i];
        };
    };

    return{gameBoardDisplayArray, resetButton};
})();

const GameFlow = (() => {
    const players = () => {
        const eachName1 = document.getElementById('player1Name').value;
        const eachName2 = document.getElementById('player2Name').value;
        if(eachName1 === 'placeholder'){
            return alert('Player 1 must enter all Details');
        }
        else if(eachName2 === 'placeholder'){
            return alert('Player 2 must enter all Details');
        }
        else{
            p1 = player('x', eachName1, true);
            p2 = player('o', eachName2, false);
        }
    }
    document.getElementById('startGame').addEventListener('click', ()=>{
        players();
        document.querySelectorAll('td').forEach(element => {
            element.addEventListener('click', () => {
                GameBoard.gameBoardDisplayArray(element, p1, p2);
            });
        });
        document.getElementById('startGame').disabled = true;
    });

    document.getElementById('resetGame').addEventListener('click', () =>{
        GameBoard.resetButton(p1, p2);
    })
})();