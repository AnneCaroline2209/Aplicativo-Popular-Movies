import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, InputArea, CustonButton, CustonButtonText } from './styles';
import SignInput from '../../components/SignInput';
import { Alert } from 'react-native';

import Logo from '../../../assets/claquete.svg';
import EmailIcon from '../../../assets/email.svg';

import firebase from '../../FirebaseConnection';

export default () => {
    
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState(''); 
 
    const RecuperarSenha = () => {

        firebase.auth().sendPasswordResetEmail(emailField).catch((error)=>{
            alert(error.code);
          });
          Alert.alert( 
            "Aviso!",
            "Um link foi enviado para o e-mail cadastrado.",
            [{
                text: "Ok"
                
            }]
        )
        navigation.navigate('LogIn');
    } 

    return (
        <Container>
            <Logo width="120" height="120" viewbox="0 0 512 512"/>
            
            <InputArea>
                <SignInput 
                IconSvg={EmailIcon} 
                placeholder="Digite seu e-mail" 
                value={emailField}
                onChangeText={t=>setEmailField(t)}  
                />

                <CustonButton onPress={RecuperarSenha}> 
                    <CustonButtonText>Enviar</CustonButtonText>
                </CustonButton>
            </InputArea> 
        </Container>
    );
}