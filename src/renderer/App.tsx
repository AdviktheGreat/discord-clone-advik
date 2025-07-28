import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './shared/store.js';
import icon from '../../assets/icon.svg';
import './App.css';
import MainComponent from './components/MainComponent.js';
import React from 'react';

const App = React.memo(() => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainComponent />} />
        </Routes>
      </Router>
    </Provider>
  );
})

export default App