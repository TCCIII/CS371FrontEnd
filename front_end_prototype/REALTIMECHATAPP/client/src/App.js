import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat';
import Main from './components/Main/Main';

class App extends Component {


    render() {
        return (
            <div id='tbody'>
                <Router>
                    <Route path="/" exact component={Join} />
                    <Route path="/chat" exact component={Chat} />
                </Router>

                <Main></Main>
            </div>
        );
    }
}
export default App;
