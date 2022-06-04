import { date } from '../mockDate/date';

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

const sortForReleaseDateA_Z = () => {
  date.sort((date, dateToCompare) =>
    sortByDateFromNewestToOldest(date, dateToCompare, 'realiseDate'),
  );
};
const sortForReleaseDateZ_A = () => {
  date.sort((date, dateToCompare) =>
    sortByDateFromOldestToNewest(date, dateToCompare, 'realiseDate'),
  );
};

const sortForTitleA_Z = () => {
  date.sort((a, b) => b.title.localeCompare(a.title));
};

const sortForTitleZ_A = () => {
  date.sort((a, b) => a.title.localeCompare(b.title));
};

export const sortMovies = (activeSortType: string) => {
  if (activeSortType === 'Release Date (A-Z)') sortForReleaseDateA_Z();
  if (activeSortType === 'Release Date (Z-A)') sortForReleaseDateZ_A();
  if (activeSortType === 'Title (A-Z)') sortForTitleA_Z();
  if (activeSortType === 'Title (Z-A)') sortForTitleZ_A();
};
