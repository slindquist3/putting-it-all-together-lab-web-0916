import React from 'react'

const UserBlackJack = (props) => {
  return (
    <div>
      <h1>Player1</h1>
      <h2>Score: {props.score}</h2>
      <ul>
        {props.userCards.map(function(card) {
          return <li>{card}</li>
        })}
      </ul>
      <form>
        <button onSubmit={props.hitMe}>Hit me</button>
        <button>Stay</button>
      </form>
    </div>
  )
}

export default UserBlackJack
