export class User {
  id : number | null = null;
  firstName!: string;
  lastName!: string;
  birthDate!: Date;
  email!: string;
  rankingPoints : number | null = null;
  idClub : number | null = null;
}
