//

export const pickSelectedFields = {
  language: "ts",
  fileName: "pickSelectedFields",
  extension: ".ts",
  highlightLines: [],
  code: `//@ts-nocheck //! remove this comment

//* PICK SELECTED FIELDS *\\
// select some fields from an object and return

export default function pickSelectedFields<T extends Record<string, unknown>, K extends keyof T>(
  query: T | null | undefined,
  ...keys: K[]
): Partial<Pick<T, K>> {
  const selectedQuery: Partial<Pick<T, K>> = {};

  if (!query) return selectedQuery;

  keys.forEach((key) => {
    if (Object.hasOwnProperty.call(query, key)) {
      selectedQuery[key] = query[key];
    }
  });

  return selectedQuery;
}

//* EXAMPLE *\\

const obj = {
  name: "Abdullah",
  email: "abdullah@example.com",
  address: "Chattogram",
  country: "Bangladesh",
};

const filteredObj = pickSelectedFields(obj, "name", "email");

//* filteredObj = { name: "Abdullah", email: "abdullah@example.com" }
`,
};
