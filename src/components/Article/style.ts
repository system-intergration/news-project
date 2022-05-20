import styled from "styled-components";
import { Typography, IconButton } from "@mui/material";

export const Container = styled.div`
  position: relative;
  width: 340px;
  height: 418px;
  border-radius: 10px;
  margin-right: 2em;
  margin-bottom: 2em;
  cursor: pointer;

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
  div {
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled(Typography)`
  position: absolute;
  bottom: 2.8em;
  left: 0.3em;
  color: var(--primary-white);
  font-weight: 700;
  font-family: "Roboto", sans-serif;
`;
export const PublishedDate = styled(Typography)`
  position: absolute;
  bottom: 0.5em;
  left: 0.5em;
  color: var(--primary-white);
  font-weight: 500;
  font-family: "Roboto", sans-serif;
`;

export const FavoriteButton = styled(IconButton)`
  position: absolute;
  top: 0.2em;
  right: 0.3em;
`;
