import { FavoriteTittle, FavoritesWrapper } from './FavoritesMain.styled';
import { Header } from '../../molecules/Header';

export const FavoritesMain = () => {
  return (
    <FavoritesWrapper>
      <Header />

      <FavoriteTittle size={48} weight={800}>
        favourites
      </FavoriteTittle>
    </FavoritesWrapper>
  );
};
