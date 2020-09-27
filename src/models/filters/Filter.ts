export class Filter{
    page:number;
    pageSize:number;
    sortBy:string;
    sortAscending:boolean;

    constructor(page:number, pageSize:number){
        this.page = page;
        this.pageSize = pageSize;
    }
}