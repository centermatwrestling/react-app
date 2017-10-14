export default (state={results: []}, action) => {
  if (action.type === 'searchResults') {
    return {
      results: action.value,
      loading: action.loading
    }
  }
  return state
}
