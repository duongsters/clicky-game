import React, { Component } from 'react';

export default class Player extends Component {

    renderClick = () => {
        this.props.handleCardClick(this.props.index);
    }

    render(){ return(
            <div className="player">
                <img 
                    src={this.props.player.img} 
                    alt="player" 
                    className="player-pic"
                    onClick={this.renderClick}/>
            </div>

    )
    }
}

