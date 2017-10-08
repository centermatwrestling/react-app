import React, { Component } from 'react'
import _ from 'lodash'
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

const BoxScore = ({
  title,
  dispatch,
  event,
  style
}) => {
  const team = event.teams[0]
  const team2 = event.teams[1]
  const boutMap = _.keyBy(event.bouts,'weightClass')
  return <View style={{
    ...style,
    ...styles.row
  }}>
    <View style={styles.column}>
      <Button transparent
        onPress={() => onTeam({navigation, dispatch}, team)}
      >
        <Text style={styles.header} />
        <Thumbnail
          source={{uri:team.logo}}
          style={styles.logo}
        />
      </Button>
      <Button transparent
        onPress={() => onTeam({navigation, dispatch}, team2)}
      >
        <Thumbnail
          source={{uri:team2.logo}}
          style={styles.logo}
        />
      </Button>
    </View>
    { event.weightClasses.map((wc) => (
      <View style={styles.column}>
        <Text style={styles.header} >{wc}</Text>
        <Text style={styles.score} >{_.get(boutMap,`${wc}.team2Score`)}</Text>
        <Text style={styles.score} >{_.get(boutMap,`${wc}.teamScore`)}</Text>
      </View>
    ))}
    <View style={styles.column}>
      <Text style={styles.header} ></Text>
      <Text style={styles.total} >{team.score}</Text>
      <Text style={styles.total} >{team2.score}</Text>
    </View>

  </View>

}

export default BoxScore
