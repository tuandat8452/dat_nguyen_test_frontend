import { useQuery } from "@tanstack/react-query";
import { LANGUAGES } from "../interfaces";
import { getContentByLanguage } from "@/services";

export const getContent = (languague?: LANGUAGES) => {
  const lang = localStorage.getItem("lang") as LANGUAGES;
  const query = useQuery({
    queryKey: [languague, lang],
    queryFn: () => getContentByLanguage({ lang: lang || ("en" as LANGUAGES) }),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: true, // Enable the query
  });

  const content = query.data;
  if (!content) return;
  return content[0];
};
