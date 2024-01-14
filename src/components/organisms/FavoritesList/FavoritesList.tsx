import { useRecoilState } from 'recoil';
import { favoriteState } from '../../../store/favoriteState';
import {
  ClearText,
  FavoriteList,
  FavoriteWrapper,
} from './FavoriteList.styled';
import { Card } from '../../molecules/Card';
import { useCardActions } from '../../../hooks/useCardActions';

export const FavoritesList = () => {
  const [favoriteFlights] = useRecoilState(favoriteState);

  const { onClearAllFavorites } = useCardActions();

  return (
    <FavoriteWrapper>
      <ClearText onClick={onClearAllFavorites}>Clear all</ClearText>
      <FavoriteList>
        {favoriteFlights.map((favorite, i) => (
          <Card rocket={favorite} index={i} />
        ))}
      </FavoriteList>
    </FavoriteWrapper>
  );
};
