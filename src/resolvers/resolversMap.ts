import { IResolvers } from "graphql-tools";
import query from "./query";
import type from "./type";
/* import mutation from "./mutation"; */

export const LIST: string[] = [];
const resolvers: IResolvers = {
  ...query,
  ...type
  /*   ...mutation */
};

export default resolvers;
