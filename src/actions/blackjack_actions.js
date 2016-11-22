
export function fetchDeck() {
  return {type: 'FETCH_DECK'}
}

export function setAICards(deck) {
  var card1 = deck[Math.floor(Math.random() * deck.length)];
  var card2 = deck[Math.floor(Math.random() * deck.length)];
  var aiCards = [card1, card2]

  return {
    type: 'SET_AI_CARDS',
    payload: {aiCards: aiCards}
  }

}

export function setUserCards(deck){
  var card1 = deck[Math.floor(Math.random() * deck.length)];
  var card2 = deck[Math.floor(Math.random() * deck.length)];
  var userCards = [card1, card2]

  return {
    type: 'SET_USER_CARDS',
    payload: {userCards: userCards}

  }
}

export function hitAI(deck) {
  var card = deck[Math.floor(Math.random() * deck.length)];
  return {
    type: 'HIT_AI',
    payload: {aiCard: card}
  }

}

export function hitUser(deck) {
  var card = deck[Math.floor(Math.random() * deck.length)];
  return {
    type: 'HIT_USER',
    payload: {userCard: card}
  }
}
