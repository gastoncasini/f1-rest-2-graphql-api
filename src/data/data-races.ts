import { F1 } from "./data-source";
import { yearCheck, roundCheck } from "../lib/utils";

export class RacesData extends F1 {
  constructor() {
    super();
  }

  async getYear(year: String) {
    year = yearCheck(year);

    return await this.get(`${year}.json`, {
      cacheOptions: { ttl: 60 }
    });
  }

  async getYearRound(year: String, round: number) {
    round = roundCheck(round);
    year = yearCheck(year);

    return await this.get(`${year}/${round}.json`, {
      cacheOptions: { ttl: 60 }
    });
  }
}
