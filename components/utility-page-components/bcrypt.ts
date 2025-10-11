//

export const bcrypt = {
  language: "ts",
  fileName: "bcrypt",
  extension: ".ts",
  highlightLines: [],
  code: `//@ts-ignore //! remove the line while using

import { compare, genSalt, hash } from "bcryptjs";

// BUILDING BCRYPT HASHED
export async function buildHash(password: string): Promise<string> {
  const saltValue = 13; //! should be from env

  const salt = await genSalt(saltValue);
  return await hash(password, salt);
}

// COMPARING HASHED VS PASSWORD
export async function compareHash(password: string, hash: string): Promise<boolean> {
  return await compare(password, hash);
}
`,
};
