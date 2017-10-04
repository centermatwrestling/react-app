import sendNotification from './notificationAction'
import fetchScoreBoard from './scoreBoardAction'

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
  loadIp,
  fetchScoreBoard,
  sendNotification
}
