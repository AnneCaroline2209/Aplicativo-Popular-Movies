import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, InputArea, CustonButton, CustonButtonText, SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold } from './styles';
import SignInput from '../../components/SignInput';
import Logo from '../../../assets/claquete.svg';
import EmailIcon from '../../../assets/email.svg';
import LockIcon from '../../../assets/lock.svg';
import firebase from '../../FirebaseConnection';

export default () => {
    const navigation = useNavigation();  
       
    const [nome, setNome] = useState('');

    const Logout = async () => {
        await firebase.auth().signOut();
        navigation.reset({
          index:0,
          routes:[{name:'LogIn'}]
        });
      }

    return (
        <Container>
            <Logo width="120" height="120" viewbox="0 0 512 512"/>
            <InputArea>
                <SignInput
                    IconSvg={EmailIcon} 
                    placeholder="Nome"
                    autoCorrect={false}
                    value={nome}
                    onChangeText={e=>setNome(e)}         
                />
                <SignInput 
                    IconSvg={LockIcon} 
                    placeholder="Sobrenome"
                />               
                <CustonButton onPress={Logout}>
                    <CustonButtonText>Sair</CustonButtonText>
                </CustonButton>
            </InputArea> 
        </Container>
    );
}