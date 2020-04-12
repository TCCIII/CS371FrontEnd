import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class InTheaters extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);

        this.state = {
                url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=619797393cd52383263f43d35d25f59f&language=en-US&page=1&region=US',
                movies: []
        }
    }

    componentDidMount() {
        $.support.cors = true;

        return $.ajax({
            url: this.state.url,
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

    handleClick(event) {

    }

    render() {
        return (
            <div>
                {this.state.movies.map((data)=>{
                    return(
                        <div>
                            <h1>{data.title}</h1>
                            <img src={"https://image.tmdb.org/t/p/original"+data.backdrop_path} width="300" height="200"></img>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default InTheaters;  