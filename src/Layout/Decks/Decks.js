import React, { useState, useEffect } from "react";
import { useParams, Switch, Route, Link } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Deck from "./Deck"
import CardList from "../Homepage/CardList";


function Decks(){
    
    const [deck,setDeck] = useState({cards:[]})
    const {deckId} = useParams();
    
    useEffect(() =>{
        async function getDeck(){
            const response = await readDeck(deckId);
            setDeck(response)
        }
        getDeck();
    },[deckId])

    return (
        <Switch>
            <Route>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
                    </ol>
                </nav>
                <div>
                    <Deck deck={deck} />
                </div>
                <h3>Cards</h3>
                <div className="card">
                    <CardList deck={deck} setDeck={setDeck}/>
                </div>
            </Route>
        </Switch>
    )
}
export default Decks;