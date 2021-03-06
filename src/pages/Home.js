import React from "react";
import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";


import Footer from "../components/Footer";
import Social from "../components/Social";
import Bio from "../components/Bio";
import Hobby from "../components/Hobby";
import Portfolio from "../components/Portfolio";

const Home = () => {
  const { isLoaded } = useContext(LoadingContext);

  return (
    <div>
      <div className="container">
        <div className="grid">
          <div className="row">
            <Hobby />
            <div className="col-3">
              <Bio />
              <Portfolio />
            </div>
            <Social />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
