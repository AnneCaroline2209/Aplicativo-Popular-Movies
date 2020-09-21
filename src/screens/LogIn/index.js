import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, InputArea, CustonButton, CustonButtonText, SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold } from './styles';
import SignInput from '../../components/SignInput';
import * as Svg from 'react-native-svg';
import Logo from '../../assets/claquete.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PopularMovies from '../../../Api';

export default () => {
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState(''); 
    const [passwordField, setPasswordField] = useState('');
    

    const handleRecuperarClick = () => {
        navigation.reset({
            routes: [{name: 'RecuperarSenha'}]
        });
    }

    const handleLogInClick = () => {
        PopularMovies.addAuthListener((user)=>{
            if(user){
                navigation.navigate('MainTab');
            }
        }); 
    }

  
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'Cadastro'}]
        });
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
                <SignInput 
                    IconSvg={LockIcon} 
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                /> 
                            
                <CustonButton onPress={handleLogInClick}>
                    <CustonButtonText>Login</CustonButtonText>
                </CustonButton>
            </InputArea> 

            <SignMessageButton onPress={handleRecuperarClick}>
                <SignMessageButtonText>Esqueceu a senha?</SignMessageButtonText>
                <SignMessageButtonTextBold>Recuperar</SignMessageButtonTextBold>
            </SignMessageButton>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}