import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: #4EADBE;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;


export default ({navigation}) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon width="24" heigth="24" fill="#FFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Search')}>
                <SearchIcon width="24" heigth="24" fill="#FFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Search')}>
                <FavoriteIcon width="24" heigth="24" fill="#FFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Search')}>
                <AccountIcon width="24" heigth="24" fill="#FFF" />
            </TabItem>
        </TabArea>
    );
}