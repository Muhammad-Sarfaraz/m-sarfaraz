import React from "react";
import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";
const Home=()=>{

    const {isLoaded}=useContext(LoadingContext);

return (
    <div>
        <h1>HOME</h1>
        <button onClick={isLoaded}>Click Me</button>
    </div>
)
}

export default Home;