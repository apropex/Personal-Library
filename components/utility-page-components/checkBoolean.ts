//

export const checkBoolean = {
  language: "ts",
  fileName: "checkBoolean",
  extension: ".ts",
  highlightLines: [],
  code: `//@ts-nocheck //! remove the line

//* FUNCTION FOR CHECKING BOOLEAN VALUE *\\

export function checkBoolean<T extends Record<string, unknown>, K extends keyof T>(
  query: T | null | undefined,
  ...keys: K[]
): T {
  if (!query) return {} as T;

  const selectedQuery = { ...query };

  keys.forEach((key) => {
    if (Object.hasOwnProperty.call(query, key)) {
      const value = query[key];
      if (value === "true") selectedQuery[key] = true as T[K];
      else if (value === "false") selectedQuery[key] = false as T[K];
    }
  });

  return selectedQuery;
}

//* EXAMPLE *\\

interface iDoctorSearchQuery {
  name?: string;
  email?: string;
  contactNumber?: string;
  designation?: string;
  address?: string;
  isDeleted?: string;
  isValid?: string;
  isMarried?: string;
}

const doctorBooleanFields: (keyof iDoctorSearchQuery)[] = ["isDeleted", "isValid", "isMarried"];

//* const filteredQuery = checkBoolean(query, ...doctorBooleanFields) // query will be an object
`,
};
