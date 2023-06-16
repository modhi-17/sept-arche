import React from 'react';
import './HomePage.css';
import NavigationBar from '../../components/public/NavigationBar';
import SearchBar from '../../components/public/SearchBar';
import Footer from'../../components/public/Footer';
import Cards from '../../components/public/Cards';

const HomePage = () => {
  return (
    <div className="home">
      
      <div className="header">
        <NavigationBar />
        <SearchBar />
      </div>
      <div className="content">
      </div>
      <div className="cards">
        <Cards />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
