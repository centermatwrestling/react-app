import {
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  card: {
    margin:20,
    height:'100%'
  },
  cardItem: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap:'nowrap'
  },
  date: {
    width:'100%',
    flex:1
  },
  dateBar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'nowrap',
    justifyContent: 'flex-end',
    width:'100%',
    marginBottom:0
  },
  icon: {
  },
  iconButton: {
    color: 'gray'
  },
  logo: {
    width: 50,
    height: 50
  },
  logoContainer: {
    height: 60,
    width: 100
  },
  name: {
    flex:1,
    marginTop:20
  },
  row: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap:'nowrap',
    justifyContent: 'flex-start',
    width:'100%',
    height:55
  },
  score: {
    width:30,
    marginTop:20
  },
  status: {
  }
})

export default styles
