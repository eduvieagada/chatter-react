import React from 'react';
import './styles/cards.scss'
import img from './assets/610741220.0.jpg'

const Card = props => (

    <div className={"Card"}>
        <img src={props.item.urlToImage} alt={"news-logo"}/>
        <div>
            <p className={"source"}>{props.item.source.name}</p>
            <p>{props.item.title}</p>
            <p className={"author"}>By <span className={"author-name"}>{props.item.author}</span> | {new Date(props.item.publishedAt).toDateString()}</p>
        </div>

    </div>
);
export default Card;