import {combineReducers} from 'redux'
import notifications from './notificationReducer'
import scoreboard from './scoreBoardReducer'

const title = (state = { value: 'Home'}, action) => {
  if(action.type === 'setTitle') {
    return {
      value: action.value
    }
  }
  return state
}

export default combineReducers({
  title,
  notifications,
  scoreboard
})
