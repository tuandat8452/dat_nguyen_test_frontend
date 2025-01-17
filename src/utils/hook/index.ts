"use client";

import { useQuery } from "@tanstack/react-query";
import { LANGUAGES } from "../interfaces";
import { getContentByLanguage } from "@/services";

export const useContent = () => {
  if (typeof window === "undefined") return {};
  const query = useQuery({
    queryKey: [localStorage.getItem("lang") as LANGUAGES],
    queryFn: () =>
      getContentByLanguage({
        lang: (localStorage.getItem("lang") as LANGUAGES) || "en",
      }),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: true, // Always enabled
  });

  const content = query.data;
  return {
    content: content ? content[0] : undefined,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
};
