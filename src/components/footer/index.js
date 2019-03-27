import React from 'react';
import './styles/footer.scss'

const Footer = props => (
    <div className={"footer"}>
        <p>An Eduvie Production &copy; {new Date().getFullYear()}</p>
    </div>
);

export default Footer;