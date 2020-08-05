import {GithubApiService} from './GithubApiService'
import { User } from './user';
import { repo } from './repo';
import * as _ from 'lodash'

let svr = new GithubApiService();
if(process.argv.length<3){
    console.log("please pass username")
}else{
    let userName = process.argv;

svr.getUserInfo('gouthamnithyananda',(user:User)=>{

    svr.getrepo('gouthamnithyananda',(repos:repo[])=>{
      //  console.log(repos);
        user.repos=repos;
        console.log(user);
        });


});
}
