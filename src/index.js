/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './styles.css';

import { createStore } from 'redux';
import rootReducer from './components/reducers';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Main />
    </div>
  );
}
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

//ReactDOM.render(<App />, rootElement);
