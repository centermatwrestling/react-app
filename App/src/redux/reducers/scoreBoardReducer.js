export default (state={matchups:[]}, action) => {
  if (action.type === 'scoreboard') {
    const matchups = state.matchups
    matchups[action.levelOfPlay]= action.value.matchups
    return {
      ...state,
      matchups,
      loading: action.loading
    }
  }
  return state
}
