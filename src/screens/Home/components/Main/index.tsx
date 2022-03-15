import React from "react";
import styled from "styled-components";
import {
  Container,
  Tag,
  News,
  ArticleContainer,
  Title,
  PublishedDate,
  FavoriteButton,
} from "./style";
import { Typography, IconButton } from "@mui/material";

const Main = () => {
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
      <News>
        {Array(20)
          .fill(null)
          .map((article, index) => (
            <ArticleContainer key={index}>
              <img src="src\assets\images\img-1.png"></img>
              <div />
              <Title variant="h5">
                COVID-19: Breaking news, Logram are the best of using
              </Title>
              <PublishedDate>Mar 08, 2022</PublishedDate>
              <FavoriteButton>
                <img
                  src="src\assets\icons\favorite.svg"
                  alt="favorite-button"
                />
              </FavoriteButton>
            </ArticleContainer>
          ))}
      </News>
    </Container>
  );
};

export default Main;
