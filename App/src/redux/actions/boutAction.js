import {url} from './'
import {mapTeam} from '../../utils/mapper'

const setEvent = (event) => {
  return {
    type: 'event',
    value: event
  }
}

export default (event) => {
  return (dispatch) => {
    return fetch(`${url}/rest/eventmatchup/${event.id}/bout`)
      .then(response=>response.json())
      .then((resp) => {
        event.bouts = resp
        _.forEach(event.bouts,(bout) => {
          // _.set(bout,'opponentMember.team', mapTeam(bout,'opponentMember.team'))
          // _.set(bout,'opponent2Member.team', mapTeam(bout,'opponent2Member.team'))
        })
        dispatch(setEvent(event))
      })
  }
}
