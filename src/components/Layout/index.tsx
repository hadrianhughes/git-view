import React from 'react';
import { Wrapper } from './styles';
import Search from '../Search/container';
import Profile from '../Profile/container';

interface PropTypes {
  loadedUser: bool;
}

const Layout = ({ loadedUser }: PropTypes) => (
  <Wrapper>
    <Search />
    {
      loadedUser ?
        <Profile />
        :
        null
    }
  </Wrapper>
);

export default Layout;
