import React, { useEffect, useState } from "react";

export const FilmView = ({ flim, swithcView }) => {
    const [nameList, setNameList] = useState([]);

    useEffect(() => {
        let list = [];
        flim.characters.forEach(async (http) => {
            await fetch(http)
                .then((res) => res.json())
                .then((data) => { list.push(data.name.toString()) });
        });
        list.sort();
        console.log(list);
        setNameList(list);

    }, [flim.characters]);

    return (<>
        <h2>Film detail</h2>
        <h2>{flim.title}</h2>
        {nameList.map((n, index) => (<div key={index} >{n} </div>))}
        <button onClick={swithcView}>return</button>
    </>)
}