import React from 'react';
import { shallow } from 'enzyme';
import Layout from './index';
import Search from '../Search/container';
import Profile from '../Profile/container';

const defaultProps = {
  loadedUser: false
};

describe('component: Layout', () => {
  it('Should always render the `Search` component', () => {
    const wrapper = shallow(
      <Layout {...defaultProps} />
    );

    expect(
      wrapper
        .find(Search)
        .length
    ).toBe(1);
  });

  it('Should render the following components if the `loadedUser` prop is true: `Profile`', () => {
    const wrapper = shallow(
      <Layout
        {...defaultProps}
        loadedUser />
    );

    expect(
      wrapper
        .find(Profile)
        .length
    ).toBe(1);
  });
});
