const formatScore = (bout, id) => {
  if(bout.winType === 'FALL') {
    const min = Math.floor(bout.pinTime/60)
    const sec = bout.pinTime%60
    return `${min}:${sec < 10 ? `0${sec}`: sec}`
  }
  if(bout.winType === 'FOR') {
    return''
  }
  if(bout.opponentMember.id === id) {
    return `(${bout.opponentScore} - ${bout.opponent2Score})`
  } else {
    return `(${bout.opponent2Score} - ${bout.opponentScore})`
  }
}

export {
  formatScore
}
