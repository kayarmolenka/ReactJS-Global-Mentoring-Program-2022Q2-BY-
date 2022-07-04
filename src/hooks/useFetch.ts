import { IFetchMovieListResponse } from '../store';

export async function useFetch(
  input: RequestInfo,
  init?: RequestInit,
): Promise<IFetchMovieListResponse> {
  const response = await fetch(input, init);
  return response.ok ? response.json() : response;
}
