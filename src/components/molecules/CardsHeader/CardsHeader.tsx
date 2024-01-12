import { ButtonsWrapper, CardsHeaderWrapper } from './CardsHeader.styled';
import { Title } from '../../atoms/Title';
import { Button } from '../../atoms/Button';

import iconLeft from '../../../assets/icons/arrow-left.png';
import iconRight from '../../../assets/icons/arrow-right.png';

export const CardsHeader = () => {
  return (
    <CardsHeaderWrapper>
      <Title size={32} weight={800} color='#1E1E1E'>
        popular tours
      </Title>

      <ButtonsWrapper>
        <Button icon={iconLeft} isPrimary />
        <Button icon={iconRight} isPrimary />
      </ButtonsWrapper>
    </CardsHeaderWrapper>
  );
};
