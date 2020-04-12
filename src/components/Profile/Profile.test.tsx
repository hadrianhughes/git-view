import React from 'react';
import { shallow } from 'enzyme';
import Profile from './index';

const defaultProps = {
  avatar: ''
};

describe('component: Profile', () => {
  it('Should render an `a` and an `img`', () => {
    const wrapper = shallow(
      <Profile {...defaultProps} />
    );

    expect(
      wrapper
        .find('a')
        .length
    ).toBe(1);

    expect(
      wrapper
        .find('img')
        .length
    ).toBe(1);
  });

  it('Should accept an `avatar` prop and use it as the src for the `img` tag', () => {
    const imgSrc = 'img-src';

    const wrapper = shallow(
      <Profile
        {...defaultProps}
        avatar={imgSrc} />
    );

    expect(
      wrapper
        .find('img')
        .props()
        .src
    ).toBe(imgSrc);
  });

  it('Should accept a `userName` prop and render it as the only text node', () => {
    const userName = 'test name';

    const wrapper = shallow(
      <Profile
        {...defaultProps}
        userName={userName} />
    );

    expect(wrapper.text()).toBe(userName);
  });

  it('Should accept a `url` prop and use it as the `href` for the `a` tag', () => {
    const url = 'test-url';

    const wrapper = shallow(
      <Profile
        {...defaultProps}
        url={url} />
    );

    expect(
      wrapper
        .find('a')
        .props()
        .href
    ).toBe(url);
  });
});
