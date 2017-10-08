import {url} from './'
import {mapMatchup} from '../../utils/mapper'

const setTeamMember = (teamMember, team) => {
  teamMember.team = team
  return {
    type: 'teamMember',
    value: teamMember
  }}

export default (teamMember, team) => {
  return (dispatch) => {
    dispatch(setTeamMember(teamMember, team))
    return fetch(`${url}/rest/teammember/${teamMember.id}/payload`)
      .then(response=>response.json())
      .then((resp) => {
        resp.teamMember.bouts = resp.bouts
        _.forEach(resp.teamMember.bouts,(bout) => {
          const matchup = mapMatchup(bout.eventMatchup)
          bout.eventMatchup = matchup
        })
        resp.teamMember.rankRecords = resp.rankRecords
        dispatch(setTeamMember(resp.teamMember, team))
      })
  }
}
