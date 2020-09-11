export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    photo: string;
    department_Id: string;
    department_Description: string;
    role:ERole;
}

export enum ERole{
    Administrador,
    Colaborador
}