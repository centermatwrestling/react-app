import {mapTeam} from '../../utils/mapper'

export default (state={}, action) => {
  if (action.type === 'teamPayload') {
    return {
      ...action.value,
      team: mapTeam(action.value.team)
    }
  }
  return state
}
