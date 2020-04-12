import React, { Fragment, StatelessComponent as C } from 'react';
import GlobalStyles from './styles/global';

const App = (): C => (
  <Fragment>
    <GlobalStyles />
    Hello World!
  </Fragment>
);

export default App;
