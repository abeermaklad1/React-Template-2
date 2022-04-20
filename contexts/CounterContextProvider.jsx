import React, {useState} from "react";
import {CounterContext} from './CounterContext';
export default function CounterContextProvider (props) {
    let [counter, setcounter] = useState(0);
    let increaseHandler = () => {
         setcounter(counter + 1);
    }
    let dncreaseHandler = () => {
        setcounter(counter - 1);
    }

    return(
        <CounterContext.Provider value={{counter, increaseHandler, dncreaseHandler}}>
            {props.children}
        </CounterContext.Provider>
    )
}