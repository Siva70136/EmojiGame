// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojisList, update} = props

  const {emojiName, emojiUrl, id} = emojisList

  const count = () => {
    update(id)
  }

  return (
    <li className="item" onClick={count}>
      <button className="emoji-button" type="button">
        <img src={emojiUrl} alt={emojiName} onClick={count} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
