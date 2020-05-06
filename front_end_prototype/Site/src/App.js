import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './Main/Main';
import Lists from './Lists';

class App extends Component {


    render() {
        return (
            <div id='tbody'>
                <Main/>
                <Lists/>
            </div>
        );
    }
}
export default App;
