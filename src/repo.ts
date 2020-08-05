export class repo{
    name:string;
    description:string;
    url:string;
    size:number;

    constructor(r:any){
        this.name=r.name;
        this.description=r.description;
        this.url=r.html_url;
        this.size=r.size;
    }
}