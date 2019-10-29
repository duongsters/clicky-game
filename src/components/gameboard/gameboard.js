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

