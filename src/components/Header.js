import React from 'react';
import { Link } from 'gatsby';
import Container from 'components/Container';

const Header = () => {
    return (
        <header>
            <Container type="content">
                <a href="/">
                    <p>Coronavirus Tracker</p>
                </a>
                <ul>
                    <li>
                        <Link to="/">Map | </Link>
                    </li>
                    <li>
                        <Link to="/page-2/">How to... | </Link>
                    </li>
                    <li>
                        <Link to="/news">News | </Link>
                    </li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                </ul>
            </Container>
        </header>
    );
};

export default Header;
