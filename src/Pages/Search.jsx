import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";//permite pegar a queryString
import {MovieCard} from '../components/MovieCard';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

export function Search(){

    const [searchParams] = useSearchParams();

    const [movies,setMovies] = useState([]);
    const query = searchParams.get("q");
    
    /*Pegando os filmes da API */

    const getSearch = async (url) =>{
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    }

    useEffect(()=>{
        const searchUrl = `${searchURL}?${apiKey}&query=${query}`;
        getSearch(searchUrl)
    },[query]);

    return(
        <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{query}</span>
            </h2>
            <div className="movies_container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length >0  && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>

      </div>
    )
}