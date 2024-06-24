"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path = require('node:path');
var IO = /** @class */ (function () {
    function IO() {
    }
    IO.prototype.write = function (input) {
        var writeResult = (0, fs_1.writeFileSync)(path.resolve(__dirname, "./../data/output.txt"), input);
        console.log(writeResult);
    };
    return IO;
}());
exports.default = IO;
