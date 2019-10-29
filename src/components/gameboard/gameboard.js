import React, { Component } from 'react';
import CardList from './cardList';
import Scoreboard from './scoreboard';

const nbaPlayers = [
    {
        name: 'Dirk Nowitzki',
        img: 'img/character1.png',
        clicked: false
    },
    {
        name: 'Giannis Antetokounmpo',
        img: 'img/character2.png',
        clicked: false
    },
    {
        name: 'Ja Morant',
        img: 'img/character3.png',
        clicked: false
    },
    {
        name: 'James Harden',
        img: 'img/character4.png',
        clicked: false
    },
    {
        name: 'John Stockton',
        img: 'img/character5.png',
        clicked: false
    },
    {
        name: 'Kobe Bryant',
        img: 'img/character6.png',
        clicked: false
    },
    {
        name: 'Stephen Curry',
        img: 'img/character7.png',
        clicked: false
    },
    {
        name: 'Steve Nash',
        img: 'img/character8.png',
        clicked: false
    },
    {
        name: 'Zion Williamson',
        img: 'img/character9.png',
        clicked: false
    },
    {
        name: 'Larry Bird',
        img: 'img/character10.png',
        clicked: false
    },
    {
        name: 'Michael Jordan',
        img: 'img/character11.png',
        clicked: false
    },
    {
        name: 'Patrick Ewing',
        img: 'img/character12.png',
        clicked: false
    },
    {
        name: 'Ben Wallace',
        img: 'img/character13.png',
        clicked: false
    },
    {
        name: 'Kevin Garnett',
        img: 'img/character14.png',
        clicked: false
    },
    {
        name: 'Dame Lillard',
        img: 'img/character15.png',
        clicked: false
    }
]

function shuffleCard(arrGameboard) {
    arrGameboard.map(i => {
        Math.random()
    })
        .sort((i, j) => {
            return i[0] - j[0];
        })

        .map(i => {
            return a[i];
        });
}


export default class Gameboard extends Component {

    state = {
        user: {
            score: 0
        },
        players: shuffleCard(nbaPlayers)
    };


    //run this when NBA player card is clicked....
    handleCardClick = (index) => {
        if (!this.state.players[index].clicked) {
            this.setState({
                // current = index of current element in this.state.players
                //then the user repsonse to the clicked NBA player card is sets the boolean value of 'clicked' to true for the player/user
                //and also shuffles the NBA Player cards
                players: shuffleCard(this.state.players.map((player, current) => {
                    return ((current === index) ? (
                        { name, img, clicked } = { clicked: true }) : player)
                }
                )
                ),
                user: {
                    //and increment the user score
                    score: this.state.user.score + 1
                }
            });
        } else {
            //else, shuffles the NBA Player cards and a returns the player card to false for the key 'clicked'
            this.setState({
                players: shuffleCard(this.state.players.map(player => {
                    return {
                        clicked: false
                    }
                })
                ),
                //and also restarts the user score back to 0
                user: {
                    score: 0
                }
            });
        }

    }

    render() {
        return (
            <div className="Gameboard">
                <h3>
                    To play, simply click on a NBA card. You gain 1 score per card clicked, but be careful!
                    If you click on the same NBA Player card twice, the game will restart and your score will go back to 0! Enjoy! and
                </h3>
                {/* loads user score to scoreboard area */}
                <Scoreboard
                    score={this.state.user.score} />

                <CardList
                //renders the NBA player cards clicked by the player/user within the CardList DOM of the page
                    players={this.state.players}
                    handleCardClick={this.handleCardClick} />
            </div>
        )
    }



}