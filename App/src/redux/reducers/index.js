import {combineReducers} from 'redux'
const title = (state = { value: 'Home'}, action) => {
  if(action.type === 'setTitle') {
    return {
      value: action.value
    }
  }
  return state
}

export default combineReducers({
  title
})
