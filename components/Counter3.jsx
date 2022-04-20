import React, {useContext} from 'react';
import {CounterContext} from '../contexts/CounterContext';
export default function Counter3() {
    let values = useContext(CounterContext);
    return(
                <div className="bg-light p-5 m-3 ">
                <h2 className="alert alert-info text-center">Hello Counter 3 Using Context</h2>
                <p className="text-danger">Counter : {values.counter}</p>
                <button onClick={values.increaseHandler} className="btn btn-outline-success">Increase</button>
                <button onClick={values.dncreaseHandler} className="btn btn-outline-secondary mx-2">Dncrease</button>
                <br />
                {values.counter <0 && <p className="alert alert-danger m-auto w-25 text-left">Counter Can't less than 0</p>}
    
                </div>
    )
}

