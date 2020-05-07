import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';

class Lists extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            url: 'https://cs371-backend.herokuapp.com/list/',
            movies: [],
            lists: []
        }
    }

    componentDidMount() {
        axios.get("http://cs371-backend.herokuapp.com/list/")
            .then(response => {
                this.setState({
                    lists: response.data
                })
            })
            .catch(function (error) {
                console.log(error)
                alert("error")
            })
    }

    removeMovie(e) {
        e.preventDefault();
        var movieId = e.target.value;
        $.support.cors = true;
        var newList = []
        var currentList = [];
        axios.get("http://cs371-backend.herokuapp.com/list/")
            .then(response => {
                currentList = response.data[0];
                currentList.movies.map((movie) => {
                    if(movie.id != movieId)
                    {
                        newList.push(movie);
                    }
                })
                console.log(newList);
                
                axios.post("http://cs371-backend.herokuapp.com/list", currentList)
                    .then(response => {

                    })
                    .catch(function (error) {
                        console.log(error)
                        alert("error")
                    });
            })
            .catch(function (error) {
                console.log(error)
                alert("error")
            })
    }

    handleClick(event) {

    }

    render() {
        //let link;
        return (
            <div>
                {this.state.lists.map((data) => {
                    console.log(data);
                    return (
                        <div id={data.uuid}>
                            <h1>{data.name}</h1>
                            {data.movies.map((movie) => {
                                return (
                                    <div>
                                        <span>{movie.title}</span>
                                        <Button value={movie.id} onClick={this.removeMovie}>Delete</Button>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default Lists;  