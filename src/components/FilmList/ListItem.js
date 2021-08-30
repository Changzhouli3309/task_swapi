import React from "react";

export const ListItem = ({ film, swithcView, setFilm }) => {

    const goDetail = () => {
        setFilm({
            title: film.title,
            characters: film.characters,
        });
        swithcView();
    }

    return (<div>
        <h3>Title: {film.title}</h3>
        <p>Release date: {film.release_date}</p>
        <button onClick={goDetail}>detail</button>
    </div>)
}