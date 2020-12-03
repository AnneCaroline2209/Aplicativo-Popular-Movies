import React, {Component, useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import Rating from '../../components/Raiting';
import FavoriteIcon from '../../../assets/favorite.svg';
import FavoriteFullIcon from '../../../assets/favorite_full.svg';
import ApiMovies from '../../ApiMovies/ApiMovies';

import { 
    Container, 
    Scroller,
    PageBody,
    UserInfoArea,
    ElencoArea,
    SwipeDotActive,
    SwipeItem,
    SwipeImage,
    UserAvatar,
    UserInfo,
    UserInfoName,
    UserFavButton,
    SinopseArea,
    SinopseTitle,
    SinopseInfo,
    ElencoTitle,
    ElencoItem,
    ElencoAvatar,
    ElencoPersonName,
    ActorName,
    ItemMovieArea,
    InfosMovieAreaLeft,
    InfosMovieAreaRight,
    MoviesGenres,
    DirectorMovies,
    ReleaseDate,
    TimeMovie,
    BoldText,
    Scroller2,
    GenresArea,
    TagLineArea,
    TagLineInfo,
    TaglineText,
    FakeTaglineInfo
} from './styles';

// import moment from 'react-moment';
import PopularMovies from '../../../Api';
import firebase from '../../FirebaseConnection';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [userInfo, setUserInfo] = useState({
        id: route.params.id,
        name: route.params.name,
        avatar: route.params.avatar,
        rating: route.params.rating,
        note: route.params.note
    }); 

    const [userInfoAdd, setuserInfoAddInfo] = useState({});
    const [userGenres, setuserInfoGenres] = useState(null);
    const [userCredits, setCreditsInfo] = useState(null);
    const [favorited, setFavorited] = useState(false);
    
    const IMAGE_DOMAIN_URL = 'https://image.tmdb.org/t/p/w500/';
    
   useEffect(()=>{
      getMovieInfo();    
      getGenres();
      getCredits();
   },[]);

   var directors = [];
   userCredits && userCredits.crew.forEach(function(entry){
     if (entry.job === 'Director') {
         directors.push(entry.name);
     }  
   })

//    var year = moment(userInfoAdd.release_date, true).format('YYYY');

   const getMovieInfo = async () => {
    let json = await ApiMovies.getMovies(userInfo.id);
        setuserInfoAddInfo(json);  
    }
  
    async function getCredits() {
        let response = await ApiMovies.getCredits(`${userInfo.id}`);
        
        setCreditsInfo(response);
    }

    async function getGenres() {
        let response = await ApiMovies.getMovies(`${userInfo.id}`);
        
        setuserInfoGenres(response);
    }
    return(
        <Container>
           <Scroller>
                    <Swiper
                        style={{height:240}}
                        activeDot={<SwipeDotActive />}
                        paginationStyle={{top: 15, right:15, bottom: null, left:null}}
                        autoplay={true}
                    >
                        <SwipeItem >
                            <SwipeImage source={{uri:IMAGE_DOMAIN_URL + userInfoAdd.backdrop_path}} resizeMode='cover' />
                        </SwipeItem>
                    </Swiper>
                <PageBody>
                    <UserInfoArea>
                    <UserAvatar source={{uri:IMAGE_DOMAIN_URL + userInfo.avatar}} />
                        <UserInfo>
                            <UserInfoName>{userInfo.name}</UserInfoName>
                            <Rating 
                                stars={userInfo.rating} 
                                note={userInfo.note}
                                showNumber={true} />
                        </UserInfo>
                        <UserFavButton>
                            {favorited ?
                                 <FavoriteFullIcon width="24" height="24" fill="#FF0000" />
                                :
                                <FavoriteIcon width="24" height="24" fill="#FF0000" /> 
                            }    
                        </UserFavButton>
                    </UserInfoArea>
                    <GenresArea>
                    {userGenres && 
                            userGenres.genres.map((item, index)=>(
                            <MoviesGenres key={index}>#{item.name} </MoviesGenres>
                        ))}
                    </GenresArea>  
                        
                    <ItemMovieArea>
                    <InfosMovieAreaLeft>
                        <DirectorMovies>
                            <BoldText>Direção: </BoldText> 
                            {directors.join(', ')}  
                        </DirectorMovies>
                        
                        {userInfoAdd.status == 'Released' ?
                        <DirectorMovies>
                            <BoldText>Situação: </BoldText> 
                            Lançado  
                        </DirectorMovies>
                        :
                        <DirectorMovies>
                            <BoldText>Situação: </BoldText> 
                            Em produção  
                        </DirectorMovies>
                        }
                       
                    </InfosMovieAreaLeft>
                    <InfosMovieAreaRight>
                        <ReleaseDate>
                            <BoldText>Lançamento: </BoldText> 
                            
                        </ReleaseDate> 
                        <TimeMovie>
                            <BoldText>Duração: </BoldText> 
                            {userInfoAdd.runtime} min
                        </TimeMovie>  
                    </InfosMovieAreaRight>
                    </ItemMovieArea>
                    
                    <TagLineArea>
                        { userInfoAdd.tagline != '' ? 
                        <TagLineInfo>        
                            <TaglineText>{userInfoAdd.tagline}</TaglineText>
                        </TagLineInfo>
                        :
                        <FakeTaglineInfo></FakeTaglineInfo>
                        }
                    </TagLineArea>
                    
                    <SinopseArea>
                        <SinopseTitle>História</SinopseTitle>
                        <SinopseInfo>{userInfoAdd.overview}</SinopseInfo>
                    </SinopseArea> 
                    
                    <ElencoTitle>Elenco</ElencoTitle>       
                    <ElencoArea>
                        <Scroller2 horizontal={true}>
                            {userCredits && userCredits.cast.slice(0, 6).map((item,index) => (
                                <ElencoItem key={index}>
                                    <ElencoAvatar source={{uri:IMAGE_DOMAIN_URL + item.profile_path}} /> 
                                    <ActorName>{item.name}</ActorName>
                                    <ElencoPersonName>{item.character}</ElencoPersonName>  
                                </ElencoItem>
                            ))}
                        </Scroller2>
                    </ElencoArea>                  
               </PageBody>
           </Scroller>
        </Container>
    );
}