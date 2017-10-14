import React, { Component } from 'react'
import _ from 'lodash'
import {
  AppRegistry,
  Text,
  Image,
  ScrollView,
  View
} from 'react-native'
import {connect} from 'react-redux'

import { Body, Button, Container, Header, Icon, Input, Item,List, ListItem, Spinner, Title, Thumbnail } from "native-base"
import styles from './styles'
import Router from '../../router'
import {fetchSearchResults,setSearchResults} from '../../redux/actions'
import {logoUri} from '../../components/header'

const searchFetch = (props, value) => {
  props.dispatch(fetchSearchResults(value))
}

const closeResults = (props) => {
  props.dispatch(setSearchResults({value:null}, false))
}

const resultClick = (props, item) => {
  Router.navigate(props, item.type === 'EVENT' ? 'Event' : 'Team')
}

class SideBar extends Component {
  render() {
    const search = this.props.search
    const loading = search.loading
    const showResults = search.results
    return <View style={styles.root}>
      <View style={styles.searchPanel} >
        <View style={styles.row}>
          <Image
            source={{uri:logoUri}}
            style={styles.logo}
          />
        </View>
        <View style={styles.rowEnd}>
          <Button transparent
            style={styles.settingButton}
          >
            <Icon name="settings"
              style={styles.settingsIcon}
            />
          </Button>
        </View>

      </View>
      <View>
        <Item style={styles.searchBar}>
          <Icon name="ios-search" />
          <Input
            placeholder="Search For Teams/Wresters/Events"
            onChangeText={(value) => searchFetch(this.props, value)}
          />

          <Button transparent
            onPress={() => closeResults(this.props)}
          >
            <Icon name="close" />
          </Button>
        </Item>
      </View>
      <View style={{
        ...styles.resultPanel,
        ...showResults ? {} : {display:'none'}
      }} >
        <Spinner color='black' style={loading ? {} : {display:'none'}} />
        <Text style={loading || search.results ? {display:'none'} : {}} >No Results match</Text>
        <ScrollView>
          <List>
            {
              showResults ? showResults.map(item => (
                <ListItem onPress={() => resultClick(this.props, item)}>
                  <Thumbnail source={{uri:item.url}} style={styles.listItemLogo}/>
                  <Text>{item.name}</Text>
                </ListItem>
              )) : null
            }
          </List>
        </ScrollView>
      </View>
      <View style={styles.favorites} >

      </View>

    </View>

  }
}
const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(SideBar)
