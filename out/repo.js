"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repo = void 0;
var repo = /** @class */ (function () {
    function repo(r) {
        this.name = r.name;
        this.description = r.description;
        this.url = r.html_url;
        this.size = r.size;
    }
    return repo;
}());
exports.repo = repo;
