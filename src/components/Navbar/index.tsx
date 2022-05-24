import React, { useCallback, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Button, Dropdown, Menu, Space } from 'antd';
import { FiSettings } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import { BiLogOutCircle } from 'react-icons/bi';

import { SearchIcon, DropdownIcon } from '../../assets/icons';
import {
  Container,
  InputContainer,
  RoundSearch,
  UserAvatarContainer,
  RoundButton,
} from './style';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../provider/firebase';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/users/state';
import { FcGoogle } from 'react-icons/fc';
import { searchKeyState } from '../../recoil/searchState/state';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const [keyword, setKeyword] = useState('');

  const handleSearching: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const [searchKey, setSearchKeyState] = useRecoilState(searchKeyState);

  const menu = (
    <Menu style={{ borderRadius: 10 }}>
      <Menu.Item key={1}>
        {user.uid.length === 0 ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}
            onClick={async () => {
              let userInform = await signInWithGoogle();

              setUser({
                ...userInform,
              });
            }}
          >
            <FcGoogle />

            <div style={{ marginLeft: 10 }}>Login With Google</div>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ marginRight: 5 }}>{user.displayName}</div>
            <BsPerson />
          </div>
        )}
      </Menu.Item>
      {user.uid.length !== 0 && (
        <Menu.Item key={2}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onClick={() => {}}
          >
            <div>Setting</div>
            <FiSettings />
          </div>
        </Menu.Item>
      )}
      {user.uid.length !== 0 && (
        <Menu.Item key={3}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onClick={async () => {
              await auth.signOut();

              setUser({
                uid: '',
                displayName: '',
                email: '',
                phoneNumber: '',
                photoURL: '',
                favorites: [],
              });
            }}
          >
            <div>Logout</div>
            <BiLogOutCircle />
          </div>
        </Menu.Item>
      )}
    </Menu>
  );
  return (
    <AppBar position='fixed' color='inherit'>
      <Container>
        <Toolbar variant='dense'>
          <Typography
            variant='h6'
            color='inherit'
            component='div'
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
            News
          </Typography>
        </Toolbar>
        <InputContainer className='input-container'>
          <RoundSearch
            className='round-search'
            value={keyword}
            size='large'
            placeholder='Article name or keywords...'
            prefix={
              <img src={SearchIcon} alt='search-icon' width={20} height={20} />
            }
            onChange={handleSearching}
            onKeyUp={(e) => {
              if (
                e.key === 'Enter' &&
                keyword.toLocaleLowerCase() !==
                  searchKey.keyword.toLocaleUpperCase()
              ) {
                setSearchKeyState({ keyword: keyword });
              }
            }}
          />
        </InputContainer>
        <RoundButton
          type='primary'
          onClick={() => {
            if (
              keyword.toLocaleLowerCase() !==
              searchKey.keyword.toLocaleUpperCase()
            ) {
              setSearchKeyState({ keyword: keyword });
            }
          }}
        >
          Search
        </RoundButton>
        <Dropdown overlay={menu} placement='bottomRight'>
          <UserAvatarContainer>
            {user.uid.length !== 0 ? (
              <Avatar alt='Rose' src={user.photoURL} />
            ) : (
              <RoundButton type='primary'>Login</RoundButton>
            )}
            <IconButton size='small'>
              <img
                src={DropdownIcon}
                alt={'dropdown-icon'}
                height={15}
                width={15}
              />
            </IconButton>
          </UserAvatarContainer>
        </Dropdown>
      </Container>
    </AppBar>
  );
};

export default Navbar;
