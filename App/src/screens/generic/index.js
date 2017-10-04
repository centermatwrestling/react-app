import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {connect} from 'react-redux'

import { Button, Container, Card, CardItem,
  Content, Header, Title } from "native-base"

import {CMWHeader, Body, EventCard} from '../../components'
import styles from './styles'

import Router from '../../router'

const logoUri = 'https://devcentermat.github.io/cdn_ssl/images/team/team10.png'

const GenericLayout = ({
  cards,
  content,
  props,
  events,
  navigate,
  title
}) => (
  <Container>
    {(CMWHeader({title}))}
    <View style={styles.container}>
      <Content >
        {content}
        <Button onPress = {() => Router.navigate(props, navigate)}>
          <Text>{title}</Text>
        </Button>
        <Text style={styles.welcome}>
      Welcome to React Native Brian!
        </Text>
        <Text style={styles.instructions}>
      To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
      Double tap R on your keyboard to reload,{'\n'}
      Shake or press menu button for dev menu
        </Text>
      </Content>
    </View>
  </Container>
)

export default GenericLayout
