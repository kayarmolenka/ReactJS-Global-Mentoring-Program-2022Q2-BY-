export async function useFetch(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  return response.ok ? response.json() : response;
}
