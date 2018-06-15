import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square
      key={i}
      value={this.props.squares[i]}
      onClick={
        () => this.props.onClick(i)
      }
      className={this.state.winnerSquares.includes(i)? "win" : null} />;
  }

  createBoard = () => {
    const BOARD_SIZE = 3;
    let gameBoard = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
      let children = [];
      for (let j = 0; j < BOARD_SIZE; j++) {
        children.push(
          this.renderSquare(i * 3 + j)
        );
      }
      gameBoard.push(<div key={i} className="board-row">{children}</div>);
    }
    return gameBoard;
  }

  render() {
    return this.createBoard();
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        place: null,
      }],
      stepNumber: 0,
      xIsNext: true,
      currentStep: 0,
      winnerSquares: [],
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const place = current.place;
    const col = i%3;
    const row = Math.floor(i/3);
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        place: {col:col, row:row},
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      currentStep: this.state.currentStep + 1,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      currentStep: step,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const place = current.place;

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + " Player " + ((move%2 ? 'X - ' : 'O - ') + "row: " + history[move].place.row + " col:" + history[move].place.col):
        'Go to game start';
      return (
        <li key={move}>
          <button className={move === this.state.currentStep? 'bold' : null} onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; ++i) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      this.state.winnerSquares = [a, b, c];
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
