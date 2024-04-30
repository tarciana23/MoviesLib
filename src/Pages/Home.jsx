import {useState, useEffect} from "react";
import { MovieCard } from "../components/MovieCard";

import './MoviesGrid.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export function Home(){

    const [topMovies,setTopMovies] = useState([]);

    const getTopRateMovies = async(url) =>{
        const res = await fetch(url);
        const data = await res.json();

       setTopMovies(data.results);
    };

    useEffect(()=>{
        const topRateUrl= `${moviesURL}top_rated?${apiKey}`;
        
        getTopRateMovies(topRateUrl);
    },[])


    return(
      <div className="container">
        <h2 className="title">Melhores filmes:</h2>
        <div className="movies_container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length >0  && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>

      </div>
    )
}