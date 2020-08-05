import * as request from 'request'
import { User } from './user';
import { repo } from './repo';

const options = {
    headers:{
        'User-Agent':'request'
    },
    json:true
}
export class GithubApiService{
    getUserInfo(userName:string,cb:(user:User)=>any){
        
      request.get('https://api.github.com/users/' + userName,options ,(error:any,response:any,body:any)=>{
          let user= new User(body);
         cb(user)
      })
    }


    getrepo(userName:string,cb:(repoArray:repo[])=>any){
  request.get('https://api.github.com/users/' + userName +'/repos',options ,(error:any,response:any,body:any)=>{
          let repos = body.map((r:any) => new repo(r));
          cb(repos)
      })

    }
}