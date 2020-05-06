import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import $ from 'jquery';
import NotFound from './images/imagenotfound.jpg';

class InTheaters extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.fetchData = this.fetchData.bind(this);

        this.state = {
                url: 'https://api.themoviedb.org/3/search/movie?api_key=619797393cd52383263f43d35d25f59f&language=en-US&query=',
                urlEnd: '&page=1&include_adult=false',
                search: this.props.search,
                movies: []
        }
    }

    componentDidMount() {

    }

    handleClick(event) {

    }

    onSubmit(e)
    {
        e.preventDefault();
    }

    onChangeSearchTitle(e)
    {
        this.setState({
            search: e.target.value
        })
    }

    async fetchData(e)
    {
        e.preventDefault();

        $.support.cors = true;

        return $.ajax({
            url: this.state.url + this.state.search + this.state.urlEnd,
            method: "GET",
            success: (data) => {
                this.setState({
                    movies: data.results
                })
            },
            error: (data) => {
                alert("Error");
            }
        })
    }

    render() {
        let link;
        return (
            <div>
                <h3>Search Movies</h3>
                <form onSubmit={this.onSumbit}>
                    <div className="form-group">
                        <label>Search: </label>
                        <input type="text"
                            value={this.state.search}
                            onChange={this.onChangeSearchTitle}
                        />
                        <button onClick={this.fetchData}>Search</button>
                    </div>
                </form>
                <div className="results">
                    <table>
                        <thead>
                            <tr>
                                <th>Movie</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map((data) => {
                                if (data.backdrop_path === null) { link = NotFound; } else {
                                    link = "https://image.tmdb.org/t/p/original" + data.backdrop_path;
                                }
                                return (
                                    <tr>
                                        <td>
                                            <img src={link} width="300" height="200"></img>
                                        </td>
                                        <td>{data.title}</td>
                                        <td><button value={data.id} onClick={this.addMovie}>Add</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}
export default InTheaters;  