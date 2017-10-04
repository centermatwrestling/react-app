export default (state=[], action) => {
  if (action.type === 'notification') {
    const newState = state.slice()
    newState.push(action.value)
    return newState
  }
  return state
}
