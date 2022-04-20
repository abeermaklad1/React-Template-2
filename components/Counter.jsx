import {React, useState, useEffect} from "react";
import {Container} from 'react-bootstrap';


export default function Counter() {
    //let [counter, setcounter] = useState(0);
    let [header, setHeader] = useState('Hello Counter');
    //let [isOpen, setIsOpen] = useState(false);
        let [state, setState] = useState({
        counter: 0,
        isOpen: false
    })

    let increaseHandler = () => {
        // setcounter(counter + 1);
        setState({
            ...state,
            counter: state.counter + 1
        })

    }
    let dncreaseHandler = () => {
        //setcounter(counter - 1);
        setState({
            ...state,
            counter: state.counter - 1
        })

    }
    let changeHeader = () => {
        setHeader('Counter Header Changed');
        //setState({
        //    ...state,
        //    header: 'Counter Header Changed'
        //})
    }

    let toggleFun = () => {
        //setcounter(counter + 1);
        //setIsOpen(!isOpen)
        setState({
            ...state,
            isOpen: !state.isOpen,
            counter: state.counter + 1
        })
    }

    //useEffect
    useEffect(()=>{

    }, [state.count, state.isOpen])
  return (
    <div>
        <Container className="bg-light p-5 m-3 ">
            <p className="alert alert-info text-center">{header}</p>
            <p className="text-danger">Counter : {state.counter}</p>
            <button onClick={increaseHandler} className="btn btn-outline-success">Increase</button>
            <button onClick={dncreaseHandler} className="btn btn-outline-secondary mx-2">Increase</button>
            <br />
            {state.counter <0 && <p className="alert alert-danger m-auto w-25 text-left">Counter Can't less than 0</p>}
            <button onClick={changeHeader} className="btn btn-outline-info my-2 text-center">Change Header</button>
            <br />
            <button onClick={toggleFun} className="btn btn-outline-danger my-2 text-center">Acordian</button>
            {state.isOpen && <p>Hello Toggle</p>}
            {/* <button className="btn btn-outline-danger my-2 text-center">Show</button>
            {state.isOpen && <p>Hello Toggle</p>} */}

        </Container>
    </div>
  );
}
