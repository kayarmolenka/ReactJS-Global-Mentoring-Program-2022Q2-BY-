import { MockData } from '../mockDate/date';

enum SORT_RULE {
  SORT_A_BEFORE_B = -1,
  KEEP_ORIGINAL,
  SORT_B_BEFORE_A,
}

const sortByDateFromNewestToOldest = <T extends Object>(
  date: T,
  dateToCompare: T,
  field: keyof T,
) => {
  if (date[field] > dateToCompare[field]) {
    return SORT_RULE.SORT_A_BEFORE_B;
  }
  if (date[field] < dateToCompare[field]) {
    return SORT_RULE.SORT_B_BEFORE_A;
  }
  return SORT_RULE.KEEP_ORIGINAL;
};

const sortByDateFromOldestToNewest = <T extends Object>(
  date: T,
  dateToCompare: T,
  field: keyof T,
) => {
  if (date[field] < dateToCompare[field]) {
    return SORT_RULE.SORT_A_BEFORE_B;
  }
  if (date[field] > dateToCompare[field]) {
    return SORT_RULE.SORT_B_BEFORE_A;
  }
  return SORT_RULE.KEEP_ORIGINAL;
};

const sortForReleaseDateA_Z = (activeMovies: MockData[]) => {
  activeMovies.sort((date, dateToCompare) =>
    sortByDateFromNewestToOldest(date, dateToCompare, 'releaseDate'),
  );
};
const sortForReleaseDateZ_A = (activeMovies: MockData[]) => {
  activeMovies.sort((date, dateToCompare) =>
    sortByDateFromOldestToNewest(date, dateToCompare, 'releaseDate'),
  );
};

const sortForTitleA_Z = (activeMovies: MockData[]) => {
  activeMovies.sort((a, b) => b.title.localeCompare(a.title));
};

const sortForTitleZ_A = (activeMovies: MockData[]) => {
  activeMovies.sort((a, b) => a.title.localeCompare(b.title));
};

export const sortMovies = (activeSortType: string, activeMovies: MockData[]) => {
  if (activeSortType === 'Release Date (A-Z)') sortForReleaseDateA_Z(activeMovies);
  if (activeSortType === 'Release Date (Z-A)') sortForReleaseDateZ_A(activeMovies);
  if (activeSortType === 'Title (A-Z)') sortForTitleA_Z(activeMovies);
  if (activeSortType === 'Title (Z-A)') sortForTitleZ_A(activeMovies);
};
