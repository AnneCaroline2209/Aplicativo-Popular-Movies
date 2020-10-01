import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, InputArea, CustonButton, CustonButtonText, SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold } from './styles';
import SignInput from '../../components/SignInput';
import * as Svg from 'react-native-svg';
import Logo from '../../assets/claquete.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const navigation = useNavigation();

    const [nameField, setNameField] = useState(''); 
    const [emailField, setEmailField] = useState(''); 
    const [passwordField, setPasswordField] = useState(''); 

    const handleLogInClick = () => {
        navigation.navigate({
            routes: [{name: ''}]
        });
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'LogIn'}]
        });
    }


    /* const handleLogInClick = () => {
        if (!email) {
            setError("Email obrigatório*")
            setValid(false)
            return
        } else if (!password && password.trim() && password.length > 6) {
            setError("Senha fraca, mínimo 6 caracteres")
            setValid(false)
            return
        } else if (!__isValidEmail(email)) {
            setError("Email Inválido")
            setValid(false)
            return
        }

        handleLogInClick(email, password)
    }

    /*const handleLogInClick = async (email, password) => {
        try {
            let response = await auth().createUserWithEmailAndPassword(email, password)
            if (response) {
                console.log(tag, "🍎", response)
            }
        } catch (e) {
            console.error(e.message)
        }
    }*/
    


    return (
        <Container>
            <Logo width="120" height="120" viewbox="0 0 512 512"/>
            <InputArea>
                <SignInput
                    IconSvg={PersonIcon} 
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}          

                />

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
                    <CustonButtonText>Cadastrar</CustonButtonText>
                </CustonButton>
            </InputArea> 

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}