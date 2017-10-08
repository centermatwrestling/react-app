import React, { Component } from 'react'
import _ from 'lodash'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {connect} from 'react-redux'

import { Body, Button, Container, Header, Title } from "native-base"
import styles from './styles'
import Router from '../../router'
import {TeamHeader, BoxScore} from '../../components'

import {fetchTeamMember} from '../../redux/actions'

import {GenericLayout} from '../'

const teamMemberClick = (props, teamMember, team) => {
  props.dispatch(fetchTeamMember(teamMember, team))
  Router.navigate(props, 'TeamMember')
}

const generateContent = (props, event) => {
  const team = event.teams[0]
  const team2 = event.teams[1]
  const bouts = event.bouts ? event.bouts : []
  return <View>
    <View style={styles.nameBar}>
      <Text style={styles.name}>{`${team.name}\n${team.score}`}</Text>
      <Text style={styles.name}>{`${event.date}\n${event.status}`}</Text>
      <Text style={styles.name}>{`${team2.name}\n${team2.score}`}</Text>
    </View>
    <View>
      <BoxScore style={{marginTop:30}} event={event}/>
      <View style={styles.row}>
        <Text style={{
          ...styles.rowItemHeader,
          width:50
        }}></Text>
        <Text style={{
          ...styles.rowItemHeader,
          flex:1
        }}>Away</Text>
        <Text style={{
          ...styles.rowItemHeader,
          flex:1
        }}>Home</Text>
        <Text style={{
          ...styles.rowItemHeader,
          width:50
        }}>Type</Text>
        <Text style={{
          ...styles.rowItemHeader,
          width:50
        }}>Score</Text>

      </View>
      { bouts.map((bout)=> {
        return <View style={styles.row}>
          <Text style={{
            ...styles.rowItem,
            width:50
          }}>{bout.weightClass}</Text>
          <Button transparent
            style={{
              ...styles.rowItem,
              marginLeft:-10,
              flex:1
            }}
            onPress={()=> teamMemberClick(props, bout.opponent2Member, team2)}>
            <Text
              style={{
                color:team2.color
              }}
            >{_.get(bout,'opponent2Member.name')}</Text>
          </Button>
          <Button transparent
            style={{
              ...styles.rowItem,
              marginLeft:-30,
              flex:1
            }}
            onPress={()=> teamMemberClick(props, bout.opponentMember, team)}>
            <Text
              style={{
                color:team.color
              }}
            >{_.get(bout,'opponentMember.name')}</Text>
          </Button>
          <Text style={{
            ...styles.rowItem,
            width:50
          }}>{bout.winType}</Text>
          <Text style={{
            ...styles.rowItem,
            width:50
          }}>{`${_.get(bout,'opponent2Score')}-${_.get(bout,'opponentScore')}`}</Text>

        </View>
      })}
    </View>
  </View>
}

class Event extends Component {
  render() {
    return GenericLayout({
      props: this.props,
      header: <TeamHeader
        teams={this.props.eventPayload.event.teams}
        navigation={this.props.navigation}
        dispatch={this.props.dispatch}
      />,
      content:generateContent(this.props, this.props.eventPayload.event)
    })
  }
}
const mapStateToProps = state => {
  return {
    ...state
  }
}

export default {
  key: 'Event',
  component: connect(mapStateToProps)(Event),
  path: "/event"
}
