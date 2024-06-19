"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parser = /** @class */ (function () {
    function Parser() {
    }
    Parser.prototype.parse = function (rawText) {
        var ret = [];
        var word = "";
        for (var i = 0; i < rawText.length; i++) {
            var char = rawText.charAt(i);
            if (char === " " && word === "") {
                continue;
            }
            if (char === " " && word !== "") {
                ret.push(word);
                word = "";
            }
            else {
                word = word.concat(char);
            }
        }
        console.log(ret);
        return ret;
    };
    return Parser;
}());
exports.default = Parser;
