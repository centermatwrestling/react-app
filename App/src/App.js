import React, { Component } from 'react'
import _ from 'lodash'

import Router from './router'
import * as screens from './screens'
import store from './redux'

const registry = _.filter(_.mapValues(screens, (screen) => {
  return {
    ...screen
  }
}), 'component')
console.log("store", store)
Router.register(registry, store)
