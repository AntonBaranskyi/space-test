import React from 'react';
import { SpinnerWrapper } from './Spinner.styled';
import { MoonLoader } from 'react-spinners';

type Props = {
  loading: boolean;
};

export const Spinner: React.FC<Props> = ({ loading }) => {
  return (
    <SpinnerWrapper>
      {loading && (
        <MoonLoader loading={loading} color='#000' speedMultiplier={2} />
      )}
    </SpinnerWrapper>
  );
};
