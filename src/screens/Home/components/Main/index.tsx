import React from "react";
import styled from "styled-components";
import { Container, Tag, News } from "./style";
import { Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFetchNewsList } from "../../../../hooks/news";
import ArticleComp from "../../../../components/Article";
import Loading from "../../../../components/Loading";
import { searchKeyState } from "../../../../recoil/searchState/state";
import { useRecoilState } from "recoil";

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
  console.log("news: ", news);
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
        Common articles
      </Typography>
      {news.isLoading || news.data === undefined || news.isRefetching ? (
        <Loading />
      ) : (
        <News>
          {news.data!.results.map((article, index) => (
            <ArticleComp article={article} key={index} />
          ))}
        </News>
      )}
    </Container>
  );
};

export default Main;
