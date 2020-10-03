import firebase from './src/FirebaseConnection';
class PopularMovies {
    logout(){
        firebase.auth().signOut();
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
    RecuperarSenha(email){
        return firebase.auth().senderPasswordResetEmail(email);
    }
}

export default new PopularMovies();