import React from 'react';
import './App.css';
import PageRoute from 'Route/PageRoute';
import { Provider } from 'react-redux';
import { store } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <PageRoute />
    </Provider>
  );
}

export default App;
