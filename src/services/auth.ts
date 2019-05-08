/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { Identity } from "@dl2/identity-interface";
import { api, TRequestInit } from "./api";

const APP_IDENTITY_KEY = "APP_IDENTITY_KEY";
const APP_TOKEN_KEY = "APP_TOKEN_KEY";

interface TApiRequest {
  password?: string;
  username: string;
}

interface TApiResponse {
  identity: Identity;
  token: string;
}

export class Auth {
  public static get identity(): Identity | null {
    if (!Auth.$parsed) {
      Auth.$refresh();
    }

    return Auth.$parsed;
  }

  public static set identity(identity) {
    if (identity) {
      Auth.$identity = JSON.stringify(identity);
      Auth.$parsed = identity;
      localStorage.setItem(APP_IDENTITY_KEY, Auth.$identity);
    }
  }

  public static get token() {
    if (!Auth.$token) {
      Auth.$refresh();
    }

    return Auth.$token;
  }

  public static set token(token) {
    if (token) {
      Auth.$token = token;
      localStorage.setItem(APP_TOKEN_KEY, token);
    }
  }

  public static async authenticate(username: string): Promise<Identity>;
  public static async authenticate(
    credentials: string | TApiRequest,
  ): Promise<void | Identity> {
    //
    Auth.$refresh();

    if (Auth.$parsed) {
      return new Promise(() => Auth.$parsed);
    }

    if (typeof credentials === "string") {
      credentials = { username: credentials };
    }

    const init: TRequestInit = {
      body: credentials,
      method: "post",
    };

    // prettier-ignore
    return api<TApiResponse>("/authenticate", init)
      .then(({ identity, token }) => {
        Auth.identity = identity;
        Auth.token = token;

        Auth.$refresh();

        return Auth.$parsed!;
      });
  }

  public static logout() {
    return Auth.$cleanup();
  }

  private static $identity = localStorage.getItem(APP_IDENTITY_KEY);
  private static $parsed: Identity | null;
  private static $token = localStorage.getItem(APP_TOKEN_KEY);

  private static $cleanup() {
    Auth.$parsed = null;
    localStorage.removeItem(APP_IDENTITY_KEY);
    localStorage.removeItem(APP_TOKEN_KEY);

    return Auth.$refresh();
  }

  private static $refresh() {
    Auth.$identity = localStorage.getItem(APP_IDENTITY_KEY);
    Auth.$token = localStorage.getItem(APP_TOKEN_KEY);

    if (Auth.$identity && !Auth.$parsed) {
      Auth.$parsed = JSON.parse(Auth.$identity);
    }

    return null;
  }
}
