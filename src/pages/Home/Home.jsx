import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

import Attractions from "../../assets/Attractions.png";
import Hotels from "../../assets/Hotels.png";
import Restaurants from "../../assets/Restaurants.png";

import "./Home.css";

const Home = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="home">
      <div className="home__header">
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

      <div className="home__footer">
        <div className="home__footerTop">
          <div>
            Want to recieve exclusive hotel offers? Subscribe to our newsletter!
          </div>

          <form
            className="home__footerTop-right"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
          >
            <input
              type="text"
              placeholder="Email address"
              className="home__emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="home__subscribe">
              Subscribe
            </button>
          </form>
        </div>

        <div className="home__footerBottom">
          <div className="home__footerBottom-top">
            <div className="home__footerBottom-topLeft">
              <div className="home__footerUpperText">
                <span>Travelling Companion.</span> Lorem, ipsum dolor,
              </div>

              <div className="home__footerLowerText">Germany</div>
            </div>

            <select id="country">
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Poland">Poland</option>
            </select>
          </div>

          <div className="home__footerBottom-center1">
            <div className="home__footerSocial">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>

            <div className="home__footerSocial">
              <FontAwesomeIcon icon={faTwitter} />
            </div>

            <div className="home__footerSocial">
              <FontAwesomeIcon icon={faInstagram} />
            </div>

            <div className="home__footerSocial">
              <FontAwesomeIcon icon={faYoutube} />
            </div>

            <div className="home__footerSocial">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>

          <div className="home__footerBottom-center2">
            <ul className="home__footerList">
              <li className="home__footerListItem">Company</li>
              <li className="home__footerListItem">Jobs</li>
              <li className="home__footerListItem">Press</li>
              <li className="home__footerListItem">Investor relations</li>
            </ul>

            <ul className="home__footerList">
              <li className="home__footerListItem">
                Mobile apps - searching on the go
              </li>
              <li className="home__footerListItem">
                Travelling Companion Business Studio
              </li>
            </ul>

            <ul className="home__footerList">
              <li className="home__footerListItem">Help</li>
              <li className="home__footerListItem">
                Learn how travelling companion works
              </li>
              <li className="home__footerListItem">Terms and conditions</li>
              <li className="home__footerListItem">Legal information</li>
              <li className="home__footerListItem">
                Do not sell my personal information
              </li>
              <li className="home__footerListItem">Privacy notice</li>
              <li className="home__footerListItem">Cyber security</li>
              <li className="home__footerListItem">
                Coronavirus (Covid-19) travel advice
              </li>
            </ul>
          </div>

          <div className="home__footerBottom-bottom">
            <div className="home__footerLogo">Travelling Companion</div>

            <div className="home__footerCopyright">
              Copyright 2022 Travelling Companion | All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
