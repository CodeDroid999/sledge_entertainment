import React from 'react';
import Alert from '../alert';
import Navbar from './navbar';

const Home: React.FC = () => {
    return (
        <header id="home" className="header_section">
            <div className="header_top">
                <Alert />
            </div>
            <div className="header_bottom">
                <Navbar />
            </div>
        </header>  
  );
};

export default Home;
