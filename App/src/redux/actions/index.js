import sendNotification from './notificationAction'
import fetchScoreBoard from './scoreBoardAction'
import setEvent from './eventAction'
import setTeam from './teamAction'
import fetchBouts from './boutAction'
import fetchTeamMember from './teamMemberAction'

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
const url = 'http://192.168.2.133:8888'

export {
  url,
  setTitle,
  setEvent,
  setTeam,
  fetchTeamMember,
  loadIp,
  fetchScoreBoard,
  fetchBouts,
  sendNotification
}
