import React from 'react';
import { Avatar, Wrapper, Name } from './styles';

interface PropTypes {
  avatar: string;
  userName: string;
  url: string;
}

const Profile = ({ avatar, userName, url }: PropTypes) => (
  <Wrapper>
    <Name href={url} target="_blank" rel="noopener noreferrer">{userName}</Name>
    <Avatar src={avatar} alt={userName} />
  </Wrapper>
);

export default Profile;
