import React, { useEffect, useState } from "react";

export const FilmView = ({ flim, swithcView }) => {
    const [characterList, setCharacterList] = useState([]);
    const [islaoding, setLaoding] = useState(true);

    useEffect(() => {
        const getNameList = async () => {
            const data = await Promise.all(flim.characters.map(url => fetch(url).then(character => character.json())));
            setCharacterList(data);
            setLaoding(false);
        }
        getNameList();
    }, [flim]);

    return (<>
        <h2>Film detail</h2>
        <h2>{flim.title}</h2>
        {islaoding ?
            <h2>Laoding...</h2> :
            characterList.sort((a, b) => { return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0; })
                .map((character, index) => (<div key={index} >{character.name} </div>))}
        <button onClick={swithcView}>return</button>
    </>)
}