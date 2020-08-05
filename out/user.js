"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userresponse) {
        this.login = userresponse.login;
        this.fullName = userresponse.name;
        this.repoCount = userresponse.public_repos;
    }
    return User;
}());
exports.User = User;
