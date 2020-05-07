import React, { Component } from 'react';
import $ from 'jquery';
import NotFound from './images/imagenotfound.jpg';

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
        let link;
        return (
            <div>
                {this.state.movies.map((data)=>{
                    if (data.backdrop_path === null) { link = NotFound; } else { 
                        link = "https://image.tmdb.org/t/p/original" + data.backdrop_path;
                    }
                    return(
                            <table key={data.id}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={link} alt={link} width="300" height="200"/>
                                        </td>
                                        <td>
                                            <h1>{data.title}</h1>
                                            <p>{data.overview}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    );
                })}
            </div>
        );
    }
}
export default InTheaters;  