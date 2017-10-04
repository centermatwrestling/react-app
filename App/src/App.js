import React, { Component } from 'react'
import _ from 'lodash'

import Router from './router'
import * as screens from './screens'
import store from './redux'

import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm'

const registry = _.filter(_.mapValues(screens, (screen) => {
  return {
    ...screen
  }
}), 'component')
console.log("store", store)
Router.register(registry, store)
