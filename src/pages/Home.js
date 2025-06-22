import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery – your one-stop shop for beautiful,
          easy-to-care-for houseplants. We deliver green joy right to your
          doorstep. Browse our curated plant collection and bring your indoor
          space to life!
        </p>
        <Link to="/shop">
          <button className="start-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
