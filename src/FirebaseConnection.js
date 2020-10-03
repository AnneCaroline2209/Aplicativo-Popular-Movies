import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDDNBAmrBoKQ-_5eFbWXj_7mxQkevJaNvc",
    authDomain: "popularmovies-d13de.firebaseapp.com",
    databaseURL: "https://popularmovies-d13de.firebaseio.com",
    projectId: "popularmovies-d13de",
    storageBucket: "popularmovies-d13de.appspot.com",
    messagingSenderId: "1006524444874",
    appId: "1:1006524444874:web:473c3b834010fffcec4433"
};

firebase.initializeApp(firebaseConfig);

export default firebase;