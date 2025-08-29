import React from 'react'
import './game.css'
import { useState, useEffect } from 'react'


const Game = () => {

    const [board, setBoard] = useState(Array.from({length:3}, ()=>Array(3).fill(null)));

    const [player, setPlayer] = useState('X');

    const [winner, setWinner] = useState(null);


    let handleClick = (row, col) => {
        if (board[row][col] || winner) return;
        setBoard(prevBoard => (prevBoard.map((r, i) => {
            if(i !== row) return r;
            return r.map((c, j) => j === col ? player : c)
            })));
        player === 'X' ? setPlayer('O') : setPlayer('X');
    };



    useEffect(() => {
        if(board[0][0] && board[0][0] === board[1][1] && board[1][1] == board[2][2]) setWinner(board[0][0]);
        if(board[0][2] && board[0][2] == board[1][1] && board[1][1] == board[2][0]) setWinner(board[0][2]);
        for(let i=0; i<3;i++)
        {
            if(board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) setWinner(board[i][0]);
        }
        for(let j=0; j<3; j++)
        {
            if(board[0][j] && board[0][j] === board[1][j] && board[1][j] === board[2][j]) setWinner(board[0][j]);
        }
    }, [board]);

    let handleReset = () => {
        setBoard(Array.from({length:3}, ()=>Array(3).fill(null)));
        setPlayer('X');
        setWinner(null);
    };

    const arr = board.flat();
    let count = 0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] !== null) 
        {
            count++;
        }
    }


  return (
    <div className="container">
        <h1>Tic Tac Toe</h1>
        <h3>Current Player : {player}</h3>
        {count === 9 && winner === null ? <h3>Match Drawn</h3> : winner !== null && <h3>{winner} won the game</h3>}
        <div className="board">
            {board.map((row, i) => {
                return <div className="row" key={i}>
                    {row.map((col, j) => <div className="col" key={`${i},${j}`} onClick={()=>handleClick(i,j)}>{col}</div>)}
                </div>
           })}
        </div>
        <button onClick={handleReset}>Restart</button>
    </div>
  )
}

export default Game