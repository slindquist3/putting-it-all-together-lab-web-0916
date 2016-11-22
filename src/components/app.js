import React from 'react'
import UserBlackJack from './user_blackjack'
import AIBlackJack from './ai_blackjack'
import {fetchDeck, setAICards, setUserCards, hitAI, hitUser} from '../actions/blackjack_actions'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.store = props.store
    this.calculateUserScore = this.calculateUserScore.bind(this)
    this.hitMe = this.hitMe.bind(this)
    this.stay = this.stay.bind(this)
    this.calculateAIScore = this.calculateAIScore.bind(this)
  }

  hitMe(event){
    event.preventDefault()
    // this.props.store.dispatch(hitUser(this.props.store.deck))
    console.log("event")
  }

  calculateAIScore() {
    this.store.getState().aiCards.reduce(function(total, card) {
      return total + card.value
    }, 0)
  }

  calculateUserScore() {
    this.store.getState().userCards.reduce(function(total, card) {
      return total + card.value
    }, 0)

  }

  stay(event) {
    event.preventDefault()
    let userTotal = calculateUserScore()
    let AITotal = calculateAIScore()
    if (AITotal < 17) {
      console.log("More!")
    } else {
      console.log("No more!")
    }
  }

  render() {
    return(
      <div>
        <UserBlackJack hitMe={this.hitMe} stay={this.stay} score={this.calculateUserScore} userCards={this.store.getState().userCards}/>
        <AIBlackJack score={this.calculateAIScore} aiCards={this.store.getState().aiCards}/>
      </div>
    )
  }


}
