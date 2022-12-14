import { userDTO } from "../Auths/users.model";
import { Division } from "./Division";
export interface Team {
  name : string;
  local : string;
  adresse: string;
  phone : string;
  divisionPoints : number;
  division : Division;
  captain : userDTO;
  players : userDTO[];

}
