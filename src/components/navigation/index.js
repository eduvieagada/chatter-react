import React from 'react';
import './styles/navigation.scss';
// import img from './assets/search.png';

const Navigation = props => (
    <div className="nav">
        <ul>
            <li className="app-logo">Chatter</li>
            {/*<li>*/}
                {/*<div className="search-bar">*/}
                    {/*<input type={"text"} placeholder="search news"/>*/}
                    {/*<input type={"image"} className={"search-logo"} src={img} alt={"search-logo"}/>*/}
                {/*</div>*/}

            {/*</li>*/}
        </ul>
    </div>
);

export default Navigation;