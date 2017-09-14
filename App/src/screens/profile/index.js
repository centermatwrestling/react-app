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

class Profile extends Component {
  render() {
    const props = this.props
    console.log("this store",this.props)
    // const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Title><Text>{props.title.value}</Text></Title>
        </Header>
        <View style={styles.container}>
          <Button onPress = {() => Router.navigate(props,'Home')}>
            <Text>Chat</Text>
          </Button>
          <Text style={styles.welcome}>
          Welcome to React Native Profile!
          </Text>
          <Text style={styles.instructions}>
          To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
          </Text>
        </View>
      </Container>
    )
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
