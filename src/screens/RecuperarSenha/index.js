import React from 'react';
import { useNavigation, useState } from '@react-navigation/native';
import { Container, InputArea, CustonButton, CustonButtonText, SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold } from './styles';
import SignInput from '../../components/SignInput';
import * as Svg from 'react-native-svg';
import Logo from '../../assets/claquete.svg';
import EmailIcon from '../../assets/email.svg';
export default () => {
    
    const navigation = useNavigation();

   // const [emailText, setEmailText] = setState(''); 

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'LogIn'}]
        });
    }

    //Código Firebase recuperação de email. Bastar chamar esse metódo no click do botão.    
    /*const RecuperarSenha = () => {
        firebase.auth()senderPasswordResetEmail('emailText').catch((error)=>{
            alert(error.code);
        });
        alert('Um link foi enviado para o seu email');
        navigation.navigate('LogIn');
    }*/ 

    return (
        <Container>
            <Logo width="120" height="120" viewbox="0 0 512 512"/>
            
            <InputArea>
                <SignInput IconSvg={EmailIcon} placeholder="Digite seu e-mail" />

                <CustonButton onPress={handleMessageButtonClick}> 
                    <CustonButtonText>Enviar</CustonButtonText>
                </CustonButton>
            </InputArea> 
        </Container>
    );
}