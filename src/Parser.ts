export default class Parser {
  parse(rawText: string): string[] {
    let ret: string[] = [];

    var word: string = "";
    for (let i = 0; i < rawText.length; i++) {
      var char = rawText.charAt(i);

      if (char === " " && word === "") {
        continue;
      }

      if (char === " " && word !== "") {
        ret.push(word);
        word = "";
      } else {
        word = word.concat(char);
      }
    }
    console.log(ret);
    return ret;
  }
}
