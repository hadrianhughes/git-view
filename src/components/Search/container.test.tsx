import React from 'react';
import { shallow } from 'enzyme';
import { SearchContainer } from './container';
import Search from './index';

const defaultProps = {
  searchValue: '',
  setSearchValue: () => {},
  performSearch: () => {}
};

describe('container: Search', () => {
  it('Should pass the `searchValue` prop to the `value` prop of the child component', () => {
    const searchValue = 'test value';
    const wrapper = shallow(
      <SearchContainer
        {...defaultProps}
        searchValue={searchValue} />
    );

    expect(
      wrapper
        .find(Search)
        .props()
        .value
    ).toBe(searchValue);
  });

  it('Should call the `setSearchValue` prop with the event target value when the `onChange` prop of the child component is called', () => {
    const setSearchValue = jest.fn();

    const value = 'test value';
    const event = {
      target: {
        value
      }
    };

    const wrapper = shallow(
      <SearchContainer
        {...defaultProps}
        setSearchValue={setSearchValue} />
    );

    wrapper
      .find(Search)
      .props()
      .onChange(event);

    expect(setSearchValue).toHaveBeenCalled();
  });

  it('Should preventDefault when the form in the child component is submitted', () => {
    const preventDefault = jest.fn();
    const event = { preventDefault };

    const wrapper = shallow(
      <SearchContainer {...defaultProps} />
    );

    wrapper
      .find(Search)
      .props()
      .onSubmit(event);

    expect(preventDefault).toHaveBeenCalled();
  });

  it('Should call the `performSearch` prop when the `onSubmit` prop of the child component is called', () => {
    const performSearch = jest.fn();
    const wrapper = shallow(
      <SearchContainer
        {...defaultProps}
        performSearch={performSearch} />
    );

    wrapper
      .find(Search)
      .props()
      .onSubmit({ preventDefault: () => {} });

      expect(performSearch).toHaveBeenCalled();
  });
});
