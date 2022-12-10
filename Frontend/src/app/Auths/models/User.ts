export class User {
  id !: number
  firstName!: string;
  lastName!: string;
  birthDate!: Date;
  email!: string;
  rankingPoints !: number;
  idClub : number | null = null;
}
