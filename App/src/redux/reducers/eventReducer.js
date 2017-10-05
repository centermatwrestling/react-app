export default (state={}, action) => {
  if (action.type === 'event') {
    return {
      ...state,
      event: action.value
    }
  }
  return state
}
