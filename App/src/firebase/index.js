import RNFirebase from 'react-native-firebase'

const configurationOptions = {
  apiKey: "AIzaSyCcZ9CtB2xO03XzX3pCnQCSDBR_jP8_A7w",
  authDomain: "axial-reference-542.firebaseapp.com",
  databaseURL: "https://axial-reference-542.firebaseio.com",
  projectId: "axial-reference-542",
  storageBucket: "axial-reference-542.appspot.com",
  messagingSenderId: "317768110577"
}

const firebase = RNFirebase.initializeApp(configurationOptions)
firebase.auth().signInAnonymously()
  .then((user) => {
    alert('Anonymous user successfully logged in' + JSON.stringify(user))
  })
  .catch((err) => {
    alert('Anonymous user signin error' + err)
  })
export default firebase
