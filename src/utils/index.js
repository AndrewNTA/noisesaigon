import {
  BLOG,
  RECORD_STORE,
  REHEARSAL_SPACE,
  VENUE,
  PROMOTER,
  COMMUNITY,
} from "constants/index";

export const groupLinks = (links) => {
  const result = {};
  if (!links) return null;
  for (let i in links) {
    if (links[i]?.type === BLOG) {
      result[BLOG] = result[BLOG] ? [...result[BLOG], links[i]] : [links[i]];
    } else if (links[i]?.type === VENUE) {
      result[VENUE] = result[VENUE] ? [...result[VENUE], links[i]] : [links[i]];
    } else if (links[i]?.type === RECORD_STORE) {
      result[RECORD_STORE] = result[RECORD_STORE]
        ? [...result[RECORD_STORE], links[i]]
        : [links[i]];
    } else if (links[i]?.type === REHEARSAL_SPACE) {
      result[REHEARSAL_SPACE] = result[REHEARSAL_SPACE]
        ? [...result[REHEARSAL_SPACE], links[i]]
        : [links[i]];
    } else if (links[i]?.type === COMMUNITY) {
      result[COMMUNITY] = result[COMMUNITY]
        ? [...result[COMMUNITY], links[i]]
        : [links[i]];
    } else {
      result[PROMOTER] = result[PROMOTER]
        ? [...result[PROMOTER], links[i]]
        : [links[i]];
    }
  }
  return result;
};

export const mapLinkGroupDisplay = (key) => {
  switch (key) {
    case BLOG:
      return "BLOGS";
    case RECORD_STORE:
      return "RECORD STORES";
    case REHEARSAL_SPACE:
      return "REHEARSAL SPACES";
    case VENUE:
      return "VENUES";
    case PROMOTER:
      return "PROMOTERS";
    case COMMUNITY:
      return "COMMUNITIES";
    default:
      return "OTHERS";
  }
};
