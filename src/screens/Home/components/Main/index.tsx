import React from "react";
import styled from "styled-components";
import { Container, Tag, News } from "./style";
import { Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFetchNewsList } from "../../../../hooks/news";
import ArticleComp from "../../../../components/Article";
import Loading from "../../../../components/Loading";

const Main = () => {
  const news = useFetchNewsList();

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
    "Economic",
    "Crypto",
    "Food",
    "Politic",
    "Beauty",
    "Weather",
    "Stock",
  ];

  if (news.isError) {
    return <div>An error occurred</div>;
  }

  return (
    <Container>
      <div className="tags-list">
        {KEY_WORDS.map((keyword, index) => (
          <Tag key={index}>{keyword}</Tag>
        ))}
      </div>
      <Typography
        variant="h3"
        style={{ fontWeight: 500, marginTop: 40, marginBottom: 40 }}
      >
        Common articles
      </Typography>
      {news.isLoading ? (
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
