import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAMXnVjbVvH-mRThVHPrphsNMMCnk47NIY',
  authDomain: 'chatapp-bd5bb.firebaseapp.com',
  projectId: 'chatapp-bd5bb',
  storageBucket: 'chatapp-bd5bb.appspot.com',
  messagingSenderId: '666759943692',
  appId: '1:666759943692:web:623ddd316263d4a44d4029',
  measurementId: 'G-3Z43J6BMZW',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

 export const pushMessage = ({name, text}) => {
  messagesRef.push({name, text})
}
