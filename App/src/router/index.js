import NativeRouter from './nativeRouter'
import WebRouter from './webRouter'

import {setTitle, loadIp} from '../redux/actions'

const Router = window.document ? WebRouter : NativeRouter

const RouterWrapper = {
  ...Router,
  navigate: (props, location) => {
    props.dispatch(setTitle(location))
    props.dispatch(loadIp())
    Router.navigate(props, location)
  }
}

export default RouterWrapper
