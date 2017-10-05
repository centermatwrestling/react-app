import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'
import {connect} from 'react-redux'

import { Body, Button, Container, Header, ScrollableTab, Title, Tab, Tabs, Text } from "native-base"

import {fetchScoreBoard} from '../../redux/actions'
import styles from './styles'
import {GenericLayout} from '../'
import {EventCard} from '../../components'
import HomeTab from './tab'

import Router from '../../router'


const generateContent = (props) => {
  return <Tabs renderTabBar={()=> <ScrollableTab />}>
    <HomeTab
      heading='Div I'
      levelOfPlay={2}
      navigation={props.navigation}
    />
    <HomeTab
      heading='Div II'
      levelOfPlay={3}
      navigation={props.navigation}
    />
    <HomeTab
      heading='Div III'
      levelOfPlay={4}
      navigation={props.navigation}
    />
    <HomeTab
      heading='NAIA'
      levelOfPlay={5}
      navigation={props.navigation}
    />
    <HomeTab
      heading='NJCAA'
      levelOfPlay={6}
      navigation={props.navigation}
    />
    <HomeTab
      heading='UWW'
      levelOfPlay={7}
      navigation={props.navigation}
    />
  </Tabs>

}


class Home extends Component {
  render() {
    return GenericLayout({
      content: generateContent(this.props),
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
