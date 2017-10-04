import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {connect} from 'react-redux'

import { Body, Button, Container, Header, Title } from "native-base"

import {fetchScoreBoard} from '../../redux/actions'
import styles from './styles'
import {GenericLayout} from '../'
import {EventCard} from '../../components'

import Router from '../../router'


const generateContent = (scoreboard) => {
  const events = scoreboard.matchups.map(matchup => (
    {
      id: matchup.id,
      date: new Date(matchup.startDate).toISOString().slice(0, 10),
      status: matchup.status,
      teams: [matchup.team, matchup.team2].map((team) => {
        if (team){
          return {
            id: team.id,
            name: team.name,
            score: team.score,
            logo: `https://devcentermat.github.io/cdn_ssl/images/team/team${team.id}.png`
          }
        }
        return {}
      })
    }
  ))
  return events.map((event) => (
    <EventCard key={event.id} event={event}/>
  ))
}


class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchScoreBoard({
      date: new Date(1512928800000),
      levelOfPlay: 2
    }))
  }

  render() {
    return GenericLayout({
      content: generateContent(this.props.scoreboard),
      props: this.props,
      title: "Home",
      navigate: "Profile"
    })
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default {
  key: 'Home',
  component: connect(mapStateToProps)(Home),
  path: "/"
}
