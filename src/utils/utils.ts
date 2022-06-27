export const mapSortsName = (typeSort: string) => {
  if (typeSort === 'Release date') {
    return 'release_date';
  }
  if (typeSort === 'Genre') {
    return 'genres';
  }

  return 'vote_average';
};
