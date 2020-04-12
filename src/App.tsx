import React, { useState } from 'react';
import GlobalStyles from './styles/global';
import Search from './components/Search';
import { Wrapper } from './AppStyles';

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
    <Wrapper>
      <GlobalStyles />
      <Search
        value={searchValue}
        onChange={handleChangeSearch}
        onSubmit={handleSearch}
        placeholder="Search..." />
    </Wrapper>
  );
};

export default App;
