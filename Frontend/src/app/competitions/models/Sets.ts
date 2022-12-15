import { GameRecap } from './GameRecap';
import { user } from './user';
export interface Sets {
  id : number;
  gameRecap : GameRecap;
  num : number;
  hostPlayer1 : user;
  hostPlayer2 : user;
  guestPlayer1 : user;
  guestPlayer2 : user;
  hostReserve1 : user;
  hostReserve2 : user;
  guestReserve1 : user;
  guestReserve2 : user;
  hostScore : number;
  guestScore : number;
}
