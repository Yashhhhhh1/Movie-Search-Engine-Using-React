import React, { Component } from "react";
import axios from "axios";
import "./index.css"

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: []
        }
    }

    componentDidMount() {
        if(this.props.values === ""){
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
            .then((res) => {
                console.log(res.data.results[0])
                this.setState({
                    movieData: res.data.results
                })
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.values !== this.props.values && this.props.values !== "") {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.props.values}&api_key=cfe422613b250f702980a3bbf9e90716`)
                .then((res) => {
                    this.setState({
                        movieData: res.data.results
                    })
                }).catch((error)=> {
                    console.log(error.message)
                    return(
                        <h1>{error.message}</h1>
                    )
                })
        }

        if(this.props.values === "" && prevProps.values !== ""){
            axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
            .then((res) => {
                this.setState({
                    movieData: res.data.results
                })
            });
        }
    }

    displayData = () => {
        console.log(this.props)
    }

    render() {
        return (
            <>
                <div style={{display: "flex", flexWrap: "wrap", margin: "auto", width: "80%"}}>
                    {this.state.movieData.map((item, i) => {
                        return <div key={i} className="movie-card">
                            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} alt="Movie Poster" />
                            <p className="movie-title">{item.title}</p>
                            </div>
                    })}
                </div>
                    
            </>
        )
    }
}




export default Card;