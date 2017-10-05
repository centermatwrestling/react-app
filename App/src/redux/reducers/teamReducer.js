export default (state={}, action) => {
  if (action.type === 'team') {
    return {
      ...state,
      team: action.value
    }
  }
  return state
}
