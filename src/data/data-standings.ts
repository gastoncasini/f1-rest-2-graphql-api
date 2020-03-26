import { F1 } from "./data-source";
import { yearCheck } from "../lib/utils";

export class StandingsData extends F1 {
  constructor() {
    super();
  }

  async getStandingsBySeason(year: String) {
    year = yearCheck(year);
    return await this.get(`${year}/driverStandings.json`, {
      cacheOptions: { ttl: 60 }
    });
  }
}
