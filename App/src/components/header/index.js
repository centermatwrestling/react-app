import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { Body, Button, Container, Header, Title } from "native-base"
import styles from './styles'

const CMWHeader = ({title}) => (
  <Container>
    <Header>
      <Title><Text>CMW</Text></Title>
    </Header>
  </Container>
)

export default CMWHeader
