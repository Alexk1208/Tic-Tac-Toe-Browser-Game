const player = (playerLetter, turn) => {
    const getLetter = () => playerLetter;
    const playerTurn = () => turn;
    return {getLetter, turn};
};

const GameBoard = (() => {
    let gameBoard = [];
    const player1 = player('x', true);
    const player2 = player('o', false);
})();

const GameFlow = () => {

};

const DisplayGameBoard =  (() => {

})();