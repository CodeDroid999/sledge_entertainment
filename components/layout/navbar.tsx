import React from 'react';



const Navbar = () => {
    return (
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="#home">
              <div className="image-box">
                <img src="/images/log.png" alt="" style={{ maxHeight: '75px' }} />
                .
              </div>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""></span>
            </button>
            <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  