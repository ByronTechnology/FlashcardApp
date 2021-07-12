import React from "react";
import {Switch, Route} from "react-router-dom"
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home"
import Decks from "./Decks/Decks"
import NewDeck from "./Decks/NewDeck";
import EditDeck from "./Decks/EditDeck";
import NewCard from "./Homepage/NewCard";
import EditCard from "./Homepage/EditCard";
import Study from "./Study/Study";



function Layout() {
  
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path='/decks/new' exact>
            <NewDeck />
          </Route>
          <Route path='/decks/:deckId/edit'>
              <EditDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path='/decks/:deckId/cards/new'>
            <NewCard />
          </Route>
          <Route path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>   
          <Route path='/decks/:deckId' exact >
            <Decks />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;