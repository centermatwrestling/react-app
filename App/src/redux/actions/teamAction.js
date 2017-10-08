import {url} from './'

const setTeamPayload = (teamPayload) => {
  return {
    type: 'teamPayload',
    value: teamPayload
  }
}

export default (team) => {
  return (dispatch) => {
    dispatch(setTeamPayload({team}))
    return fetch(`${url}/rest/team/${team.id}/payload`)
      .then(response=>response.json())
      .then((resp) => {
        dispatch(setTeamPayload(resp))
      })
  }
}
