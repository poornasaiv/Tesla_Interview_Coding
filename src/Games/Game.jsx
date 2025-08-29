import React from 'react'
import { useEffect, useState } from 'react'
import GameCard from './GameCard.jsx'
import "./styles.css"
import { fetchGames } from './fetchGames.jsx'
const Game = () => {

    const [gameList, setGameList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(()=>{
        fetchGames()
        .then((data) => {
            setGameList(data);
            setLoading(false)
        })  
        .catch((err) => {
            console.log(err);
            setError(String(err));
            setLoading(false)
        });
    }, [])
    
    return (
        <div className="container">
            <h2>Games</h2>
            {loading && <h4>Loading......</h4>}
            {error && <h4>{error}</h4>}
            {!loading && !error &&
            gameList.map((game) => <GameCard id={game.id} name={game.name} inStock={game.inStock} key={game.id}/>)}
        </div>
    )
}

export default Game;