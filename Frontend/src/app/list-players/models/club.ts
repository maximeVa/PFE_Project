import { division } from "./division";
import { player } from "./player";

export interface club {
    id: number;
    name: string;
    local: string;
    adresse: string;
    phone: string;
    captainPhone: string;
    divisionPoints: string;
    division: division;
    captain: player;
    players: player[];
}