import { BottomMainWrapper } from './BottomMain.styled';
import { Text } from '../../atoms/Text';
import { IconItem } from '../../atoms/IconItem';

import arrowDown from '../../../assets/icons/Arrow - Down.svg';

export const BottomMain = () => {
  const handleScroll = () => {
    const bottomSection = document.querySelector('#card-list');

    bottomSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <BottomMainWrapper onClick={handleScroll}>
      <Text>Explore tours</Text>
      <IconItem icon={arrowDown} />
    </BottomMainWrapper>
  );
};
