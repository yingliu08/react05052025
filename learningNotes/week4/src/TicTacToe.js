import { useState } from "react";
export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleCell(index) {
    // if already has winner or board already clicked before,can't click the board
    if (board[index] || calculate(board)) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function handleRestart() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  const winner = calculate(board);
  return (
    <div>
      <h2 style={{ color: "blue" }}>Tic Tac Toe</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 50px)",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {board.map((cell, index) => {
          return (
            <button
              key={index}
              style={{
                width: "50px",
                height: "50px",
                lineHeight: "50px",
                border: "1px solid white",
              }}
              onClick={() => handleCell(index)}
            >
              {cell}
            </button>
          );
        })}
      </div>
      <div>Winner: {winner} </div>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}

function calculate(board) {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
