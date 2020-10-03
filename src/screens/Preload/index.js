import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Svg from 'react-native-svg';
import Logo from '../../assets/claquete.svg';

export default () => {
    const navigation = useNavigation();
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token !== null){
                navigation.reset[{
                    routes:[{name: 'MainTab'}]
                }];
                
            } else {
              navigation.navigate('LogIn');
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <Logo width="50%" heigth="160"/>
            <LoadingIcon size="large" color="#fff"/>
        </Container>
    );
}