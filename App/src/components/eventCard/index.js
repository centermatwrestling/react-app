import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  Text,
  View
} from 'react-native'

import { Button, Container, Card, CardItem,
  Content, Header, Icon, Title } from "native-base"
import {connect} from 'react-redux'

import styles from './styles'

class EventCard extends Component {

  render() {
    const event = this.props.event
    return <Card style={styles.card}>
      <CardItem style={styles.cardItem}>
        <View style={styles.dateBar}>
          <View style={styles.date}>
            <Text>{event.date}</Text>
          </View>
          <View style={styles.icon}>
            <Button iconRight transparent >
              <Icon
                color="black"
                name={window.document ? 'arrow-swap' : 'swap'}
              />
            </Button>
          </View>
          <View style={styles.icon}>
            <Button iconRight transparent >
              <Icon
                color="black"
                name={window.document ? 'android-open' : 'open'}
              />
            </Button>
          </View>
        </View>
        <View style={styles.status}>
          <Text>{event.status}</Text>
        </View>
        {event.teams.map((team) => (
          <View key={team.name} style={styles.row}>
            <View style={styles.logoContainer} >
              <Image
                source={{uri:team.logo}}
                style={styles.logo}
              />
            </View>
            <View style={styles.name}>
              <Text>{team.name}</Text>
            </View>
            <View style={styles.score}>
              <Text>{team.score}</Text>
            </View>
          </View>
        )
        )}
      </CardItem>
    </Card>
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(EventCard)
