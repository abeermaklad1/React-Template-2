import {useState} from 'react';

export function useCounter(){
    let [counter, setcounter] = useState(0);
    let increaseHandler = () => setcounter(counter + 1);
    let dncreaseHandler = () => setcounter(counter - 1);

    return {
        counter,
        increaseHandler,
        dncreaseHandler
    }

}