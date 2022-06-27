export async function useFetch<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const response = await fetch(input, init);
  return response.status !== 204 && response.ok ? await response.json() : await response;
}
