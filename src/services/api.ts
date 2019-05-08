/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { Auth } from "./auth";

const APP_API_BASE_URL =
  process.env[
    ["DL2_API_BASE_URL", process.env.NODE_ENV].join("_").toUpperCase()
  ];

const APP_DEFAULT_HEADERS = {
  "Charset": "utf-8",
  "Content-Type": "application/json",
  "X-DL2-Client-Domain": "foo.com",
  "X-DL2-Client-ID": "crap",
};

export interface TRequestInit extends RequestInit {
  body?: any;
}

class ApiError extends Error {
  constructor(message: string, public readonly code: number) {
    super(message);
  }
}

export async function api<R>(
  endpoint: string,
  init: RequestInit = {},
): Promise<R> {
  const { body, method } = init;
  const { token } = Auth;
  const headers = init.headers || {};

  if (token) {
    Object.assign(headers, {
      Authorization: `Bearer ${token}`,
    });
  }

  const controller = new AbortController();
  const { signal } = controller;

  const options = {
    ...init,
    body: JSON.stringify(body),
    headers: new Headers({ ...headers, ...APP_DEFAULT_HEADERS }),
    method,
    signal,
  };

  if (!method || ["GET", "HEAD"].indexOf(method) !== -1) {
    Object.assign(options, {
      body: undefined,
    });
  }

  const $timeout = setTimeout(() => controller.abort(), 3000);

  // prettier-ignore
  return fetch(`${APP_API_BASE_URL}${endpoint}`, options)
    .then(async(response: Response) => {
      const text = JSON.parse(await response.text());

      if (response.status > 299) {
        throw new ApiError(text, response.status);
      }

      return text;
    })
    // .catch((err: any) => {
    //   if (!(err instanceof ApiError)) {
    //     err = new ApiError(err.message || err, 500);
    //   }
    //
    //   return Promise.reject(err);
    // })
    .finally(() => {
      clearTimeout($timeout);
    });
}
