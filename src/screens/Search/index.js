import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import SignInput from '../../components/SignInput';
import { Container,
         Scroller,

         SearchButton,
         HeaderArea,
         HeaderTitle,
         InputArea,
         MovieArea

} from './styles';

import SearchIcon from '../../../assets/search.svg';
import ApiMovies from '../../ApiMovies/ApiMovies';
import MovieItem from '../../components/MovieItem';

export default () => {
  const [movieText, setMovieText] = useState('');
  const [lista, setLista] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getSearchMovies() {
    setLoading(true);

    if (movieText.length > 0 ) {
      let response = await ApiMovies.getSearch(`${movieText}`);
      setLista(response);
    } else {
      alert ('Digite o nome do filme');
    }

    setLoading(false);
  }

    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle>Busque seu filme:</HeaderTitle>
                    <InputArea>
                      <SignInput
                        IconSvg={SearchIcon} 
                        placeholder="Encontre o seu filme"
                      />
                    </InputArea> 
                </HeaderArea>
                <MovieArea>
                {loading &&
                  <LoadingIcon size="large" color="#CC0000" />
                }

                {lista && lista.results.map((item, k)=>(
                  <MovieItem key={k} data={item} />  
                ))} 
                </MovieArea>
            </Scroller>
        </Container>
    );
}