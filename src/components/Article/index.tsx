import React, { useState } from "react";
import { Article } from "../../hooks/news/types";
import { Container, FavoriteButton, PublishedDate, Title } from "./style";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/users/state";
import { doc, updateDoc } from "firebase/firestore";
import { db, signInWithGoogle } from "../../provider/firebase";
import { Modal, Button } from "antd";
import { useNavigate } from "react-router";

interface ArticleProps {
  article: Article;
}

const ArticleComp = (props: ArticleProps) => {
  const { article } = props;
  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userState);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const isLoggedIn = user.uid.length !== 0;

  const handleOk = async () => {
    setIsModalVisible(false);
    let userInform = await signInWithGoogle();

    setUser({
      ...userInform,
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const isFavorite =
    user.favorites?.findIndex(
      (fav) =>
        fav.source_id === article.source_id && fav.title === article.title
    ) !== -1;

  const handleTogglingFavorite = async () => {
    if (!isFavorite) {
      const newFavList = user.favorites?.concat(article);

      setUser({ ...user, favorites: newFavList });

      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        favorites: JSON.stringify(newFavList),
      });
    } else {
      const newFavList = user.favorites?.filter(
        (favArticle) => favArticle.source_id !== article.source_id
      );

      setUser({ ...user, favorites: newFavList });

      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        favorites: JSON.stringify(newFavList),
      });
    }
  };
  return (
    <Container>
      <img
        src={
          article.image_url
            ? article.image_url
            : "https://d33wubrfki0l68.cloudfront.net/0b975db41c73858ff2f77fd2f8089709fe0c17b1/a94ba/images/event-images/newsgallery/tng_about_400w.jpg"
        }
        style={{ objectFit: "cover" }}
        onClick={() =>
          navigate(`/article/detail/${article.source_id}`, {
            state: { article: article },
          })
        }
      ></img>
      <div />
      <Title
        variant="h5"
        onClick={() =>
          navigate(`/article/detail/${article.source_id}`, {
            state: { article: article },
          })
        }
      >
        {article.title}
      </Title>
      <PublishedDate
        onClick={() =>
          navigate(`/article/detail/${article.source_id}`, {
            state: { article: article },
          })
        }
      >
        {article.pubDate}
      </PublishedDate>
      <FavoriteButton
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {isFavorite ? (
          <FaHeart
            style={{ color: "red" }}
            onClick={async (e) => {
              e.stopPropagation();

              if (isLoggedIn) {
                handleTogglingFavorite();
                return;
              }
              showModal();
            }}
          />
        ) : (
          <FaRegHeart
            style={{ color: "white" }}
            onClick={async (e) => {
              e.stopPropagation();

              if (isLoggedIn) {
                handleTogglingFavorite();
                return;
              }
              showModal();
            }}
          />
        )}
      </FavoriteButton>
      <Modal
        title="Login Required"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>Please Login before using our functions</h3>
      </Modal>
    </Container>
  );
};

export default ArticleComp;
