import React from 'react';

interface PropTypes {
  avatar: string;
  userName: string;
  url: string;
}

const Profile = ({ avatar, userName, url }: PropTypes) => (
  <section>
    <a href={url}>
      <span>{userName}</span>
      <img src={avatar} alt={userName} />
    </a>
  </section>
);

export default Profile;
