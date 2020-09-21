//const { ReactNativeFirebase } = require("@react-native-firebase/app");


class PopularMovies {
    logout(){
        ReactNativeFirebase.auth().signOut();
    }

    addAuthListener(callback){
        firebase.auth().onAuthStateChanged(callback);
    }

    Login (email, senha){
        return firebase.auth().signInWithEmailAndPassword(email, senha);
    }

    Cadastro (email, senha){
        return firebase.auth().createUserWithEmailAndPassword(email, senha);
    }
}

export default new PopularMovies();