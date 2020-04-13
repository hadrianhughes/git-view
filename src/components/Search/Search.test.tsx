import React from 'react';
import { shallow } from 'enzyme';
import Search from './index';
import { Input, Button, Form } from './styles';

const defaultProps = {
  value: '',
  onChange: () => {},
  onSubmit: () => {}
};

describe('component: Search', () => {
  it('Should render a `form` tag, an `input` tag and a `button` tag', () => {
    const wrapper = shallow(
      <Search {...defaultProps} />
    );

    expect(wrapper.find(Form).length).toBe(1);
    expect(wrapper.find(Input).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
  });

  it('Should accept a `value` prop and use it as the `input` tag\'s value', () => {
    const testValue = 'test value';

    const wrapper = shallow(
      <Search
        {...defaultProps}
        value={testValue} />
    );

    expect(
      wrapper
        .find(Input)
        .props()
        .value
      ).toBe(testValue);
  });

  it('Should accept an `onChange` prop which is fired when the `input` element is used', () => {
    const changeFn = jest.fn();

    const wrapper = shallow(
      <Search
        {...defaultProps}
        onChange={changeFn} />
    );

    wrapper
      .find(Input)
      .simulate('change');

    expect(changeFn).toHaveBeenCalled();
  });

  it('Should accept an `onSubmit` prop which is fired when the `button` is clicked', () => {
    const submitFn = jest.fn();

    const wrapper = shallow(
      <Search
        {...defaultProps}
        onSubmit={submitFn} />
    );

    wrapper
      .find(Button)
      .simulate('click');

    expect(submitFn).toHaveBeenCalled();
  });

  it('Should accept a `placeholder` prop which is used as the `placeholder` value on the `input` element', () => {
    const testPlaceholder = 'test placeholder';

    const wrapper = shallow(
      <Search
        {...defaultProps}
        placeholder={testPlaceholder} />
    );

    expect(
      wrapper
        .find(Input)
        .props()
        .placeholder
    ).toBe(testPlaceholder);
  });
});
