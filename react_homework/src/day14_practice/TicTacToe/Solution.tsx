import React, { useEffect, useState } from "react";
import "./style.css";

type Player = "X" | "O";
enum Results {
  X_WINS = "Winner: X",
  O_WINS = "Winner: O",
  DRAW = "Draw",
  ON_GOING = "On Going",
}
interface CellType {
  id: number;
  player: Player | null;
}

// alt + shift + down to copy the line
const initBoard: CellType[] = [
  { id: 1, player: null },
  { id: 2, player: null },
  { id: 3, player: null },
  { id: 4, player: null },
  { id: 5, player: null },
  { id: 6, player: null },
  { id: 7, player: null },
  { id: 8, player: null },
  { id: 9, player: null },
];

const calcResult = (board: CellType[]): Results => {
  let winner = null;

  const winnerConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winnerConditions.length; i++) {
    const [a, b, c] = winnerConditions[i];
    if (
      board[a].player === board[b].player &&
      board[b].player === board[c].player &&
      board[a].player !== null
    ) {
      winner = board[a].player;
      break;
    }
  }

  if (winner === "X") return Results.X_WINS;
  if (winner === "O") return Results.O_WINS;

  const isGameOnGoing = board.some((cell) => cell.player === null);

  return isGameOnGoing ? Results.ON_GOING : Results.DRAW;
};

export default function Solution() {
  const [board, setBoard] = useState(initBoard);
  const [currPlayer, setCurrPlayer] = useState<Player>("X");

  const [result, setResult] = useState<Results>(Results.ON_GOING);

  useEffect(() => {
    setResult(calcResult(board));
  }, [board]);

  const handleClickCell = (id: number) => {
    if (result !== Results.ON_GOING) return;

    // get the cell in the board
    const cell = board.find((cell) => cell.id === id)!;

    // if the cell has a player already, return
    if (cell.player !== null) return;

    // update the cell with the current player
    const cellIndex = board.indexOf(cell);
    const newCell: CellType = {
      ...cell,
      player: currPlayer,
    };

    const newBoard = [...board];
    newBoard[cellIndex] = newCell;
    setBoard(newBoard);

    // update the player
    setCurrPlayer(currPlayer === "X" ? "O" : "X");
  };

  const restart = () => {
    setBoard(initBoard);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div>Current Player: {currPlayer}</div>
      <div className="board">
        {board.map((cell) => {
          return (
            <div
              key={cell.id}
              className="cell"
              onClick={() => handleClickCell(cell.id)}
            >
              {cell.player}
            </div>
          );
        })}
      </div>
      {result !== Results.ON_GOING && <div>{result}</div>}
      <button onClick={restart}>Restart</button>
    </div>
  );
}
