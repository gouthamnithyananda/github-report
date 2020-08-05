import {repo} from './repo'

export class User {
    login: string;
    fullName:string;
    repoCount:number;
    repos? :repo[];


    constructor(userresponse:any){
        this.login = userresponse.login;
        this.fullName= userresponse.name;
        this.repoCount = userresponse.public_repos;

    }
}
