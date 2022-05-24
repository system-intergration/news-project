import React from 'react';

import { Typography } from '@mui/material';
import styled from 'styled-components';
import { Link, To, NavLink } from 'react-router-dom';

const Container = styled.div`
  margin: 1rem 1rem;
  border-left: 3px solid 'transparent';
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
  const [isActive, setIsActive] = React.useState(false);
  return (
    <NavLink
      to={props.to}
      style={{ color: '#000' }}
      className={({ isActive }) => {
        setIsActive(isActive);
        return 'active';
      }}
    >
      <Container className={isActive ? 'ant-btn-primary' : ''}>
        <img src={props.icon} width={25} height={25} />
        <Typography variant='body1' style={{ marginLeft: 10, fontWeight: 500 }}>
          {props.title}
        </Typography>
      </Container>
    </NavLink>
  );
};

export default SidebarItem;
