import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Hello from './containers/Hello'
import { enthusiasm } from './reducers'
import { StoreState } from './types'
import { EnthusiasmAction } from './actions'
import './index.css'
import * as serviceWorker from './serviceWorker'

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm)

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
