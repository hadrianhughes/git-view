import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import GlobalStyles from './styles/global';
import Layout from './components/Layout/container';
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
    <GlobalStyles />
    <Layout />
  </Provider>
);

export default App;
