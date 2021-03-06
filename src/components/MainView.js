import React, { useState, useEffect } from "react";
import { FilmList } from "./FilmList/FilmList";
import { FilmView } from "./FilmView";

export const MainView = () => {
    const [films, setFilms] = useState([]);

    const [film, setFilm] = useState({
        title: "test",
        characters: [],
    })

    useEffect(() => {
        const getFilmList = async () => {
            const resp = await fetch('https://swapi.dev/api/films/')
            const json = await resp.json()
            const films = json.results;

            setFilms(films);
        }
        getFilmList()
    }, []);


    const [viewSwitch, setViewSwitch] = useState(true);
    const switchView = () => {
        setViewSwitch(!viewSwitch)
    }

    return (<>
        {
            viewSwitch ?
                <FilmList films={films} swithcView={switchView} setFilm={setFilm} /> :
                <FilmView flim={film} swithcView={switchView} />
        }
    </>)
}