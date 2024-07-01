//URLS
export const API_URL = "https://api.spacexdata.com/v4/launches";

// LAUNCH DATA PAGE LABELS
export const HEADER = "SpaceX Launches 🚀";
export const SEARCH_PLACEHOLDER = "Search for Launched by Name";
export const SEARCH_ARIA_LABEL = "Search for SpaceX Launches byName";
export const SORT_BY_DATE_LABEL = "Sort by Date";
export const SUCCESS_LABEL = "Success";
export const FAILURE_LABEL = "Failure";

// UX STATE MESSAGES
export const LOADING_MESSAGE = "Loading...";
export const NO_LAUNCH_DATA_MESSAGE = "No launch data could be found.";
export const ERROR_MESSAGE =
  "Something went wrong! Please try again later. If the issue persists, contact our Support team.";

// PAGINATION
export const ITEMS_PER_PAGE = 10;

// SORTING
export const DEFAULT_DATE_FORMAT = "D MMMM, YYYY";
export const DEFAULT_SORT_ORDER = "descending";

// FETCHING
export const ERROR_MESSAGE_FETCH_FAILED = (url, e) =>
  `Failed to fetch data from ${url}: ${e}`;
