import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from './store'
import blackjackReducer from './reducers/blackjack_reducer'
import {fetchDeck, setAICards, setUserCards, hitAI, hitUser} from './actions/blackjack_actions'
import App from './components/app'

const store = createStore(blackjackReducer)

store.dispatch(fetchDeck())
store.dispatch(setAICards(store.getState()))
store.dispatch(setUserCards(store.getState()))

const render = () => {ReactDOM.render(<App store={store}/>, document.getElementById('container'))}
render()

store.subscribe(render)

require('../test/index-test.js')  // Leave this in!
