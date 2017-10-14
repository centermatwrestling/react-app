import {mapTeam} from '../../utils/mapper'

export default (state={}, action) => {
  if (action.type === 'drawer') {
    return {
      ref: action.value,
      state: 'close'
    }
  }
  if (action.type === 'openDrawer') {
    state.ref._root.open()
    return {
      ...state,
      state: 'open'
    }
  }
  if (action.type === 'closeDrawer') {
    state.ref._root.close()
    return {
      ...state,
      state: 'close'
    }
  }
  return state
}
