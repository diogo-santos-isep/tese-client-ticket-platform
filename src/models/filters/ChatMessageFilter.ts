import { Filter } from "./Filter";
import { ETicketState } from "models/Ticket";

export class ChatMessageFilter extends Filter{

    constructor(page:number, pageSize:number){
        super(page,pageSize);
        this.sortBy = "Date";
    }
}