import styled from "styled-components";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Article } from "../../hooks/news/types";

const Container = styled.div`
  padding: 7rem;

  width: 100%;
  height: 100%;

  .article-detail__content {
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
  }
`;

const Title = styled(Typography)`
  font-weight: 700;
  letter-spacing: 0em;
`;

const MainImage = styled.img`
  width: 100%;
  height: 600px;
  border-radius: 10px;
  margin: 2em 0;
  object-fit: cover;
`;

const Description = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0em;
`;

const PublishedDateTime = styled(Typography)`
  font-family: Overlock;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  margin: 1.5em 0;
`;

const AuthorName = styled(Typography)`
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  margin-bottom: 1.5em;
`;

interface LocationState {
  state: {
    article: Article;
  };
}

const ArticleDetailPage = () => {
  const articleId = window.location.href.split("/").pop();
  const { state } = useLocation();

  const { article } = state as LocationState["state"];

  console.log(articleId);
  return (
    <Container>
      <Title variant="h3">{article.title}.</Title>
      <MainImage
        src={
          article.image_url
            ? article.image_url
            : "https://cdn.pixabay.com/photo/2016/11/22/19/17/buildings-1850129__340.jpg"
        }
        alt="article-image"
      />
      <Description>{article.description}</Description>

      <PublishedDateTime>{article.pubDate}</PublishedDateTime>

      <AuthorName>
        By {article.creator ? article.creator[0] : "Author"}
      </AuthorName>
      <p className="article-detail__content">{article.content}</p>
    </Container>
  );
};

export default ArticleDetailPage;
