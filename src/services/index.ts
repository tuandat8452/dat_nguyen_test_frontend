import { IContent, LANGUAGES } from "@/utils/interfaces";
import { fetchData } from "./fetch";

export async function getContentByLanguage(params: { lang: LANGUAGES }) {
  return fetchData<IContent[]>({
    endpoint: `pages`,
    params,
    method: "GET",
  });
}
