import { Division } from "./Division";
import { Team } from "./Team";
import { user } from "./user";

export class TeamClass implements Team {
  constructor(team:Team) {
    this.name = team.name;
    this.local = team.local;
    this.adresse = team.adresse;
    this.phone = team.phone;
    this.divisionPoints = team.divisionPoints;
    this.division = team.division;
    this.captain = team.captain;
    this.players = team.players;
    this.gamePlayedTotal = 0;
    this.wins = 0;
    this.loses =0;
    this.draws = 0;
    this.setPTW = 0;
    this.setPTL = 0;
  }
  name: string;
  local: string;
  adresse: string;
  phone: string;
  divisionPoints: number;
  division: Division;
  captain: user;
  players: user[];
  gamePlayedTotal: number;
  wins : number;
  loses : number;
  draws : number;
  setPTW: number;
  setPTL: number;
  public increment(): void {
    this.gamePlayedTotal++;
  }
  public incrementWins(): void {
    this.wins++;
  }
  public incrementLoses(): void {
    this.loses++;
  }
  public incrementDraws(): void {
    this.draws++;
  }
  public incrementSetPTW(): void {
    this.setPTW++;
  }
  public incrementSetPTL(): void {
    this.setPTL++;
  }
}
