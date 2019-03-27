import React, {Fragment} from 'react';
import './styles/jumbo.scss'
import img from './assets/image.jpg';

const Jumbo = props => (
    <Fragment>
        <div className={"jumbo"}>
            <div className={"gradient"}>
                <p className={"caption"}>{props.news.title}</p>
                <span className={"span1"}>{props.news.author} | {new Date(props.news.publishedAt).toDateString()}</span>
            </div>
            <img src={props.news.urlToImage} alt={"jumbo"}/>
        </div>

    </Fragment>

);

export default Jumbo;