import sendNotification from './notificationAction'
import fetchScoreBoard from './scoreBoardAction'
import setEvent from './eventAction'
import setTeam from './teamAction'

const setTitle = (title) => {
  return {
    type:'setTitle',
    value: title
  }
}

const loadIp = () => {
  return (dispatch) => {
    return fetch('https://api.ipify.org/?format=json')
      .then(response=>response.json())
      .then((resp) => {
        dispatch(setTitle(resp.ip))
      })
  }
}


export {
  setTitle,
  setEvent,
  setTeam,
  loadIp,
  fetchScoreBoard,
  sendNotification
}
