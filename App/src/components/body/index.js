import React, { Component } from 'react'
import { Body as NativeBody } from "native-base"

export default class Body extends Component {

  render() {
    return window.document
      ?
      <div props={this.props}/>
      :
      <NativeBody props={this.props}/>
  }
}
