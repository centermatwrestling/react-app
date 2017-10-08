import {combineReducers} from 'redux'
import notifications from './notificationReducer'
import scoreboard from './scoreBoardReducer'
import eventPayload from './eventReducer'
import teamPayload from './teamReducer'
import teamMember from './teamMemberReducer'

const title = (state = { value: 'Home'}, action) => {
  if(action.type === 'setTitle') {
    return {
      value: action.value
    }
  }
  return state
}

export default combineReducers({
  eventPayload,
  title,
  notifications,
  scoreboard,
  teamPayload,
  teamMember
})
