import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {connect} from 'react-redux'

import { Body, Button, Container, Header, Title } from "native-base"

import {CMWHeader} from '../../components'
import styles from './styles'

import Router from '../../router'

import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm'


class Home extends Component {

  componentDidMount() {

    // iOS: show permission prompt for the first call. later just check permission in user settings
    // Android: check permission in user settings
    FCM.requestPermissions({badge: false, sound: true, alert: true}).then(()=>console.log('granted')).catch(()=>alert('notification permission rejected'))

    FCM.getFCMToken().then(token => {
      // store fcm token in your server
      //alert(token)
      FCM.subscribeToTopic('/topics/test')
    })

    FCM.on(FCMEvent.RefreshToken, (token) => {
      console.log(token)
    // fcm token may not be available on first load, catch it here
    })

    this.notificationListener = FCM.on(FCMEvent.Notification, (notif) => {
      // optional, do some component related stuff
      alert(JSON.stringify(notif))
    })

    //alert(this.notificationListener)

    FCM.presentLocalNotification({
      id: "UNIQ_ID_STRING"+Math.random()                                 // notification when app is in foreground (local & remote)
    })

    // initial notification contains the notification that launchs the app. If user launchs app by clicking banner, the banner notification info will be here rather than through FCM.on event
    // sometimes Android kills activity when app goes to background, and when resume it broadcasts notification before JS is run. You can use FCM.getInitialNotification() to capture those missed events.
    //FCM.getInitialNotification().then(notif=>alert(JSON.stringify(notif)))
  }

  render() {
    console.log("this store",this.props)
    const props = this.props
    // const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Title><Text>{props.title.value}</Text></Title>
        </Header>
        <View style={styles.container}>
          <Button onPress = {() => Router.navigate(props, 'Profile')}>
            <Text>Chat</Text>
          </Button>
          <Text style={styles.welcome}>
          Welcome to React Native Brian!
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
  key: 'Home',
  component: connect(mapStateToProps)(Home),
  path: "/"
}
