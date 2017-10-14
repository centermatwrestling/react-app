import {url} from './'

export const setSearchResults = (results, loading) => {
  return {
    type: 'searchResults',
    value: results,
    loading: loading
  }
}

export const fetchSearchResults = (search) => {
  return (dispatch) => {
    dispatch(setSearchResults([], true))
    return fetch(`${url}/rest/search?s=${search}`)
      .then(response=>response.json())
      .then((resp) => {
        dispatch(setSearchResults(resp, false))
      })
  }
}
