import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router-dom'
import thunk from 'redux-thunk'
import './actions'
import reducers from './reducers'
//browserHistory is null and I dont know why
const middleware = routerMiddleware(browserHistory)

const store = createStore(reducers, applyMiddleware(middleware, thunk))

export default store
