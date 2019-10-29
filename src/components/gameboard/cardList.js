import React from 'react';
import Player from './player';

const CardList = (props) => {
    return (
        <div className="player-card">
            {props.players.map((player, index) =>
                <Player
                    player={player}
                    index={index}
                    handleCardClick={props.handleCardClick}
                    key={player.name} />)}
        </div>
    )
};

export default CardList;