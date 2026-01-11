import React from 'react';
import { HeaderStyle, InnerStyle } from './style';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    return (
        <HeaderStyle>
            <InnerStyle className="inner">
                <h1>
                    <Link to="/">
                        <img src="./images/logo.png" alt="" />
                    </Link>
                </h1>
                <Nav />
            </InnerStyle>
        </HeaderStyle>
    );
};

export default Header;
