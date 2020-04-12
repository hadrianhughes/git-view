import React, { Fragment, useState } from 'react';
import GlobalStyles from './styles/global';
import Search from './components/Search';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearch = (e: SyntheticEvent): void => {
    const { value } = (e.target as HTMLInputElement);
    setSearchValue(value);
  };

  const handleSearch = (): void => {
    console.info('Perform search!');
  };

  return (
    <Fragment>
      <GlobalStyles />
      <Search
        value={searchValue}
        onChange={handleChangeSearch}
        onSubmit={handleSearch} />
    </Fragment>
  );
};

export default App;
