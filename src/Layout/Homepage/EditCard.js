import { Link, useParams } from "react-router-dom"
import React, {useState, useEffect} from "react"
import { readCard, readDeck } from "../../utils/api";
import Form from "../Form.js";

function EditCard(){

    const {deckId, cardId} = useParams();
    const [deck, setDeck] = useState({name:"",id:0, description:""})
    const newForm = {
        front: "",
        back: ""
    }
    const [form, setForm] = useState(newForm)


    useEffect(() => {
        const getDeck = async () => {
            const theDeck = await readDeck(deckId);
            setDeck(theDeck)
            const theCard = await readCard(cardId)
            setForm(theCard)
        }
        getDeck();
    },[deckId, cardId])
    
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
                </ol>
            </nav>
            <h2>Edit Card</h2>
            <Form cardId={cardId} deckId={deckId}/>
        </>
    )
}
export default EditCard;