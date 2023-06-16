import React, { useState, useEffect } from 'react';
import image1 from '../../images/boba.jpeg';
import image2 from '../../images/joker.jpg';
import image3 from '../../images/joker.jpg';
import '../public/Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % 3;
      setActiveIndex(nextIndex);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const handlePrevSlide = () => {
    const prevIndex = (activeIndex - 1 + 3) % 3;
    setActiveIndex(prevIndex);
  };

  const handleNextSlide = () => {
    const nextIndex = (activeIndex + 1) % 3;
    setActiveIndex(nextIndex);
  };

  return (
    <div className="carousel-container">
      <h3 className="slider-title">Meilleures ventes</h3>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className={`carousel-item${activeIndex === 0 ? ' active' : ''}`}>
            <img src={image1} className="d-block w-100 carousel-image" alt="Boba Fett" style={{ maxHeight: '500px' }} />
          </div>
          <div className={`carousel-item${activeIndex === 1 ? ' active' : ''}`}>
            <img src={image2} className="d-block w-100 carousel-image" alt="Dune" style={{ maxHeight: '500px' }} />
          </div>
          <div className={`carousel-item${activeIndex === 2 ? ' active' : ''}`}>
            <img src={image3} className="d-block w-100 carousel-image" alt="Joker" style={{ maxHeight: '500px' }} />
          </div>
        </div>
        <div className="carousel-controls">
          <button className="carousel-control-prev" onClick={handlePrevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel-control-next" onClick={handleNextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
