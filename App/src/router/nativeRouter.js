import React from 'react'
import {
  AppRegistry
} from 'react-native'
import {
  StackNavigator,
  addNavigationHelpers
} from 'react-navigation'

import {Provider, connect} from 'react-redux'

const NativeRouter = (registry, store) => {

  const AppNavigator = StackNavigator(_.keyBy(registry, (item) => {
    item.screen = item.component
    return item.key
  }),
  { headerMode: 'none' })

  class App extends React.Component {
    render() {
      return (
        <AppNavigator  />
      )
    }
  }

  const mapStateToProps = (state = {}) => ({
    nav: state.nav
  })

  const AppWithNavigationState = connect(mapStateToProps)(App)

  class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      )
    }
  }
  AppRegistry.registerComponent('App', () => Root)
}
export default {
  register: NativeRouter,
  navigate: (props, location) => {
    props.navigation.navigate(location)
  }
}
