import { iLinkContent } from "@/context/link-content";

export default function chunkMaker(array: iLinkContent[], chunkSize: number): iLinkContent[][] {
  const result: iLinkContent[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}
