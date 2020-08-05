"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubApiService = void 0;
var request = __importStar(require("request"));
var user_1 = require("./user");
var repo_1 = require("./repo");
var options = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName, options, function (error, response, body) {
            var user = new user_1.User(body);
            cb(user);
        });
    };
    GithubApiService.prototype.getrepo = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName + '/repos', options, function (error, response, body) {
            var repos = body.map(function (r) { return new repo_1.repo(r); });
            cb(repos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
