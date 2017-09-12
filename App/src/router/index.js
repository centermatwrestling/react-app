import NativeRouter from './nativeRouter'
import WebRouter from './webRouter'

const Router = window.document ? WebRouter : NativeRouter

export default Router
