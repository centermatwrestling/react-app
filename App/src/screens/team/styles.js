import {
  StyleSheet
} from 'react-native'

const styles = {
  activeTab: (team) => ({
    backgroundColor: team.color,
    color: 'white'
  }),
  tab: (team) => ({
    backgroundColor: team.color,
    color: 'white'
  }),
  row: {
    flex:1,
    flexDirection:'row',
    marginTop:30
  },
  rowItem: {
  },
  rowItemHeader: {
    fontWeight:'bold',
    marginBottom:-20
  }
}

export default styles
