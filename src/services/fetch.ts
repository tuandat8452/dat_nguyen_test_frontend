const BASE_URL = "https://api.test.soa-dev.net/api/v1/";

interface FetchDataParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface FetchDataOptions {
  endpoint: string;
  params?: FetchDataParams;
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: FormData | FetchDataParams; // Accept FormData or regular object
  additionalData?: FetchDataParams; // Additional data to include in headers
  hasBlobType?: boolean;
}
export async function fetchData<T>(
  opts: FetchDataOptions & { hasBlobType: true }
): Promise<Blob>;
export async function fetchData<T>(opts: FetchDataOptions): Promise<T>;
export async function fetchData<T>(opts: FetchDataOptions) {
  const {
    endpoint,
    params = {},
    method = "GET",
    body = {},
    additionalData = {},
    hasBlobType,
  } = opts;
  let url = `${BASE_URL}${endpoint}`;

  if (method === "GET") {
    // Add 'role' parameter to params for GET requests
    const searchParams = new URLSearchParams();
    // Format params to query string
    for (const [key, value] of Object.entries(params)) {
      if (Array.isArray(value)) {
        value.forEach((item) => searchParams.append(key, item));
      } else {
        searchParams.append(key, value);
      }
    }
    const queryString = searchParams.toString();
    url = `${url}?${queryString}`;
  }

  const options: RequestInit = {
    method: method,
    headers: {},
  };

  if (method === "POST" || method === "PATCH" || method === "DELETE") {
    if (body instanceof FormData) {
      // If body is FormData, set headers and body directly
      options.body = body;
    } else {
      // Otherwise, assume it's a regular object and stringify it
      options.body = JSON.stringify({
        ...body,
      });
      options.headers = {
        "Content-Type": "application/json",
      };
    }
  }

  // Merge additionalData into headers
  options.headers = {
    ...options.headers,
    ...additionalData,
  };

  const response = await fetch(url, options);
  if (hasBlobType) {
    return await response.blob();
  }
  return await response.json();
}
