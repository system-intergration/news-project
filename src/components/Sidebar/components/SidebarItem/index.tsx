import React from "react";

import { Typography } from "@mui/material";
import styled from "styled-components";
import { Link, To } from "react-router-dom";

const Container = styled.div`
  margin-top: 2rem;
  border-left: 3px solid "transparent";
  width: 100%;
  padding: 0.3rem;
  padding-left: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

interface SidebarItemProps {
  icon: string;
  title: string;
  to: To;
}
const SidebarItem = (props: SidebarItemProps) => {
  return (
    <Link to={props.to} style={{ color: "#000" }}>
      <Container>
        <img src={props.icon} width={25} height={25} />
        <Typography variant="body1" style={{ marginLeft: 10, fontWeight: 500 }}>
          {props.title}
        </Typography>
      </Container>
    </Link>
  );
};

export default SidebarItem;
