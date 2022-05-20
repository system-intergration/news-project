import Typography from "@mui/material/Typography";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Sidebar } from "../../components";
import ArticleComp from "../../components/Article";
import { signInWithGoogle } from "../../provider/firebase";
import { userState } from "../../recoil/users/state";

const Container = styled.div`
  padding-top: 5rem;
`;

const Favorites = styled.div`
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`;

const LogInRequiredContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HaveNoFavoriteContainer = styled.div`
  width: 100%;
`;

const FavoritePage = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const isLoggedIn = user.uid.length !== 0;
  return (
    <Container>
      <Sidebar />
      <Favorites>
        {isLoggedIn ? (
          <>
            <Typography
              variant="h3"
              style={{ fontWeight: 500, marginTop: 40, marginBottom: 40 }}
            >
              {`${user.displayName}'s favorite news`}
            </Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {user.favorites?.length === 0 ? (
                <HaveNoFavoriteContainer>
                  <h4>You have no favorite news! Let's pick one</h4>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      type="primary"
                      onClick={() => {
                        navigate(`/`);
                      }}
                    >
                      Go to Home
                    </Button>
                  </div>
                </HaveNoFavoriteContainer>
              ) : (
                user.favorites?.map((article, index) => {
                  return <ArticleComp article={article} key={index} />;
                })
              )}
            </div>
          </>
        ) : (
          <LogInRequiredContainer>
            <h2>Please Login</h2>
            <Button
              type="primary"
              onClick={async () => {
                let userInform = await signInWithGoogle();

                setUser({
                  ...userInform,
                });
              }}
            >
              Login
            </Button>
          </LogInRequiredContainer>
        )}
      </Favorites>
    </Container>
  );
};

export default FavoritePage;
