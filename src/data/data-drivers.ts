import { F1 } from "./data-source";
import { yearCheck, roundCheck } from "../lib/utils";

export class DriversData extends F1 {
  constructor() {
    super();
  }

  async getDrivers(pageElements: number = -1, page: number = 1) {
    if (pageElements === -1) {
      return await this.get(`circuits.json?limit=80`, {
        cacheOptions: { ttl: 60 }
      });
    }
    const offset = (page - 1) * pageElements;
    const limit = pageElements;
    const filter = `limit=${limit}&offset=${offset}`;

    return await this.get(`circuits.json?${filter}`, {
      cacheOptions: { ttl: 60 }
    });
  }

  async getDriversByYear(year: String) {
    year = yearCheck(year);
    return await this.get(`${year}/drivers.json`, {
      chacheOptions: { ttl: 60 }
    });
  }

  async getDriversByYearAndRound(year: String, round: number) {
    year = yearCheck(year);
    round = roundCheck(round);
    return await this.get(`${year}/${round}/drivers.json`, {
      chacheOptions: { ttl: 60 }
    });
  }

  async getDriver(id: String) {
    return await this.get(`drivers/${id}.json`, {
      chacheOptions: { ttl: 60 }
    });
  }
}
