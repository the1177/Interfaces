import firebase from 'firebase'

let config = {
    apiKey: 'AIzaSyBErTo2k6kLWBXPzI_0OTwRN6DmzcmOP_w',
    authDomain: 'interfaces-inventario.firebaseapp.com',
    databaseURL: 'https://interfaces-inventario.firebaseio.com',
    projectId: 'interfaces-inventario',
    storageBucket: 'interfaces-inventario.appspot.com',
    messagingSenderId: '743189328823'
  }
  
  let app = firebase.initializeApp(config)
  export const db = app.database()