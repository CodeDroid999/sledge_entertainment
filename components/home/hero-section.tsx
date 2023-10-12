import React from 'react';
import Navbar from '../layout/navbar';

const HeroArea = () => {
  return (
    <div className="hero_area" style={{ position: 'relative', top: 0, zIndex: -1 }}>
        <Navbar />
      {/* Header Section */}
      <div className="hero_bg_box">
        <div className="img-box">
          <img src="../../public/images/about-img.jpg" alt="image box" />
        </div>
      </div>   
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
