import { atom } from 'recoil';
import { IFlight } from '../types/rocketFlight';
import { recoilKeys } from '../constants/recoilKeys';

export const favoriteState = atom<IFlight[]>({
  key: recoilKeys.favoriteState,
  default: [],
});
