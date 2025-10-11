//

export const setCookie = {
  language: "ts",
  fileName: "setCookie",
  extension: ".ts",
  highlightLines: [],
  code: `//@ts-nocheck //! remove this comment

import { Response } from "express";
import { isDev } from "../config"; // env config, process.env.NODE_ENV

const cookieOptions = {
  httpOnly: true,
  secure: !isDev,
  sameSite: !isDev ? ("none" as const) : ("lax" as const),
};

export const setCookie = {
  accessToken(res: Response, token: string, maxAge?: number) {
    res.cookie("accessToken", token, {
      ...cookieOptions,
      maxAge: maxAge || 1000 * 60 * 60 * 24 * 7, // 7 days
    });
  },

  refreshToken(res: Response, token: string, maxAge?: number) {
    res.cookie("refreshToken", token, {
      ...cookieOptions,
      maxAge: maxAge || 1000 * 60 * 60 * 24 * 30, // 30 days
    });
  },

  allTokens(res: Response, accessToken: string, refreshToken: string) {
    this.accessToken(res, accessToken);
    this.refreshToken(res, refreshToken);
  },

  clearCookies(res: Response) {
    res.clearCookie("accessToken", cookieOptions);
    res.clearCookie("refreshToken", cookieOptions);
  },
};
`,
};
