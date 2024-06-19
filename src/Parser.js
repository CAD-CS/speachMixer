"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parser = /** @class */ (function () {
    function Parser() {
    }
    // Method responsible for parsing raw text into words. Returns a list of words ready for analysis.
    Parser.prototype.parse = function (rawText) {
        var ret = [];
        var word = "";
        for (var i = 0; i < rawText.length; i++) {
            var char = rawText.charAt(i);
            var isSpace = char === " ";
            var wordIsEmpty = word === "";
            if (isSpace && !wordIsEmpty) {
                ret.push(word);
                word = "";
            }
            else if (!isSpace) {
                word = word.concat(char);
                if (i === rawText.length - 1)
                    ret.push(word);
            }
        }
        return ret;
    };
    return Parser;
}());
exports.default = Parser;
