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

import {GenericLayout} from '../'

class Event extends Component {
  render() {
    return GenericLayout({
      props: this.props,
      header: <TeamHeader
        teams={this.props.eventPayload.event.teams}
        navigation={this.props.navigation}
        dispatch={this.props.dispatch}
      />,
      content:<Text>{this.props.eventPayload.event.name}</Text>
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
