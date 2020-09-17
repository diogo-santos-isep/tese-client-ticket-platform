export class TicketClientListVM {
    id: string
    code: string
    subject: string
    description: string
    state: ETicketState
    collaboratorName: string
    categoryDescription: string
    categoryColor: string
}

export enum ETicketState {
    Criado,
    Atribuído,
    "Em tratamento",
    Fechado
}