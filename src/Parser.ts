export default class Parser {
  
  // Method responsible for parsing raw text into words. Returns a list of words ready for analysis.
  parse(rawText: string): string[] {
    let ret: string[] = [];

    var word: string = "";
    for (let i = 0; i < rawText.length; i++) {
      var char: string = rawText.charAt(i);
      var isSpace: boolean = char === " ";
      var wordIsEmpty: boolean = word === "";

      if (isSpace && !wordIsEmpty) {
        ret.push(word);
        word = "";
      } else if (!isSpace) {
        word = word.concat(char);
        if (i === rawText.length - 1) ret.push(word);
      }
    }
    return ret;
  }
}
