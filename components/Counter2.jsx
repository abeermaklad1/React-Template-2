import React from 'react';
import {CounterContext} from '../contexts/CounterContext';
export default function Counter2() {
    return(
        <CounterContext.Consumer>
            {(value) => {
                <div className="bg-light p-5 m-3 ">
                <h2 className="alert alert-info text-center">Hello Counter 2</h2>
                <p className="text-danger">Counter : {value.counter}</p>
                <button onClick={value.increaseHandler} className="btn btn-outline-success">Increase</button>
                <button onClick={value.dncreaseHandler} className="btn btn-outline-secondary mx-2">Increase</button>
                <br />
                {value.counter <0 && <p className="alert alert-danger m-auto w-25 text-left">Counter Can't less than 0</p>}
    
                </div>
            }}
        </CounterContext.Consumer>
    )
}
