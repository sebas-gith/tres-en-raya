import { useState } from "react";
import "./App.css";

const TURNS = {
  X: "x",
  O: "o",
};

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8]
]

const Square = ({ isSelected, children, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index);
  };
  const className = `square ${isSelected ? "is-selected" : ""}`;
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null) // null es que cno hay ganador

  const checkWinner = () => {
    
  }

  const updateBoard = (index) => {

    if(board[index]) return
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
};

export default App;
