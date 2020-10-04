import React from 'react';
import { InputArea } from 'react-native';
import { Container, HeaderArea, HeaderTitle, SearchButton } from './styles';
import SignInput from '../../components/SignInput';


import SearchIcon from '../../assets/search.svg';

export default () => {
    return (
        <Container>
            <HeaderArea>
                <HeaderTitle>Encontre o seu filme favorito</HeaderTitle>
                <SearchButton>
                    <SearchIcon width="26" height="26" fill="#FFF"></SearchIcon>
                </SearchButton>
            </HeaderArea>

            <InputArea>
                <SignInput />
            </InputArea> 
        </Container>
    );
}