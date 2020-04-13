import React, { Fragment } from 'react';
import { Wrapper } from './styles';
import Search from '../Search/container';
import Profile from '../Profile/container';
import Leaderboard from '../Leaderboard';

interface PropTypes {
  loadedUser: bool;
  repositories: Array<object>;
}

const Layout = ({ loadedUser, repositories }: PropTypes) => (
  <Wrapper>
    <Search />
    {
      loadedUser ?
        <Fragment>
          <Profile />
          <Leaderboard heading="Last Activity" items={repositories} />
        </Fragment>
        :
        null
    }
  </Wrapper>
);

export default Layout;
