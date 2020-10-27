import React, { useState, useEffect } from 'react'
import './Row.css'
import axios from './axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original"
function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerURL, setTrailerURL]= useState('')

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            // 'https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US'
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchURL])

    const opts={
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }
    const handleClick = (movie)=>{
        if(trailerURL){
            setTrailerURL('')
        }else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name )
            .then(url=>{
                const urlParams= new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'))
            })
            .catch(error=> console.log(error))
        }
    }
    return (
        <div className={"row"}>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie=>(
                    <img 
                        onClick={()=>handleClick(movie)}
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path} `}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
        </div>
    )
}

export default Row
