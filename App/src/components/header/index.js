import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  Text,
  View
} from 'react-native'

import { Body, Button, Container, Header, Title } from "native-base"
import styles from './styles'

const logoUri = "https://devcentermat.github.io/cdn_ssl/images/logo.png"

const CMWHeader = ({
  title
}) => (
  <Header
    iosBarStyle="light-content"
    style={styles.header}
  >
    {
      window.document
        ?
        <Image
          source={{uri:logoUri}}
          style={styles.logo}
        />
        :
        <Body>
          <Image
            source={{uri:logoUri}}
            style={styles.logo}
          />
        </Body>
    }
  </Header>
)

export default CMWHeader
