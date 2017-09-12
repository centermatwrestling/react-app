import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router-dom'
import './actions'
import './reducers'
//browserHistory is null and I dont know why
const middleware = routerMiddleware(browserHistory)

const store = createStore((state = {}, action) => {
  console.log(state,action)
  return {
    ...state
  }
}, applyMiddleware(middleware))

export default store
