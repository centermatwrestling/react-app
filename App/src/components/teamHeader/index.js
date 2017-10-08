import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  Text,
  View
} from 'react-native'

import { Body, Button, Container, Header, Icon, Left, Right, Title, Thumbnail, Picker, Item } from "native-base"
import styles from './styles'

import {setTeam} from '../../redux/actions'

import Router from '../../router'

const logoUri = "https://devcentermat.github.io/cdn_ssl/images/logo.png"

let language = "key0"
const onValueChange2 = (value: string) => {
  language = value
}

const back = (props) => {
  Router.back(props)
}

const onTeam = (props, team) => {
  props.dispatch(setTeam(team))
  Router.navigate(props, 'Team')
}

const TeamHeader = ({
  title,
  dispatch,
  teams,
  showName,
  name,
  navigation
}) => {
  const team = teams[0]
  const team2 = teams[1]
  return <Header
    iosBarStyle="light-content"
    style={styles.header}
  >
    <Body style={styles.body}>
      <View style={{
        ...styles.innerds,
        backgroundColor: team.color,
        flex:1,
        flexDirection: 'row'
      }}>
        <Button transparent
          style={{height:'100%'}}
          onPress={() => back({navigation})}
        >
          <Icon name='arrow-back' style={{color:'white'}}  />
        </Button>
        <Button transparent
          onPress={() => onTeam({navigation, dispatch}, team)}
        >

          <Thumbnail
            source={{uri:team.logo}}
            style={styles.logo}
          />
        </Button>
        <Text style={showName || name ? {color:'white'} : {display: 'none'}}>{name ? name : team.name}</Text>
      </View>
      <View style={team2 ? {
        ...styles.innerds,
        backgroundColor: team2.color,
      } : {display: 'none'}}>
        <Button transparent
          onPress={() => onTeam({navigation, dispatch}, team2)}
        >
          <Thumbnail
            source={{uri:team2 ? team2.logo : ''}}
            style={styles.logo}
          />
        </Button>
      </View>
    </Body>
  </Header>
}

export default TeamHeader
