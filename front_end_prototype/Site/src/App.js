import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './Main/Main';

class App extends Component {


    render() {
        return (
            <div id='tbody'>
                <Main></Main>
            </div>
        );
    }
}
export default App;
