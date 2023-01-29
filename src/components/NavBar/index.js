// Write your code here.

import './index.css'

const NavBar = props => {
  const {totalScore, score} = props

  return (
    <nav className="nav-bar">
      <div className="nav-box">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>

        <ul className="score-container">
          <p className="score">Score:&nbsp;{score}</p>
          <p className="score">Top Score:&nbsp;{totalScore}</p>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
