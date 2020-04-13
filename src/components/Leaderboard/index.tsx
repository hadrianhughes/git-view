import React from 'react';

interface Item {
  textLeft: string;
  textRight: string;
}

interface PropTypes {
  heading: string;
  items: Array<Item>;
}

const Leaderboard = ({ heading, items }: PropTypes) => (
  <section>
    <h2>{heading}</h2>
    <ul>
      {
        items.map((item, i) => (
          <li key={i}>
            <span>{item.textLeft}</span>
            <span>{item.textRight}</span>
          </li>
        ))
      }
    </ul>
  </section>
);

export default Leaderboard;
