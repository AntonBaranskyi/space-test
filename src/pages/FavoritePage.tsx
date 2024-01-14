import React from 'react';
import { FavoritesMain } from '../components/organisms/FavoritesMain';
import { useRecoilState } from 'recoil';
import { favoriteState } from '../store/favoriteState';
import { FavoritesList } from '../components/organisms/FavoritesList';
import { Title } from '../components/atoms/Title';

export const FavoritePage = () => {
  const [favoriteFlights] = useRecoilState(favoriteState);

  return (
    <>
      <FavoritesMain />
      {favoriteFlights.length > 0 ? (
        <FavoritesList />
      ) : (
        <Title color='#1e1e1e' weight={800} size={36}>
          Please,add favorites flights
        </Title>
      )}
    </>
  );
};
