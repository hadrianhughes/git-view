import React from 'react';
import { shallow } from 'enzyme';
import Leaderboard from './index';

const defaultProps = {
  heading: '',
  items: []
};

describe('component: Leaderboard', () => {
  it('Should render a `section` tag', () => {
    const wrapper = shallow(
      <Leaderboard
        {...defaultProps} />
    );

    expect(
      wrapper
        .find('section')
        .length
    ).toBe(1);
  });

  it('Should render an `h2` tag with the `heading` prop as a text node', () => {
    const heading = 'test heading';
    const wrapper = shallow(
      <Leaderboard
        {...defaultProps}
        heading={heading} />
    );

    expect(
      wrapper
        .find('h2')
        .text()
    ).toBe(heading);
  });

  it('When given the items prop, should render a `ul` with an `li` for each item', () => {
    const items = [
      { textLeft: 'Test Left', textRight: 'Test Right' },
      { textLeft: 'Test Left 2', textRight: 'Test Right 2' }
    ];

    const wrapper = shallow(
      <Leaderboard
        {...defaultProps}
        items={items} />
    );

    expect(
      wrapper
        .find('ul')
        .length
    ).toBe(1);

    expect(
      wrapper
        .find('li')
        .length
    ).toBe(items.length);
  });

  it('Should render each item with textLeft and textRight in `span` tags', () => {
    const items = [
      { textLeft: 'Test Left', textRight: 'Test Right' },
      { textLeft: 'Test Left 2', textRight: 'Test Right 2' }
    ];

    const wrapper = shallow(
      <Leaderboard
        {...defaultProps}
        items={items} />
    );

    items.forEach((item, i) => {
      const spans = 
        wrapper
          .find('li')
          .at(i)
          .find('span');

      expect(
        spans
          .first()
          .text()
      ).toBe(item.textLeft);

      expect(
        spans
          .last()
          .text()
      ).toBe(item.textRight);
    });
  });
});
