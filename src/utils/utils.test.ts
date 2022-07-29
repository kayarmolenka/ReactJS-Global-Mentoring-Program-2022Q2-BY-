import { mapNameSorts, mapSortsName } from './utils';
import { ValueSortMovie } from '../models';

describe('utils', () => {
  describe('mapSortsName util', () => {
    it('should return release_date when mapSortsName invoked with ValueSortMovie.RELEASE_DATE parameter', () => {
      expect(mapSortsName(ValueSortMovie.RELEASE_DATE)).toEqual('release_date');
    });

    it('should return genres when mapSortsName invoked with ValueSortMovie.GENRE parameter', () => {
      expect(mapSortsName(ValueSortMovie.GENRE)).toEqual('genres');
    });

    it('should return vote_average when mapSortsName invoked with ValueSortMovie.RATING parameter', () => {
      expect(mapSortsName(ValueSortMovie.RATING)).toEqual('vote_average');
    });
  });

  describe('mapNameSorts util', () => {
    it('should return ValueSortMovie.RELEASE_DATE when mapNameSorts invoked with release_date parameter', () => {
      expect(mapNameSorts('release_date')).toEqual(ValueSortMovie.RELEASE_DATE);
    });

    it('should return ValueSortMovie.GENRE when mapNameSorts invoked with genres parameter', () => {
      expect(mapNameSorts('genres')).toEqual(ValueSortMovie.GENRE);
    });

    it('should return ValueSortMovie.RATING when mapNameSorts invoked with vote_average parameter', () => {
      expect(mapNameSorts('vote_average')).toEqual(ValueSortMovie.RATING);
    });
  });
});
