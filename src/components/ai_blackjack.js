import React from 'react'

const AIBlackJack = (props) => {
  return (
    <div>
      <h1>Computer</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
        {props.aiCards.map(function(card) {
          return <li>{card.name}</li>
        })}
      </ul>
    </div>
  )
}

export default AIBlackJack
