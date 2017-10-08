export const mapTeam = (team, matchup={}) => ({
  id: team.id,
  color: team.color.split(',')[0],
  name: team.name,
  score: team === matchup.team ? matchup.teamScore : matchup.team2Score,
  logo: `https://devcentermat.github.io/cdn_ssl/images/team/team${team.id}.png`
})

export const mapMatchup = (matchup) => {
  return {
    id: matchup.id,
    name: matchup.name,
    date: new Date(matchup.startDate).toISOString().slice(0, 10),
    status: matchup.status,
    weightClasses: matchup.weightClasses,
    teams: [matchup.team2, matchup.team].map((team) => {
      return team ? mapTeam(team, matchup) : {}
    })
  }
}
export const mapMatchups = (matchups) => {
  return matchups.map(mapMatchup)
}
