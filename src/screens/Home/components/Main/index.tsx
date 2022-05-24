import React from "react";
import styled from "styled-components";
import { Container, Tag, News } from "./style";
import { Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFetchNewsList } from "../../../../hooks/news";
import ArticleComp from "../../../../components/Article";
import Loading from "../../../../components/Loading";
import { searchKeyState } from "../../../../recoil/searchState/state";
import { useRecoilState, useRecoilValue } from "recoil";

const Main = () => {
  const [searchKey, setSearchKey] = useRecoilState(searchKeyState);
  const news = useFetchNewsList(
    searchKey.keyword.length === 0 ? "all" : searchKey.keyword
  );

  const KEY_WORDS: string[] = [
    "Technology",
    "Cooking",
    "Business",
    "Economic",
    "Crypto",
    "Food",
    "Politic",
    "Beauty",
    "Weather",
    "Stock",
    "Sport",
    "Human",
    "Weather",
    "Disaster",
    "Terrorism",
    "Hollywood",
    "Sea Game",
  ];

  if (news.isError) {
    return (
      <Container>
        <div style={{ height: "100vh", textAlign: "center" }}>
          An error occurred
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <div className="tags-list">
        {KEY_WORDS.map((keyword, index) => (
          <Tag
            key={index}
            onClick={() => {
              setSearchKey({ keyword });
            }}
          >
            {keyword}
          </Tag>
        ))}
      </div>
      <Typography
        variant="h3"
        style={{ fontWeight: 500, marginTop: 40, marginBottom: 40 }}
      >
        {searchKey.keyword === "all" || searchKey.keyword.length === 0
          ? "Common articles"
          : `Search for "${searchKey.keyword}"`}
      </Typography>
      {news.isLoading || news.data === undefined || news.isRefetching ? (
        <Loading />
      ) : (
        <News>
          {news.data!.results.map((article, index) => (
            <ArticleComp article={article} key={index} />
          ))}
          {news.data!.results.length === 0 && (
            <div style={{ textAlign: "center", width: "100%" }}>
              <img src="https://global.developer.mi.com/assets/img/no-result-icon.b496f066.svg" />
              <h3 className="mt-3">There's no result</h3>
            </div>
          )}
        </News>
      )}
    </Container>
  );
};

export default Main;
