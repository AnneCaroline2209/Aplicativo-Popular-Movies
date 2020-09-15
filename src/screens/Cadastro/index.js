import React from 'react';
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

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'LogIn'}]
        });
    }

    return (
        <Container>
            <Logo width="120" height="120" viewbox="0 0 512 512"/> 
            
            <InputArea>
                <SignInput IconSvg={PersonIcon} placeholder="Digite seu nome"/>
                <SignInput IconSvg={EmailIcon} placeholder="Digite seu e-mail"/>
                <SignInput IconSvg={LockIcon} placeholder="Digite sua senha"/>

                <CustonButton>
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