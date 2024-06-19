/* 
  This module is responsible for the counting of phonemes for a given piece of text
*/


export class Counter {

  count:{phoneme:string, numOfAppearance:number}[]
  
  constructor(phonemes:string[]) {
    this.count = this.initCount(phonemes);
  }

  initCount(phonemes:string[]):{ phoneme: string; numOfAppearance: number;}[] {
    let ret = [];
    for(var item of phonemes) {
      ret.push({phoneme:item, numOfAppearance:0});
    }
    return ret;
  }


}