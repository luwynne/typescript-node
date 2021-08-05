"use strict";
exports.__esModule = true;
var Server_1 = require("./server/Server");
var Launcher = /** @class */ (function () {
    function Launcher() {
        this.server = new Server_1.Server();
    }
    Launcher.prototype.launchApp = function () {
        console.log("Something");
        this.server.createServer();
    };
    return Launcher;
}());
new Launcher().launchApp();
