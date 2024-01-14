import { BtnWrapper, CardWrapper, ContentWrapper } from './Card.styled';
import { Image } from '../../atoms/Image';

import card1 from '../../../assets/images/card.png';
import card2 from '../../../assets/images/card1.png';
import card3 from '../../../assets/images/card3.png';
import { Title } from '../../atoms/Title';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';

import { IFlight } from '../../../types/rocketFlight';
import React, { useMemo } from 'react';
import { useCardActions } from '../../../hooks/useCardActions';
import { HeartIcon } from '../../atoms/HeartIcon';
import { useLocation } from 'react-router-dom';

import deleteIcon from '../../../assets/icons/Delete.svg';

type Props = {
  rocket: IFlight;
  index: number;
};

export const Card: React.FC<Props> = ({ rocket, index }) => {
  const { onAddFavoriteCard, isCheckFavorite, onRemoveFavoriteCard } =
    useCardActions();

  const onHandleAddFavorite = () => {
    onAddFavoriteCard(rocket);
  };

  const handleDeleteFavorite = () => {
    onRemoveFavoriteCard(rocket.id);
  };

  const { pathname } = useLocation();

  const isCardFavorite = isCheckFavorite(rocket.id);

  const getCardImage = () => {
    if (index % 3 === 0) {
      return card1;
    } else if (index % 3 === 1) {
      return card2;
    } else {
      return card3;
    }
  };

  const isFavPage = useMemo(() => pathname === '/favorites', [pathname]);

  return (
    <CardWrapper>
      <Image src={getCardImage()} width={444} height={296} marginBottom={32} />
      <ContentWrapper>
        <Title color='#1E1E1E' size={24} weight={700} marginBottom={16}>
          {rocket.name}
        </Title>

        <Text size={24} color='#556B84' marginBottom={64}>
          {rocket.description.length > 80
            ? `${rocket.description.slice(0, 80)}...`
            : rocket.description}
        </Text>
        <BtnWrapper>
          <Button label='Buy' width='100%' />
          <Button
            icon={
              isFavPage ? (
                deleteIcon
              ) : (
                <HeartIcon fill={isCardFavorite ? '#fff' : '#1e1e1e'} />
              )
            }
            width='53px'
            isPrimary
            isActive={!isFavPage && isCardFavorite}
            onClick={isFavPage ? handleDeleteFavorite : onHandleAddFavorite}
          />
        </BtnWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
};
