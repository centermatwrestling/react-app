import React from 'react'
import {
  AppRegistry
} from 'react-native'
import {
  StackNavigator,
  addNavigationHelpers,
  NavigationActions
} from 'react-navigation'

import {Provider, connect} from 'react-redux'

import {Drawer,Text} from 'native-base'

import SideBar from '../screens/sideBar'

import firebase from '../firebase'

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
    ...state
  })

  const AppWithNavigationState = connect(mapStateToProps)(App)

  class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Drawer
            ref={(ref) => { store.dispatch({type:'drawer',value:ref}) }}
            content={<SideBar  />}
            onClose={() => store.dispatch({type:'closeDrawer'})} >

            <AppWithNavigationState />
          </Drawer>
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
  },
  back: (props) => {
    props.navigation.dispatch(NavigationActions.back())
  }
}
