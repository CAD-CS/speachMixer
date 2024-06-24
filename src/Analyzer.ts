export interface DataPoint {
  value: string;
  num: number;
}

export interface Phonology {
  wordFreq: DataPoint[];
  phonemeFreq: DataPoint[];
}

export class Analyzer {
  wordStatistics: DataPoint[];
  phonemeStatistics: DataPoint[];
  words: string[];
  phonemes: string[];

  constructor(rawData: string) {
    this.phonemes = rawData.replace(" ", "").split("");
    this.words = rawData.split(" ");
    this.count(this.words, this.wordStatistics);
    this.count(this.phonemes, this.phonemeStatistics);
  }

  count(data: string[], statistics: DataPoint[]) {
    for (var datum of data) {
      this.find(datum, statistics);
    }
    let size: number = statistics.length;
    for (var datapoint of statistics) {
      datapoint.num /= size;
    }
  }

  find(datum: string, statistics: DataPoint[]) {
    for (var datapoint of statistics) {
      if (datum === datapoint.value) {
        datapoint.num++;
        return;
      }
    }
    statistics.push({ value: datum, num: 1 });
  }
}
