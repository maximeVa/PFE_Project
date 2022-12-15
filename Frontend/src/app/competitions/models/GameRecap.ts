import { Game } from "./Game";
import { Sets } from "./Sets";
import { Team } from "./Team";

export interface GameRecap {
  id : number;
  hostScore : number;
  guestScore : number;
  game : Game;
  sets : Sets[];
}
