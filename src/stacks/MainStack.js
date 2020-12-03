import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import LogIn from '../screens/LogIn';
import Cadastro from '../screens/Cadastro';
import RecuperarSenha from '../screens/RecuperarSenha';
import MainTab from '../stacks/MainTab';
import Movies from '../screens/Movies';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator 
    initialRouteName="Preload"
    screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
);