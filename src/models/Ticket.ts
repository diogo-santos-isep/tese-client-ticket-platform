export class Ticket{
    id:string;
    code:string;
    subject:string;
    description:string;
    state:ETicketState;
    priority:number;
    collaboratorId:string;
    collaboratorName:string;
    clientId:string;
    clientName:string;
    clientEmail:string;
    categoryId:string;
    categoryDescription:string;
    categoryColor:string;
    departmentId:string;
    departmentDescription:string;
}
export enum ETicketState
{
    Criado,
    Atribuido,
    "Em Tratamento",
    Fechado
}