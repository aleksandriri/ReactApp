import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

const App = (props) => {
  return (
    <div className="app">
      <div className="content__wrapper">
            <Header />
            <Main />
      </div>
    </div>
  );
};

export default App;
