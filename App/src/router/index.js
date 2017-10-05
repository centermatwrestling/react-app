import NativeRouter from './nativeRouter'
import WebRouter from './webRouter'

import {setTitle, loadIp} from '../redux/actions'

const Router = window.document ? WebRouter : NativeRouter

const locations = []

const navigate = (props, location) => {
  locations.push(location)
  Router.navigate(props, location)
}

const RouterWrapper = {
  ...Router,
  navigate,
  back: (props) => {
    Router.back(props)
  }
}

export default RouterWrapper
