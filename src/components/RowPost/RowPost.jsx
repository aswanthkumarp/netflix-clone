import React, { useEffect, useState } from "react";
import { imageurl,API_KEY } from "../../constants/constants";
import axios from "../../axios";
import "./RowPost.css";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [id,setId] = useState("");
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results);

      setMovies(response.data.results);
    });
  }, []);
const handleMovie = (id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US `).then(response =>{
        console.log(response.data)
        if(response.data.results.length !== 0){
            setId(response.data.results[0])
        }
        else{
            console.log("Error : Array is Empty")
        }
    })

}
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            className={props.isSmall ? "smallposter" : "poster"}
            alt="poster"
            src={`${imageurl + obj.backdrop_path}`}
            onClick={()=>handleMovie(obj.id)}
          />
        ))}
      </div>
     {id &&  <YouTube videoId={id.key} opts={opts}/>}
    </div>
  );
}

export default RowPost;
