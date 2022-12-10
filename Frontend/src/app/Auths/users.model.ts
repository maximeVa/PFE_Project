export interface userDTO{
    id: number,
    firstname: string;
    lastname: string;
    email: string;
    password: any,
    birthDate: Date;
    rankingPoints: number;
    idClub: number;
    
}

export interface newUserDTO{
    firstname: string,
    lastname: string,
    email: string,
    password: any,
    birthDate: Date,
    rankingPoints: number,
}
