import React, { useState } from "react";
import Note from "./Note";
import { lists } from "../data/lists";

export default function Search(props) {
  let [state, setState] = useState({
    inputValue: "",
  });

  let holdText = (value) => {
    setState({
      ...state,
      inputValue: value,
    });
  };
  let searchList = () => {
 
  }

  console.log(lists);
  return (
    <>
      <div className="container bg-light mt-4 p-4">
        <input
          placeholder="Search notes"
          className="form-control mb-5"
          type="text"
          onChange={(e) => {
            holdText(e.target.value);
          }}
          onKeyUp={searchList}
        />
        <p className="bg-secondary text-white p-2 rounded-2">
          {state.inputValue}
        </p>
        <br />
        {/* <div className="container bg-light my-4"> */}
        <div className="row justify-content-center mx-4 rounded-2 border-dark">
        {lists && lists.map((list, index) => {
            if(list.header.toLowerCase().includes( state.inputValue.toLowerCase())){
                return <Note key={index} title={list.header} des={list.desc} />;
            }
            return true
        })}
        {/* {
            lists.filter((list, index) => {
                return <Note key={index} title={list.header} des={list.desc} />;
            })
        } */}
        </div>
        
      {/* </div> */}
      </div>

      
    </>
  );
}
