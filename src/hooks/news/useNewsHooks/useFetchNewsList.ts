import { APIInstance } from "../../../apis/index";
import { useQuery } from "react-query";
import { config } from "../config";
import { FETCH_NEWS_LIST } from "../constants";
import { News } from "../types";
import { API_KEY } from "../../../constants";

export const fetchNewsList = () => {
  return APIInstance.get<News>(
    config,
    `/api/1/news?apikey=${API_KEY}&q=war&language=en`
  );
};

export const useFetchNewsList = () => {
  return useQuery<News>([FETCH_NEWS_LIST], () => fetchNewsList(), {
    keepPreviousData: true,
    refetchOnWindowFocus: true,
    retry: 2,
  });
};
