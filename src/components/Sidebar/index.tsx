import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {
  NewsIcon,
  FavoriteIcon,
  SuitcaseIcon,
  NoteBookIcon,
} from "../../assets/icons";
import { SidebarItem } from "./components";

const Container = styled.div`
  width: 16rem;
  position: fixed;
  align-items: center;
`;

const Sidebar = () => {
  return (
    <Container>
      <SidebarItem icon={NewsIcon} title={"News"} />
      <SidebarItem icon={FavoriteIcon} title={"Favorites"} />
      <Typography
        variant="h6"
        style={{ marginLeft: 10, marginBottom: 10, marginTop: 25 }}
      >
        Other
      </Typography>
      <SidebarItem icon={SuitcaseIcon} title={"Privacy Policy"} />
      <SidebarItem icon={NoteBookIcon} title={"Terms of use"} />
    </Container>
  );
};

export default Sidebar;
