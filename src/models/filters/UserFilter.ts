import { Filter } from "./Filter";

export class UserFilter extends Filter{
    constructor(page:number, pageSize:number){
        super(page,pageSize);
    }
}