import { createContext, useState } from "react";

const initialValue = true;

export const APIContext = createContext();

export const APIProvider = (props) => {
    const [data, setData] = useState(initialValue);

    return (
        <APIContext.Provider value={[data,setData]}>
            {props.children}
        </APIContext.Provider>
    );
}