const get = (path: Array<string>) => (obj: object, defaultValue?: any) => {
  const nextValue = obj[path[0]];

  if (path.length > 1) {
    if (!nextValue) return defaultValue;

    return get(path.slice(1))(nextValue, defaultValue);
  }

  return nextValue === undefined ? defaultValue : nextValue;
};

export default get;
