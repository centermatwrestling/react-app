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
  Content, Header, Spinner } from "native-base"

import {CMWHeader, Body, EventCard} from '../../components'
import styles from './styles'

import Router from '../../router'

const logoUri = 'https://devcentermat.github.io/cdn_ssl/images/team/team10.png'

const GenericLayout = ({
  content,
  header,
  props,
  navigate,
  showLoader=false,
  title
}) => (
  <Container>
    {header ? header : CMWHeader({title,props})}
    <View style={styles.container}>
      <Content >
        {content}
        <Spinner color='black' style={showLoader ? {} : {display:'none'}} />
      </Content>
    </View>
  </Container>
)

export default GenericLayout
