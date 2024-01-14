import { atom } from 'recoil';
import { IFlight } from '../types/rocketFlight';
import { recoilKeys } from '../constants/recoilKeys';

export const rocketsFlights = atom<IFlight[]>({
  key: recoilKeys.rocketsFlights,
  default: [],
});
