import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

const FB = firebase.initializeApp(firebaseConfig)

export const DB = FB.firestore()
export const FS = firebase.firestore