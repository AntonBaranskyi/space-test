import { useRecoilState } from 'recoil';
import { favoriteState } from '../store/favoriteState';
import { IFlight } from '../types/rocketFlight';

export const useCardActions = () => {
  const [favoriteCards, setFavoriteCards] = useRecoilState(favoriteState);

  const onAddFavoriteCard = (card: IFlight) => {
    const isCardFavorite = favoriteCards.some(
      (favCard) => favCard.id === card.id
    );

    if (!isCardFavorite) {
      setFavoriteCards((prev) => [...prev, card]);
    }
  };

  const onRemoveFavoriteCard = (id: string) => {
    setFavoriteCards((prevCard) => {
      return prevCard.filter((card) => card.id !== id);
    });
  };

  const onClearAllFavorites = () => {
    setFavoriteCards([]);
  };

  const isCheckFavorite = (id: string) => {
    return favoriteCards.some((card) => card.id === id);
  };

  return {
    onAddFavoriteCard,
    onRemoveFavoriteCard,
    onClearAllFavorites,
    isCheckFavorite,
  };
};
