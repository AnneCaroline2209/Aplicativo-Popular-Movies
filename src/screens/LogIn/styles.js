import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #63C2D1;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const InputArea = styled.View`
    width: 90%; 
    margin-top: 30px;
`;
export const CustonButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #268596;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;
export const CustonButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
`;
export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #fff;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    margin-left: 5px;
`;