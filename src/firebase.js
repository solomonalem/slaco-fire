import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDdGwzuzlLi6xz5NfHf2YswLzxnkHNoNHk',
	authDomain: 'slaco-7d313.firebaseapp.com',
	projectId: 'slaco-7d313',
	storageBucket: 'slaco-7d313.appspot.com',
	messagingSenderId: '937631837619',
	appId: '1:937631837619:web:02351e905604ecee44afc6',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
