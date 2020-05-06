import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';

class Lists extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            url: 'https://cs371-backend.herokuapp.com/list/',
            movies: [],
            lists: [
                {
                  "user": {
                    "username": "ben",
                    "password": "",
                    "uuid": "1acfb00f-82f2-4fb2-8bbe-fd76e6ace0f1"
                  },
                  "movies": [
                    {
                      "popularity": 0,
                      "voteCount": 6,
                      "video": false,
                      "posterPath": "/sasH9EeTPBsJ9xW5PIG7i9Jy3Ou.jpg",
                      "adult": false,
                      "backgroundPath": "/bzjW2fhmSEsnlosDyPI2TWmEhFZ.jpg",
                      "originalLanguage": "en",
                      "originalTitle": "Bad Apples",
                      "genreIDs": [],
                      "title": "Bad Apples",
                      "voteAverage": 4.199999809265137,
                      "overview": "It’s Halloween night, and two “bad apples” decide to play some wicked tricks on the one house in a suburban cul-de-sac that is not celebrating Halloween. They terrorize a young couple in their home and these tricks become increasingly more sinister as the night progresses, finally ending in a Halloween the entire neighborhood will never forget.",
                      "releaseDate": "2018-02-06",
                      "uuid": "b6abcbac-b41d-4bb2-afcb-23b76683365e",
                      "id": 497269
                    },
                    {
                        "popularity": 0,
                        "voteCount": 6,
                        "video": false,
                        "posterPath": "/sasH9EeTPBsJ9xW5PIG7i9Jy3Ou.jpg",
                        "adult": false,
                        "backgroundPath": "/bzjW2fhmSEsnlosDyPI2TWmEhFZ.jpg",
                        "originalLanguage": "en",
                        "originalTitle": "Bad Apples",
                        "genreIDs": [],
                        "title": "Testing Another Movie Title",
                        "voteAverage": 4.199999809265137,
                        "overview": "It’s Halloween night, and two “bad apples” decide to play some wicked tricks on the one house in a suburban cul-de-sac that is not celebrating Halloween. They terrorize a young couple in their home and these tricks become increasingly more sinister as the night progresses, finally ending in a Halloween the entire neighborhood will never forget.",
                        "releaseDate": "2018-02-06",
                        "uuid": "b6abcbac-b41d-4bb2-afcb-23b76683365e",
                        "id": 497269
                      }
                  ],
                  "name": "list1",
                  "uuid": "6a30b6f0-d9ce-45a0-bc8f-b409a3ed6d00"
                },
                {
                  "user": {
                    "username": "nick",
                    "password": "",
                    "uuid": "eece1133-60da-42cf-88ae-7e002baa7e72"
                  },
                  "movies": [
                    {
                      "popularity": 0,
                      "voteCount": 0,
                      "video": false,
                      "posterPath": "/cDYtrX0r80OdhzT78dZaUUunioT.jpg",
                      "adult": false,
                      "backgroundPath": null,
                      "originalLanguage": "es",
                      "originalTitle": "Star wars: Goretech",
                      "genreIDs": [],
                      "title": "Star wars: Goretech",
                      "voteAverage": 0,
                      "overview": "The imperial forces of Lord Quimio capture princess Felelia and steal a big cargo of vital force for the rebellion. Obi Wan Quequena, warned by the princess, starts gathering a group of brave people to recover the force, save the princess and end the empire that strikes the galaxy.",
                      "releaseDate": "2018-12-07",
                      "uuid": "78798f73-b744-4a7f-bb9b-a8e272c00e7a",
                      "id": 567097
                    }
                  ],
                  "name": "TestListNick",
                  "uuid": "e936c6a4-3ddf-4b6c-b95c-404f82653ffe"
                }
              ]
        }
    }

    componentDidMount() {
        $.support.cors = true;

        return $.ajax({
            url: this.state.url,
            method: "GET",
            contentType: "application/json",
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
                {this.state.lists.map((data) => {
                    return (
                        <div>
                            <h1>{data.name}</h1>
                            {data.movies.map((movie) => {
                                return (
                                        <div>{movie.title}<Button>Delete</Button></div>
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