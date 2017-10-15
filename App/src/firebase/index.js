import RNFirebase from 'react-native-firebase'

const configurationOptions = {
  debug: true
}

const firebase = RNFirebase.initializeApp(configurationOptions)
firebase.auth().signInAnonymously()
  .then((user) => {
    alert('Anonymous user successfully logged in')
  })
  .catch((err) => {
    alert('Anonymous user signin error')
  })
export default firebase
