export default function TicTacToe() {
  function handleRestart() {}
  return (
    <div>
      <h2>Tic Tac Toe</h2>
      <div>Winner: </div>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}
