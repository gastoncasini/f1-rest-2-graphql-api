import { IResolvers } from "graphql-tools";
import { getWikipediaMobileUrl } from "../lib/utils";

const type: IResolvers = {
  Season: {
    year: parent => parent.season,
    urlMobile: parent => getWikipediaMobileUrl(parent.url)
  },

  Race: {
    name: parent => parent.raceName,
    circuit: parent => parent.Circuit,
    urlMobile: parent => getWikipediaMobileUrl(parent.url)
  },
  Circuit: {
    id: parent => parent.circuitId,
    name: parent => parent.circuitName,
    location: parent => parent.Location,
    urlMobile: parent => getWikipediaMobileUrl(parent.url)
  },

  Location: {
    lng: parent => parent.long
  },

  Driver: {
    id: parent => parent.driverId,
    name: parent => `${parent.givenName} ${parent.familyName}`,
    urlMobile: parent => getWikipediaMobileUrl(parent.url)
  },
  Standing: {
    driver: parent => parent.Driver
  }
};

export default type;
