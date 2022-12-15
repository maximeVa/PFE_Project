import { user } from "./user";
import { Division } from "./Division";
export interface Team {
  name : string;
  local : string;
  adresse: string;
  phone : string;
  divisionPoints : number;
  division : Division;
  captain : user;
  players : user[];
  gamePlayedTotal : number;
}
