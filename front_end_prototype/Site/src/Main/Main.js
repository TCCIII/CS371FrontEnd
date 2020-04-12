import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InTheaters from '../InTheaters';
import SearchMovie from '../SearchMovie';

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({

})

class Main extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);

        this.state = {
        }
    }

    componentDidMount() {
        
    }

    handleClick(event) {

    }

    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar">
                        <Link to="/" className="navbar-brand">Movie Site</Link>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/">In Theaters</Link>
                                </li>
                                <li>
                                    <Link to="/search">Search Movies</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route path="/" exact component={InTheaters}/>
                    <Route path="/search" exact component={SearchMovie}/>
                </div>
            </Router>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);  