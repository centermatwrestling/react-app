import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {connect} from 'react-redux'
import {TeamHeader} from '../../components'

import { Body, Button, Container, Header, Title } from "native-base"
import styles from './styles'
import Router from '../../router'

import {GenericLayout} from '../'

class Team extends Component {
  render() {
    return GenericLayout({
      props: this.props,
      header: <TeamHeader
        teams={[this.props.teamPayload.team]}
        navigation={this.props.navigation}
        dispatch={this.props.dispatch}
      />,
      content: <Text>{this.props.teamPayload.team.name}</Text>
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
