import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #63C2D1;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const MovieArea = styled.View`
    margin-top: 20px;
    margin-bottom: 30px;
`; 
export const HeaderArea = styled.View`

`;

export const HeaderTitle = styled.Text`
    margin-top: 40px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
    left: 25px;    
`;

export const InputArea = styled.View`
    width: 90%; 
    margin-top: 10px;
    left: 15px;    
`;

export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;
