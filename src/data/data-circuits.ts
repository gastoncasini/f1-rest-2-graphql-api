import { F1 } from "./data-source";

export class CircuitsData extends F1 {
  constructor() {
    super();
  }
  async getCircuits(pageElements: number = -1, page: number = 1) {
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

  async getCircuit(id: String) {
    return await this.get(`circuits/${id}.json`, {
      chacheOptions: { ttl: 60 }
    });
  }
}
