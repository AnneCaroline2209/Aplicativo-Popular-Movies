import React from 'react';
import { Container, HeaderArea, HeaderTitle, InputArea} from './styles';
import SignInput from '../../components/SignInput';
import SearchIcon from '../../../assets/search.svg';

export default () => {
    return (
        <Container>
            <HeaderArea>
                <HeaderTitle>Filmes favoritos:</HeaderTitle>
            </HeaderArea>
            <InputArea>
                <SignInput
                    IconSvg={SearchIcon} 
                    placeholder="Encontre o seu filme favorito!"
                />
            </InputArea> 
        </Container>
    );
}