import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import { SearchIcon, DropdownIcon } from "../../assets/icons";
import {
  Container,
  InputContainer,
  RoundSearch,
  UserAvatarContainer,
  RoundButton,
} from "./style";

const Navbar = () => {
  return (
    <AppBar position="fixed" color="inherit">
      <Container>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            News
          </Typography>
        </Toolbar>
        <InputContainer className="input-container">
          <RoundSearch
            className="round-search"
            size="large"
            placeholder="Article name or keywords..."
            prefix={
              <img src={SearchIcon} alt="search-icon" width={20} height={20} />
            }
          />
        </InputContainer>
        <RoundButton type="primary">Search</RoundButton>
        <UserAvatarContainer>
          <Avatar alt="Rose" src="src\assets\images\avatar.jpeg" />
          <IconButton size="small">
            <img
              src={DropdownIcon}
              alt={"dropdown-icon"}
              height={15}
              width={15}
            />
          </IconButton>
        </UserAvatarContainer>
      </Container>
    </AppBar>
  );
};

export default Navbar;
