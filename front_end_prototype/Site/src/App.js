import React, { Component } from 'react';

import InTheaters from './InTheaters';
import SearchMovie from './SearchMovie';

class App extends Component {


    render() {
        return (
            <div id='tbody'>
                <SearchMovie/>
            </div>
        );
    }
}
export default App;
