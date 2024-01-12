import { MainWrapper, TextWrapper } from './MainPage.styled';
import { Header } from '../../molecules/Header';
import { MainText } from '../../molecules/MainText';

export const MainPage = () => {
  return (
    <MainWrapper>
      <Header />

      <TextWrapper>
        <MainText />
      </TextWrapper>
    </MainWrapper>
  );
};
