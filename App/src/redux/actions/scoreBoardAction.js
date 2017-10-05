const setScoreBoard = (scoreboard, levelOfPlay, loading) => {
  return {
    type: 'scoreboard',
    value: scoreboard,
    levelOfPlay,
    loading
  }
}

export default ({date, levelOfPlay}) => {
  return (dispatch) => {
    dispatch(setScoreBoard([], levelOfPlay, true))
    return fetch(`https://app.centermatwrestling.com/rest/scoreboard?date=${date.getTime()}&levelOfPlay=${levelOfPlay}`)
      .then(response=>response.json())
      .then((resp) => {
        dispatch(setScoreBoard(resp, levelOfPlay, false))
      })
  }
}
