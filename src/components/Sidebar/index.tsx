import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import {
  NewsIcon,
  FavoriteIcon,
  SuitcaseIcon,
  NoteBookIcon,
} from '../../assets/icons';
import { SidebarItem } from './components';
import { Outlet, Link } from 'react-router-dom';

const Container = styled.div`
  width: 16rem;
  position: fixed;
  align-items: center;
`;

const Sidebar = () => {
  return (
    <Container>
      <SidebarItem icon={NewsIcon} title={'News'} to={'/'} />
      <SidebarItem icon={FavoriteIcon} title={'Favorites'} to={'/favorites'} />
      <Typography
        variant='h6'
        style={{ marginLeft: 10, marginBottom: 10, marginTop: 25 }}
      >
        Other
      </Typography>
      <SidebarItem
        icon={SuitcaseIcon}
        title={'Privacy Policy'}
        to={'/privacyPolicy'}
      />
      <SidebarItem
        icon={NoteBookIcon}
        title={'Terms of use'}
        to={'/termsOfUse'}
      />
    </Container>
  );
};

export default Sidebar;
