import {Team} from './Team';
import {Competition} from './Competition';
import {Cup} from './Cup';
export interface Game {
  id : number;
  hostClub : Team;
  guestClub : Team;
  competition : Competition;
  cup : Cup;
}
