import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;
const Avatar = styled.Image`
    width: 88px;
    height: 100px;
    border-radius: 20px;
`;
const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;
const MovieTitle = styled.Text`
    font-size: 17px;
    font-weight: bold;
    width:230px;
`;
const SeeProfileButton = styled.View`
    width: 85px;
    height: 26px;
    border: 2px solid #63C2D1;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;
const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #000;
`;

const IMAGE_DOMAIN_URL = 'https://image.tmdb.org/t/p/w500/';

export default ({data}) => {
    const navigation = useNavigation();
    return(
        <Area>
            <Avatar source={{uri: IMAGE_DOMAIN_URL + data.poster_path }} />
            <InfoArea>
                <MovieTitle numberOfLines={2}>{data.title}</MovieTitle>

                <SeeProfileButton>
                  <SeeProfileButtonText>Descrição</SeeProfileButtonText>
                </SeeProfileButton>    
            </InfoArea>
        </Area>
    );

}