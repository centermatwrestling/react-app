export default (state={}, action) => {
  if (action.type === 'teamMember') {
    return action.value
  }
  return state
}
