import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'
import {connect} from 'react-redux'

import { Body, Button, Container, Header, ScrollableTab, Spinner, Title, Tab, Tabs, Text } from "native-base"

import {fetchScoreBoard} from '../../../redux/actions'
import styles from './styles'
import {EventCard} from '../../../components'

import Router from '../../../router'

const date = new Date(1512928800000)
const noResults = `No Results for ${date.toISOString().slice(0, 10)}`

const generateContent = ({navigation}, matchups, loading) => {
  if(matchups) {
    const events = matchups.map(matchup => (
      {
        id: matchup.id,
        name: matchup.name,
        date: new Date(matchup.startDate).toISOString().slice(0, 10),
        status: matchup.status,
        teams: [matchup.team, matchup.team2].map((team) => {
          if (team){
            return {
              id: team.id,
              color: team.color.split(',')[0],
              name: team.name,
              score: team.score,
              logo: `https://devcentermat.github.io/cdn_ssl/images/team/team${team.id}.png`
            }
          }
          return {}
        })
      }
    ))
    return <Tab>
      {
        events.map((event) => (
          <EventCard key={event.id} event={event} navigation={navigation}/>
        ))
      }
    </Tab>
  } else {
    return <View>
      <Spinner color='black' style={loading ? {} : {display:'none'}} />
      <Text style={loading ? {display:'none'} : {}} >{noResults}</Text>
    </View>
  }
}

class HomeTab extends Component {
  componentDidMount() {
    this.props.dispatch(fetchScoreBoard({
      date: date,
      levelOfPlay: this.props.levelOfPlay
    }))
  }

  render() {
    return generateContent(this.props,this.props.scoreboard.matchups[this.props.levelOfPlay], this.props.scoreboard.loading)
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(HomeTab)
