import { Team } from './Team';
import { Game } from './Game';
export interface Cup {
  id: number;
  startDate : Date;
  endDate : Date;
  teams : Team[];
  games : Game[];
}
