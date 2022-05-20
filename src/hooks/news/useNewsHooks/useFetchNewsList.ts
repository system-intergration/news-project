import { APIInstance } from "../../../apis/index";
import { useQuery } from "react-query";
import { config } from "../config";
import { FETCH_NEWS_LIST } from "../constants";
import { News } from "../types";
import { API_KEY } from "../../../constants";

export const fetchNewsList = (q: string) => {
  return APIInstance.get<News>(
    config,
    `/news?apikey=${API_KEY}&q=${q}&language=en`
  );
};

export const useFetchNewsList = (q: string) => {
  return useQuery<News>([FETCH_NEWS_LIST, q], () => fetchNewsList(q), {
    keepPreviousData: true,
    refetchOnWindowFocus: true,
    retry: 2,
    enabled: Boolean(q),
  });
};
