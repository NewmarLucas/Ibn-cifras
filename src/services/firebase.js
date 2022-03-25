import { initializeApp } from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD2GxcGsMSCkxwejhFNCUP2gKiHruZXGas',
  authDomain: 'ibn-cifras.firebaseapp.com',
  projectId: 'ibn-cifras',
  storageBucket: 'ibn-cifras.appspot.com',
  messagingSenderId: '98444621291',
  appId: '1:98444621291:web:309166e5257a4280b1d5ae',
  measurementId: 'G-M4FNHB7ZWF'
}

if (!firebase.apps.length) initializeApp(firebaseConfig)

export default firebase