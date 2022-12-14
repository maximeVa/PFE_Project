import {Team} from './Team';
import {Game} from './Game';
export interface Competition {
  id: number;
  date: Date;
  maxSlots: number;
  note: string;
  teams: Team[];
  games: Game[];

}
