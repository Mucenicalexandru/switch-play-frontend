import React from 'react';
import SearchGameToOffer from './SearchGameToOffer';
import {Link} from "react-router-dom";

function GameCard({
  gamesList,
  openMakeAnOfferComponent,
  showComponent,
  offerId,
  setMessageModal,
  UserToSendMessage,
  setUserToSendMessage
})
{
  return (
    <div className="trade-offer-container">
      {gamesList.map((selectedGame, index) => (
        <div className="d-flex justify-content-center" key={index}>
          <div
            className="card h-100 game-result-card"
            style={{ width: '18rem', marginTop: '20px' }}
          >
            <img
              className="card-img-top"
              src={selectedGame.game.picture}
              alt="game logo"
            />
            <div className="card-body">
              <h5 className="card-title">{selectedGame.game.title}</h5>
              <p className="card-text">
                Category : {selectedGame.game.category}
              </p>
              <p className="card-text">User : <Link to={`/user-rating/${selectedGame.user.id}`}>{selectedGame.user.firstName}</Link></p>
              <a href={`/add-review/${selectedGame.user.id}`}>Add review</a>
              <p className="card-text">Rating : {selectedGame.game.rating}</p>

              <button
                id="makeAnOffer"
                onClick={(e) => {
                  openMakeAnOfferComponent(selectedGame.id);
                  e.target.parentElement.parentElement.setAttribute(
                    'id',
                    'show'
                  );
                  for (let el of document.getElementsByClassName(
                    'card h-100 game-result-card'
                  ))
                    el.hidden = true;
                  document.getElementById('show').hidden = false;
                }}
                className="btn btn-special"
              >
                Make an offer
              </button>
              <button className="btn btn-special" onClick={()=>{
                const s = { ...UserToSendMessage };
                s.id = selectedGame.user.id
                s.firstName= selectedGame.user.firstName
                setUserToSendMessage(s);
                setMessageModal(true)}}>Send message</button>
            </div>
          </div>
        </div>
      ))}
      {showComponent ? <SearchGameToOffer offerId={offerId} /> : null}
    </div>
  );
}

export default GameCard;
