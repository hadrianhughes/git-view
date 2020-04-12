import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import GlobalStyles from './styles/global';
import Search from './components/Search/container';
import Profile from './components/Profile/container';
import { Wrapper } from './AppStyles';
import reducer from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagas.forEach(sagaMiddleware.run);

const App = () => (
  <Provider store={store}>
    <Wrapper>
      <GlobalStyles />
      <Search />
      <Profile />
    </Wrapper>
  </Provider>
);

export default App;
