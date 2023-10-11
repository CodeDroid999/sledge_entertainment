import React from 'react';

const HeroArea = () => {
  return (
    <div className="hero_area">
      {/* Header Section */}
      <div className="hero_bg_box">
        <div className="img-box">
          <img src="../../public/images/about-img.jpg" alt="" />
        </div>
      </div>

      <header id="home" className="header_section">
    
        {/* Header Bottom */}
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="#home">1
                <div className="image-box">
                  <img src="/images/log.png" alt="" style={{ maxHeight: '75px' }} />
                </div>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""></span>
              </button>

              <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
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
      </header>

      {/* Slider Section */}
      <section className="slider_section">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {/* Carousel Items */}
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>
                        Crafting Cinematic<br />
                        <span>experiences</span>
                      </h1>
                      <p>
                        Transforming ideas into captivating stories through the magic of film. Experience creativity in
                        motion.
                      </p>
                      <div className="btn-box">
                        <a href="#about" className="btn-1">Learn more</a>
                        <a href="#contact" className="btn-2">Get A Quote</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Carousel Items */}
            {/* Add your additional carousel items here */}
          </div>
          <div className="container indicator_container">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroArea;
