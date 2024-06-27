import { writeFileSync } from 'fs';
const path = require('node:path'); 

export default class InputOutput {
  write(rawInput: string[]): void {
    let input: string = rawInput.join(" ");
    writeFileSync(path.resolve(__dirname,"./../data/output.txt"), input);
  }
}