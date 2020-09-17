import { Filter } from "./Filter";

export class TicketFilter extends Filter{
    constructor(page:number, pageSize:number){
        super(page,pageSize);
    }
}