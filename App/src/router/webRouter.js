import React, { Component } from 'react'
import _ from 'lodash'
import {
  AppRegistry
} from 'react-native'
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import {ConnectedRouter, push} from 'react-router-redux'

const WebRouter = (registry, store) => {
  const RouterApp = () => (
    <Provider store = {store}>
      <Router history={browserHistory}>
        <div>
          {registry.map(item => (
            <Route exact path={item.path} component={item.component}/>
          ))}
        </div>
      </Router>
    </Provider>
  )
  const mapStateToProps = state => {
    console.log("State",state)
    return {
      ...state
    }
  }
  AppRegistry.registerComponent('App', () => RouterApp)
  AppRegistry.runApplication('App', {
    initialProps: {
      store
    },
    rootTag: document.getElementById('react-root')
  })
}
export default {
  register: WebRouter,
  navigate: (props, location) => {
    props.dispatch(push(location === 'Home' ? '/' : location))
  }
}
