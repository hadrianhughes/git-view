import { get } from './index';

describe('function: get', () => {
  it('Should accept an array of strings and return a function', () => {
    expect(typeof get(['foo'])).toBe('function');
  });

  it('Should accept a path and an object with a value at that path and return said value', () => {
    const input = {
      foo: {
        bar: 'baz'
      }
    };

    const path = ['foo', 'bar'];

    expect(get(path)(input)).toBe('baz');
  });

  it('Should accept a path and an object without a value at that path and return undefined', () => {
    const input = {
      foo: 'baz'
    };

    const path = ['foo', 'bar'];

    expect(get(path)(input)).toBe(undefined);
  });

  it('Should accept an invalid path and a defaultValue and return the defaultValue', () => {
    const input = {
      foo: 'baz'
    };

    const path = ['foo', 'bar'];
    const defaultValue = 'default value';

    expect(get(path)(input, defaultValue)).toBe(defaultValue);
  });
});
