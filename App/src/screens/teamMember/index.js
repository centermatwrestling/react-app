import React, { Component } from 'react'
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

import {TeamHeader} from '../../components'

import {formatScore} from '../../utils'

import {GenericLayout} from '../'

const numberWidth = 55

const generateContent = (props, teamMember) => {
  return <View>
    {generateRankRecords(props,teamMember)}
    {generateBouts(props,teamMember)}
  </View>
}

const generateBouts = (props, {id, bouts=[]}) => {
  return <View>
    <View style={styles.row}>
      <Text style={{
        ...styles.rowItemHeader,
        width:110
      }}>Date</Text>
      <Text style={{
        ...styles.rowItemHeader,
        width:110
      }}>Opponent</Text>
      <Text style={{
        ...styles.rowItemHeader,
        width:30
      }}>W/L</Text>

      <Text style={{
        ...styles.rowItemHeader,
        width:numberWidth
      }}>Result</Text>

      <Text style={{
        ...styles.rowItemHeader,
        width:numberWidth
      }}>Score</Text>
    </View>
    {
      bouts.map((bout) => (
        <View style={styles.row}>
          <Text style={{
            ...styles.rowItem,
            width:110
          }}>{bout.eventMatchup.date}</Text>
          <Text style={{
            ...styles.rowItem,
            width:110
          }}>{bout.opponentMember.id === id ? _.get(bout,'opponent2Member.name','Unknown') : bout.opponentMember.name}</Text>
          <Text style={{
            ...styles.rowItem,
            width:30
          }}>{bout.winner.id === id ? 'W' : 'L'}</Text>

          <Text style={{
            ...styles.rowItem,
            width:numberWidth
          }}>{bout.winType}</Text>

          <Text style={{
            ...styles.rowItem,
            width:numberWidth
          }}>{formatScore(bout,id)}</Text>
        </View>
      ))
    }
  </View>
}

const generateRankRecords = (props, {rankRecords=[]}) => {
  return <View>
    <View style={styles.row}>
      <Text style={{
        ...styles.rowItemHeader,
        width:120
      }}>Year</Text>
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
    {
      rankRecords.map((rr) => (
        <View style={styles.row}>
          <Text style={{
            ...styles.rowItem,
            width:120
          }}>{`${rr.year-1} - ${rr.year}`}</Text>
          <Text style={{
            ...styles.rowItem,
            width:numberWidth
          }}>{rr.wins}</Text>
          <Text style={{
            ...styles.rowItem,
            width:numberWidth
          }}>{rr.loses}</Text>
          <Text style={{
            ...styles.rowItem,
            width:numberWidth
          }}>{rr.fall}</Text>

          <Text style={{
            ...styles.rowItem,
            width:numberWidth
          }}>{rr.tf}</Text>

          <Text style={{
            ...styles.rowItem,
            width:numberWidth
          }}>{rr.md}</Text>
        </View>
      ))
    }
  </View>
}

class TeamMember extends Component {
  render() {
    return GenericLayout({
      props: this.props,
      header: <TeamHeader
        teams={[this.props.teamMember.team]}
        name={this.props.teamMember.name}
        navigation={this.props.navigation}
        dispatch={this.props.dispatch}
      />,
      content: generateContent(this.props, this.props.teamMember)
    })
  }
}
const mapStateToProps = state => {
  return {
    ...state
  }
}

export default {
  key: 'TeamMember',
  component: connect(mapStateToProps)(TeamMember),
  path: "/teamMember"
}
