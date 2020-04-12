import React from 'react';
import GlobalStyles from './styles/global';
import Search from './components/Search/container';
import { Wrapper } from './AppStyles';

const App = () => (
  <Wrapper>
    <GlobalStyles />
    <Search />
  </Wrapper>
);

export default App;
