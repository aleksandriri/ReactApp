import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Main from './Components/Main/Main';

const App = (props) => {
    // debugger;
    return (
        <div className="app">
            <div className="app__inner">
                <Navigation/>
                <Main state={props.state} dispatch={props.dispatch}/>
            </div>
        </div>
    );
};

export default App;
