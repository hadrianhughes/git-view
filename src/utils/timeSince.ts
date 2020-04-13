const timeSince = (seed: Date) => (date: Date): string => {
  const seedUnix = seed.getTime();
  const dateUnix = date.getTime();

  const minutesSince = (seedUnix - dateUnix) / 1000 / 60;
  const hoursSince = minutesSince / 60;
  const daysSince = hoursSince / 24;
  const weeksSince = daysSince / 7;

  if (weeksSince > 6) {
    return '> 6w';
  }

  if (daysSince > 6) {
    return Math.floor(weeksSince) + 'w';
  }

  if (hoursSince > 23) {
    return Math.floor(daysSince) + 'd';
  }

  if (minutesSince > 59) {
    return Math.floor(hoursSince) + 'h';
  }

  return minutesSince + 'm';
};

export default timeSince;
