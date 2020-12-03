import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Svg from 'react-native-svg';
import Logo from '../../../assets/claquete.svg';
import PopularMovies from '../../../Api';

export default () => {
    const navigation = useNavigation();
    useEffect(() => {
        PopularMovies.addAuthListener((user)=>{
            if (user) {
                navigation.reset({
                    routes:[{name:'MainTab'}]
                });
            } else {
                navigation.reset({
                    routes:[{name:'LogIn'}]
                });
            }
        });   
    }, []);

    return (
        <Container>
            <Logo width="50%" heigth="160"/>
            <LoadingIcon size="large" color="#fff"/>
        </Container>
    );
}