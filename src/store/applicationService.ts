import { IFetchMovieListResponse } from './applications';
import { useFetch } from '../hooks/useFetch';

export const applicationService = (
  url: string,
  init?: RequestInit,
): Promise<IFetchMovieListResponse> => {
  return useFetch(url, init);
};
