// Write your code here.

import './index.css'

const Win = props => {
  const {score, onRestart} = props

  const restart = () => {
    onRestart()
  }

  if (score >= 12) {
    return (
      <div className="win-container">
        <div className="data-container">
          <h1 className="head">You Won</h1>
          <p className="best-score">Best Score</p>
          <p className="score">12/12</p>
          <button type="button" className="button" onClick={restart}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          className="status"
          alt="win or lose"
        />
      </div>
    )
  }
  return (
    <div className="win-container">
      <div className="data-container">
        <h1 className="head">You Lose</h1>
        <p className="best-score">Score</p>
        <p className="score">{score}/12</p>
        <button type="button" className="button" onClick={restart}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        className="status"
        alt="win or lose"
      />
    </div>
  )
}

export default Win
