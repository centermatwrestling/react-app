import React, { Component } from 'react'
import _ from 'lodash'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {connect} from 'react-redux'
import {TeamHeader, EventCard} from '../../components'

import { Body, Button, Container, Header, Title, ScrollableTab, Spinner, Tab, Tabs, } from "native-base"
import styles from './styles'
import Router from '../../router'

import {GenericLayout} from '../'
import {mapMatchups} from '../../utils/mapper'

const getValue = (value) => {
  return value === -1 ? 'n/a' : value
}

const numberWidth = 40

const generateRoster = ({teamPayload}) => {
  const roster = teamPayload.roster ? teamPayload.roster : []
  return <View>
    <View style={styles.row}>
      <Text style={{
        ...styles.rowItemHeader,
        width:50
      }}>Wt Class</Text>
      <Text style={{
        ...styles.rowItemHeader,
        flex:1
      }}>Name</Text>
      <Text style={{
        ...styles.rowItemHeader,
        width:numberWidth
      }}>W</Text>
      <Text style={{
        ...styles.rowItemHeader,
        width:numberWidth
      }}>L</Text>
      <Text style={{
        ...styles.rowItemHeader,
        width:numberWidth
      }}>Fall</Text>

      <Text style={{
        ...styles.rowItemHeader,
        width:numberWidth
      }}>Tech Fall</Text>

      <Text style={{
        ...styles.rowItemHeader,
        width:numberWidth
      }}>Maj Dec</Text>

    </View>
    { _.sortBy(roster,'weightClass').map((roster)=> {
      return <View style={styles.row}>
        <Text style={{
          ...styles.rowItem,
          width:50
        }}>{roster.weightClass}</Text>
        <Text style={{
          ...styles.rowItem,
          flex:1
        }}>{roster.teamMember.name}</Text>
        <Text style={{
          ...styles.rowItem,
          width:numberWidth
        }}>{getValue(roster.wins)}</Text>
        <Text style={{
          ...styles.rowItem,
          width:numberWidth
        }}>{getValue(roster.loses)}</Text>
        <Text style={{
          ...styles.rowItem,
          width:numberWidth
        }}>{getValue(roster.fall)}</Text>
        <Text style={{
          ...styles.rowItem,
          width:numberWidth
        }}>{getValue(roster.tf)}</Text>
        <Text style={{
          ...styles.rowItem,
          width:numberWidth
        }}>{getValue(roster.md)}</Text>

      </View>
    })}
  </View>
}

const generateSchedule = ({navigation, teamPayload}) => {
  const loading = teamPayload.eventMatchups === undefined
  if(teamPayload.eventMatchups) {
    const events = mapMatchups(_.reverse(teamPayload.eventMatchups))
    return <Tab>
      {
        events.map((event) => (
          <EventCard key={event.id} event={event} navigation={navigation}/>
        ))
      }
    </Tab>
  } else {
    return <View>
      <Spinner color='black' style={loading ? {height:300} : {display:'none'}} />
      <Text style={loading ? {display:'none'} : {}} >No Schedule</Text>
    </View>
  }
}

const generateContent = (props) => {
  const team = props.teamPayload.team
  return <Tabs>
    <Tab
      tabStyle={ styles.tab(team)}
      textStyle={ styles.tab(team)}
      activeTabStyle={ styles.activeTab(team)}
      activeTextStyle={ styles.activeTab(team)}
      heading='Schedule'
    >
      {generateSchedule(props)}
    </Tab>
    <Tab
      tabStyle={ styles.tab(team)}
      textStyle={ styles.tab(team)}
      activeTabStyle={ styles.activeTab(team)}
      activeTextStyle={ styles.activeTab(team)}
      heading='Roster'
    >
      {generateRoster(props)}
    </Tab>
  </Tabs>
}

class Team extends Component {
  render() {
    return GenericLayout({
      props: this.props,
      header: <TeamHeader
        teams={[this.props.teamPayload.team]}
        showName
        navigation={this.props.navigation}
        dispatch={this.props.dispatch}
      />,
      content: generateContent(this.props)
    })
  }
}
const mapStateToProps = state => {
  return {
    ...state
  }
}

export default {
  key: 'Team',
  component: connect(mapStateToProps)(Team),
  path: "/team"
}
