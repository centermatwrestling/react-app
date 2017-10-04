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

import {GenericLayout} from '../'

class Profile extends Component {
  render() {
    return GenericLayout({
      props: this.props,
      title: "Profile",
      navigate: "Home",
    })
  }
}
const mapStateToProps = state => {
  return {
    ...state
  }
}

export default {
  key: 'Profile',
  component: connect(mapStateToProps)(Profile),
  path: "/profile"
}
