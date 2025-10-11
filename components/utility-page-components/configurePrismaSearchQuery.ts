//

export const configurePrismaSearchQuery = {
  language: "ts",
  fileName: "configurePrismaSearchQuery",
  extension: ".ts",
  highlightLines: [],
  code: `//@ts-nocheck //! remove the comment

import pickSelectedFields from "./pickSelectedFields";

//* QUERY CONFIGURATION *\\

export default function configureQuery<
  T extends Record<string, unknown>,
  K extends keyof T
>(query: T, ...keys: K[]) {
  const { limit, sortBy, sortOrder, search } = query;
  const filters = pickSelectedFields(query, ...keys);

  const page = Number(query.page || "1");
  const take = Number(limit || "12");
  const skip = (page - 1) * take;
  const orderBy = {
    [(sortBy as string) || "createdAt"]: sortOrder === "asc" ? "asc" : "desc",
  };

  return { page, take, skip, orderBy, search, filters };
}

//* EXAMPLE *\\

//* const filteredQuery = configureQuery(query, 'email', 'name', 'role')
`,
};
