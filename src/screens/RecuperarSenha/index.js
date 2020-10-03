import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, InputArea, CustonButton, CustonButtonText, SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold } from './styles';
import SignInput from '../../components/SignInput';
import * as Svg from 'react-native-svg';
import Logo from '../../assets/claquete.svg';
import EmailIcon from '../../assets/email.svg';

import PopularMovies from '../../../Api';

export default () => {
    
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState(''); 
 
    const RecuperarSenha = () => {
        PopularMovies.RecuperarSenha(emailField).cath((error)=>{
            alert(error.code);
        });
       /* PopularMovies.RecuperarSenha(emailField).catch((error)=>{
            alert(error.code);
        });
        alert('Um link foi enviado para o seu email');
        navigation.navigate('LogIn');*/
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