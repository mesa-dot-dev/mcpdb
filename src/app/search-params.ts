import { createSearchParamsCache, parseAsString } from "nuqs/server";

export const searchParamsParsers = {
  tag: parseAsString.withDefault(""),
};

export const searchParamsCache = createSearchParamsCache(searchParamsParsers);
