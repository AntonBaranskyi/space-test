import { atom } from 'recoil';
import { IFlight } from '../types/rocketFlight';

export const favoriteState = atom<IFlight[]>({
  key: 'favoriteCards',
  default: [],
});
