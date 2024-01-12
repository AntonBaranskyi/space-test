import { BtnWrapper, CardWrapper, ContentWrapper } from './Card.styled';
import { Image } from '../../atoms/Image';

import card from '../../../assets/images/card.png';
import { Title } from '../../atoms/Title';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';

import heart from '../../../assets/icons/heart.png';

export const Card = () => {
  return (
    <CardWrapper>
      <Image src={card} width={444} height={296} marginBottom={32} />
      <ContentWrapper>
        <Title color='#1E1E1E' size={24} weight={700} marginBottom={16}>
          extraordinary tour
        </Title>

        <Text size={24} color='#556B84' marginBottom={64}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </Text>
        <BtnWrapper>
          <Button label='Buy' width='100%' />
          <Button icon={heart} width='53px' isPrimary />
        </BtnWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
};
