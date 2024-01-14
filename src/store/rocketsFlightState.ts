import { atom } from 'recoil';
import { IFlight } from '../types/rocketFlight';

export const rocketsFlights = atom<IFlight[]>({
  key: 'rocketsFlights',
  default: [],
});
