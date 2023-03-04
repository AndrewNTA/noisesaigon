import {
  BLOG,
  RECORD_STORE,
  REHEARSAL_SPACE,
  VENUE,
  PROMOTER,
  COMMUNITY,
  months,
} from "constants/index";

export const groupLinks = (links) => {
  if (!links) return null;
  const result = {};
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

export const formatPrice = (price) => {
  return new Intl.NumberFormat().format(price);
};

// Generate the start date to query
export const genStartOfDate = () => {
  const start = new Date();
  start.setUTCHours(0, 0, 0, 0);
  return start.toISOString();
};

// Generate the end date of month to query
export const genEndOfDate = () => {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  const end = new Date(year, month + 1, 0);
  end.setUTCHours(23, 59, 59, 999);
  return end.toISOString();
};

export const mapDayDisplay = (day) => {
  switch (day) {
    case 0:
      return "SUN";
    case 1:
      return "MON";
    case 2:
      return "TUE";
    case 3:
      return "WED";
    case 4:
      return "THU";
    case 5:
      return "FRI";
    case 6:
      return "SAT";
    default:
      return "";
  }
};

export const groupEventsByDate = (events) => {
  if (!events) {
    return null;
  }
  const result = {};
  for (let i in events) {
    const time = events[i].time;
    const d = new Date(time);
    const date = d.getDate();
    const day = mapDayDisplay(d.getDay());
    const data = { ...events[i], day };
    if (!result[date]) {
      result[date] = [data];
    } else {
      result[date] = [...result[date], data];
    }
  }
  return result;
};

export const getDisplayTime = () => {
  const now = new Date();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  return `${month} ${year}`;
};

export const formatDisplayFullDate = (dateStr) => {
  const now = new Date(dateStr);
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const date = now.getDate();
  return `${date} ${month} ${year}`;
};

export const formatDisplayTime = (dateStr) => {
  const date = new Date(dateStr);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = `0${minutes}`.slice(-2);
  return `${hours}:${minutes} ${ampm}`;
};
