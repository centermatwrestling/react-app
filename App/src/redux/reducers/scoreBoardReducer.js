export default (state={matchups:[]}, action) => {
  if (action.type === 'scoreboard') {
    return {
      ...state,
      matchups: action.value.matchups
    }
  }
  return state
}
