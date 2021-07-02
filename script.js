const player = (playerLetter, turn) => {
    const getLetter = () => playerLetter;
    const playerTurn = () => turn;
    return {getLetter, playerTurn};
};

const GameBoard = (() => {
    let gameBoard = ['O', 'X', 'O', 'O','O', 'X', 'O', 'O', 'X'];
        for(i = 0; gameBoard.length > i; i++){
                document.getElementById(i).textContent = gameBoard[i];
        };
    
})();

const GameFlow = (() => {
    const player1 = player('x', true);
    const player2 = player('o', false);
    document.querySelectorAll('td').forEach((element) => {
        element.addEventListener('click', () =>{
            element.textContent = 'X';
        });
    });
})();