import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container,
         Scroller,
         
         HeaderArea,
         HeaderTitle,
         SearchButton,
         MovieArea

} from './styles';

import SearchIcon from '../../../assets/search.svg';
import ApiMovies from '../../ApiMovies/ApiMovies';
import MovieItem from '../../components/MovieItem';

export default () => {
    const navigation = useNavigation();
    const [lista, setLista] = useState(null);
       
    useEffect(()=>{
        getAllMovies();
    },[]);

    async function getAllMovies(){
        let response = await ApiMovies.getAllMovies(1);
        setLista(response);
    }

    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o seu filme favorito</HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#FFF"></SearchIcon>
                    </SearchButton>
                </HeaderArea>
                <MovieArea>
                {lista && lista.results.map((item, indice)=>(
                    <MovieItem key={indice} data={item} />
                ))}
                </MovieArea>
            </Scroller>
        </Container>
    );
}