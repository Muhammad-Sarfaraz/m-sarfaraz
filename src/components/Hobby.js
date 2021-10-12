import React from "react";
import { Link,useLocation} from "react-router-dom";
import { BLOGS_URL,CONTACT_URL,ARTS_URL } from "../routes/Web";

const Hobby = () => {
  const location=useLocation();

  const showHomePageUrl=()=>{
    if(location.pathname!=='/'){
      return true;
    }
    return false;
  }

  return (
    <div className="col-1">
      <nav>
      {showHomePageUrl() ? <Link to="/">Home </Link> : ''}
        <Link to="/blogs">Writings </Link>
        <Link to="/arts">Art</Link>
        <Link to="/contacts">Contact</Link>
      </nav>
    </div>
  );
};

export default Hobby;
