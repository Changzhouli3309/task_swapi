import React from "react";
import { ListItem } from "./ListItem";

export const FilmList = ({films, swithcView, setFilm}) => {



    return (<>
        <h2>FilmList</h2>
        {films.map((film)=>(
            <ListItem key={film.episode_id} film={film} swithcView={swithcView} setFilm={setFilm}/>
        ))}
        
    </>);
}