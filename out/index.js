"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var svr = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log("please pass username");
}
else {
    var userName = process.argv;
    svr.getUserInfo('gouthamnithyananda', function (user) {
        svr.getrepo('gouthamnithyananda', function (repos) {
            //  console.log(repos);
            user.repos = repos;
            console.log(user);
        });
    });
}
