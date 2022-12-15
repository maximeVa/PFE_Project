import { club } from "./club";

export interface player {
id: number;
admin_flag: boolean;
birthDate: Date;
email: string;
firstname: string;
lastname: string;
password: string;
rankingPoints: number;
club: club;
}