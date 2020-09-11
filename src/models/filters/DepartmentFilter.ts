import { Filter } from "./Filter";

export class DepartmentFilter extends Filter{
    constructor(page:number, pageSize:number){
        super(page,pageSize);
    }
}