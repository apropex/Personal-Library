//

import { bcrypt } from "./bcrypt";
import { checkBoolean } from "./checkBoolean";
import { configurePrismaSearchQuery } from "./configurePrismaSearchQuery";
import { envChecker } from "./envChecker";
import { pickSelectedFields } from "./pickSelectedFields";
import { setCookie } from "./setCookie";

export interface iUtilityCodeContent {
  language: string;
  fileName: string;
  extension: string;
  highlightLines: number[];
  code: string;
}

export const utilityCodeContent: iUtilityCodeContent[] = [
  bcrypt,
  checkBoolean,
  configurePrismaSearchQuery,
  setCookie,
  envChecker,
  pickSelectedFields,
];

//

export const getUtilityContent = (fileName: string): iUtilityCodeContent => {
  return utilityCodeContent.filter((utility) => utility.fileName === fileName)?.[0];
};
