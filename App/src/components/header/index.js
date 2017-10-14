import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  Text,
  View
} from 'react-native'

import { Body, Button, Container, Header, Title, Left, Picker, Item, Icon } from "native-base"
import styles from './styles'

export const logoUri = "https://devcentermat.github.io/cdn_ssl/images/logo.png"

const openDrawer = ({dispatch}) => {
  dispatch({type:'openDrawer'})
}

const CMWHeader = ({
  props,
  title
}) => (
  <Header
    iosBarStyle="light-content"
    style={styles.header}
  >
    <Left style={styles.left}>
      <Button transparent
        onPress={() => openDrawer(props)}
      >
        <Icon name='menu'/>
      </Button>
    </Left>
    <Body>
      <Image
        source={{uri:logoUri}}
        style={styles.logo}
      />
    </Body>
  </Header>
)

export default CMWHeader
