import { timeSince } from './index';

const seed = new Date(2000, 0, 1, 12, 30);

describe('function: timeSince', () => {
  it('Should accept a date as the seed date to compare to and return a function', () => {
    expect(typeof timeSince(new Date())).toBe('function');
  });

  it('Should accept another date 10 minutes before the seed date and return "10m"', () => {
    const date = new Date(2000, 0, 1, 12, 20);

    expect(timeSince(seed)(date)).toBe('10m');
  });

  it('Should accept another date 6 hours before the seed date and return "6h"', () => {
    const date = new Date(2000, 0, 1, 6, 30);

    expect(timeSince(seed)(date)).toBe('6h');
  });

  it('Should accept another date 6 hours and 30 minutes before the seed date and still return "6h"', () => {
    const date = new Date(2000, 0, 1, 6, 0);

    expect(timeSince(seed)(date)).toBe('6h');
  });

  it('Should accept another date 5 days before the seed date and return "5d"', () => {
    const date = new Date(1999, 11, 27);

    expect(timeSince(seed)(date)).toBe('5d');
  });

  it('Should accept another date 2 weeks before the seed date and return "2w"', () => {
    const date = new Date(1999, 11, 15);

    expect(timeSince(seed)(date)).toBe('2w');
  });

  it('Should accept another date more than 6 weeks before the seed date and return "> 6w"', () => {
    const date = new Date(1998, 0, 1);

    expect(timeSince(seed)(date)).toBe('> 6w');
  });
});
