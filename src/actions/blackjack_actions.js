export function fetchDeck() {
  return {
    type: 'FETCH_DECK'
  }
}

export function setAICards(state) {
  let deck = Array.from(state.deck)
  let card1 = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
  let card2 = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
  let aiCards = [card1, card2]
  return {
    type: 'SET_AI_CARDS',
    payload: {aiCards: aiCards, deck: deck}
  }
}

export function setUserCards(state){
  let deck = Array.from(state.deck)
  let card1 = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
  let card2 = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
  let userCards = [card1, card2]
  return {
    type: 'SET_USER_CARDS',
    payload: {userCards: userCards, deck: deck}
  }
}

export function hitAI(state) {
  let deck = Array.from(state.deck)
  let card = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
  return {
    type: 'HIT_AI',
    payload: {aiCard: card, deck: deck}
  }
}

export function hitUser(state) {
  let deck = Array.from(state.deck)
  let card = deck.splice(Math.floor(Math.random() * deck.length),1 )[0];
  return {
    type: 'HIT_USER',
    payload: {userCard: card, deck: deck}
  }
}
