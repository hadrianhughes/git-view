import React from 'react';
import { Heading, List, Item } from './styles';

interface ItemProp {
  textLeft: string;
  textRight: string;
}

interface PropTypes {
  heading: string;
  items: Array<ItemProp>;
}

const Leaderboard = ({ heading, items }: PropTypes) => (
  <section>
    <Heading>{heading}</Heading>
    <List>
      {
        items.map((item, i) => (
          <Item key={i}>
            <span>{item.textLeft}</span>
            <span>{item.textRight}</span>
          </Item>
        ))
      }
    </List>
  </section>
);

export default Leaderboard;
