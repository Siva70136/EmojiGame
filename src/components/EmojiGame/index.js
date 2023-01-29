/* 
Quick Tip 
- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

*/

// Write your code here.

import {Component} from 'react'

import './index.css'
import EmojiCard from '../EmojiCard'
import Win from '../WinOrLoseCard'
import NavBar from '../NavBar'

class EmojiGame extends Component {
  state = {totalScore: 0, score: 0, clickId: [], isLoss: false}

  update = id => {
    const {clickId} = this.state
    const filter = clickId.includes(id)
    if (!filter) {
      this.setState(prevState => ({
        clickId: [...clickId, id],
        score: prevState.score + 1,
      }))
    } else {
      this.setState({
        isLoss: true,
      })
    }
  }

  onRestart = () => {
    const {score, totalScore} = this.state
    const value = totalScore > score ? totalScore : score

    this.setState(prevState => ({
      isLoss: !prevState.isLoss,
      totalScore: value,
      score: 0,
      clickId: [],
    }))
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {emojisList} = this.props
    const {totalScore, score, isLoss} = this.state
    const emojis = this.shuffledEmojisList()

    if (isLoss) {
      return (
        <div className="app-container">
          <NavBar totalScore={totalScore} score={score} />
          <Win score={score} onRestart={this.onRestart} />
        </div>
      )
    }
    return (
      <div className="app-container">
        <NavBar totalScore={totalScore} score={score} />
        <div className="">
          <ul className="emoji-container">
            {emojis.map(each => (
              <EmojiCard emojisList={each} key={each.id} update={this.update} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
