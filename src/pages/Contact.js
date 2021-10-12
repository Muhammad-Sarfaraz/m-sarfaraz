import React from "react";

import Footer from "../components/Footer";
import Social from "../components/Social";
import Hobby from "../components/Hobby";
import Contact from "../components/Contact";

const NotFound=()=>{
return (
    <div>
      <div className="container">
        <div className="grid">
          <div className="row">
            <Hobby />
            <div className="col-3">
            <Contact />
            </div>
            <Social />
          </div>
        </div>
        <Footer />
      </div>
    </div>
)
}

export default NotFound;