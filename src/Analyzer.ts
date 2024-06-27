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
    Analyzer.count(this.words, this.wordStatistics);
    Analyzer.count(this.phonemes, this.phonemeStatistics);
  }

  getAnalysis(): Phonology {
    return {
      wordFreq: this.wordStatistics,
      phonemeFreq: this.phonemeStatistics,
    };
  }

  static count(data: string[], statistics: DataPoint[]): DataPoint[] {
    for (var datum of data) {
      this.find(datum, statistics);
    }
    let size: number = data.length;
    for (var datapoint of statistics) {
      datapoint.num /= size;
    }
    return statistics;
  }

  static find(datum: string, statistics: DataPoint[]): DataPoint[] {
    if (datum === "") return statistics;
    for (var datapoint of statistics) {
      if (datum === datapoint.value) {
        datapoint.num++;
        return statistics;
      }
    }
    statistics.push({ value: datum, num: 1 });
    return statistics;
  }
}
