import { CardsHeader } from '../../molecules/CardsHeader';
import { CardListGrid, CardListWrapper } from './CardList.styled';
import { Card } from '../../molecules/Card';

export const CardList = () => {
  return (
    <CardListWrapper id='card-list'>
      <CardsHeader />

      <CardListGrid>
        <Card />
        <Card />
        <Card />
      </CardListGrid>
    </CardListWrapper>
  );
};
