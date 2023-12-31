import React, { useEffect, useState } from "react";
import { API_KEY,imageurl } from "../../constants/constants";
import "./Banner.css";
import axios from "../../axios";


function Banner() {
    const[movie,setMovie] = useState();
    useEffect(() => {
        axios
          .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
          .then((response) => {
            console.log(response.data.results)
           const results = response.data.results;
           const randomIndex = Math.floor(Math.random()*results.length)
           const randomMovie = results[randomIndex]
           setMovie(randomMovie)

          });
      }, []);
      return (
        <div
          className="banner"
          style={{
            backgroundImage: `url(${movie ? imageurl + movie.backdrop_path : ""})`,
          }}
        >
          <div className="content">
            <h1 className="title">{movie ? movie.title : ""}</h1>
            <div className="banner_buttons">
              <button className="button">Play</button>
              <button className="button">My list</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ""}</h1>
          </div>
          <div className="fade_bottom"></div>
        </div>
      );
      
}

export default Banner;
