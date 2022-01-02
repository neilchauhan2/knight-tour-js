const chess = new Array(8).fill([]).map(() => new Array(8).fill(0));

const displayBoard = (chess) => {
  for (let i = 0; i < chess.length; i++) {
    for (let j = 0; j < chess.length; j++) {
      process.stdout.write(chess[i][j] + " ");
    }
    console.log();
  }
};

function printKnightsTour(chess, r, c, move) {
  if (
    r < 0 ||
    c < 0 ||
    r >= chess.length ||
    c >= chess.length ||
    chess[r][c] > 0
  ) {
  } else if (move == chess.length * chess.length) {
    chess[r][c] = move;
    displayBoard(chess);
    console.log();
    console.log();
    chess[r][c] = 0;
    return;
  } else {
    chess[r][c] = move;
    printKnightsTour(chess, r - 2, c + 1, move + 1);
    printKnightsTour(chess, r - 1, c + 2, move + 1);
    printKnightsTour(chess, r + 1, c + 2, move + 1);
    printKnightsTour(chess, r + 2, c + 1, move + 1);
    printKnightsTour(chess, r + 2, c - 1, move + 1);
    printKnightsTour(chess, r + 1, c - 2, move + 1);
    printKnightsTour(chess, r - 1, c - 2, move + 1);
    printKnightsTour(chess, r - 2, c - 1, move + 1);
    chess[r][c] = 0;
  }
}

printKnightsTour(chess, 7, 0, 1);
