const setScoreBoard = (scoreboard) => {
  return {
    type: 'scoreboard',
    value: scoreboard
  }
}

export default ({date, levelOfPlay}) => {
  return (dispatch) => {
    return fetch(`https://app.centermatwrestling.com/rest/scoreboard?date=${date.getTime()}&levelOfPlay=${levelOfPlay}`)
      .then(response=>response.json())
      .then((resp) => {
        dispatch(setScoreBoard(resp))
      })
  }
}
