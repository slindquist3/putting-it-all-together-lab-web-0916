import React from 'react'
import UserBlackJack from './user_blackjack'
import AIBlackJack from './ai_blackjack'
import {fetchDeck, setAICards, setUserCards, hitAI, hitUser} from '../actions/blackjack_actions'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.store = props.store
    this.calculateUserScore = this.calculateUserScore.bind(this)
    this.calculateAiScore = this.calculateAiScore.bind(this)
    this.hitMe = this.hitMe.bind(this)
    this.stay = this.stay.bind(this)
  }

  hitMe(event){
    event.preventDefault()
    this.store.dispatch(hitUser(this.store.getState()))
  }

  calculateUserScore() {
    let userScore = this.store.getState().userCards.reduce(function(total, card) {
      return total + card.value
    }, 0)
    if (userScore > 21) {
      return "BUST"
    } else {
      return userScore
    }
  }

  calculateAiScore() {
    return this.store.getState().aiCards.reduce(function(total, card) {
      return total + card.value
    }, 0)
  }

  stay(event) {
    event.preventDefault()
    let userTotal = this.calculateUserScore()
    let aiTotal = this.calculateAiScore()
    while (aiTotal <= userTotal) {
      this.store.dispatch(hitAI(this.store.getState()))
      if (this.calculateAiScore() > 21) {
        return "BUST"
      } else {
        return this.calculateAiScore()
      }
      this.stay()
    }
  }

  render() {
    return(
      <div>
        <UserBlackJack hitMe={this.hitMe} stay={this.stay} score={this.calculateUserScore} userCards={this.store.getState().userCards} />
        <AIBlackJack score={this.calculateAiScore} aiCards={this.store.getState().aiCards} />
      </div>
    )
  }
}
