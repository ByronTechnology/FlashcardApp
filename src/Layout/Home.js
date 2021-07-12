import DeckList from "./Decks/Decklist"
import { Link } from "react-router-dom"
import React from "react"

function Home(){
    
    return (
        <>
            <Link className="btn btn-secondary mb-2" to="/decks/new">Create Deck</Link>
            <DeckList />
        </>
    )
}

export default Home;