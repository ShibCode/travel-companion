import React from "react";

import { Link } from "react-router-dom";

import Attractions from "../../assets/Attractions.png";
import Hotels from "../../assets/Hotels.png";
import Restaurants from "../../assets/Restaurants.png";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__headerContent">
        <Link to="/" className="home__logo">
          Travel Companion
        </Link>

        <div className="home__links">
          <Link to="/explore" className="home__link">
            Explore
          </Link>
          <div className="home__link">Contact Us</div>
        </div>
      </div>

      <div className="home__body">
        <div className="home__bodyLeft">
          <h1 className="home__heading">Its time to explore the world!</h1>

          <p className="home__para">
            You will be able to choose the best restaurants, Hotels and
            attractions according to your preferred location with the help of
            our travel advisory
          </p>
        </div>

        <div className="home__bodyRight">
          <div>
            <img src={Restaurants} alt="restaurants" />
          </div>

          <div>
            <img src={Hotels} alt="hotel" />
          </div>

          <div>
            <img src={Attractions} alt="attractions" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
