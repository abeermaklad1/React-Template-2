import React, {useState} from "react";
import {DarkContext} from './DarkContext';
export default function DarkContextProvider (props) {

    let [islight,setIslight]=useState(true);
    let [backgroungcolor,setBackgroundcolor]=useState('white');
    let [textcolor,setTextcolor]=useState('black');
    let [footerbackground,setFooterbackground]=useState('lightblue');
    let [cardbackground,setCardbackground]=useState('white');
    let [insidecard,setinsidecard]=useState('white');
    let [btnbackground,setbtnbackground]=useState('blue');

    let changetheme=()=>{
        if(islight){
         setBackgroundcolor('black')
         setTextcolor('white')
         setFooterbackground('black');
         setCardbackground('khaki');
         setinsidecard('burlywood')
         setbtnbackground('brown')
         setIslight(!islight)
        }
        else{
            setBackgroundcolor('white')
            setTextcolor('black')
            setFooterbackground('lightblue');
            setCardbackground('white');
            setinsidecard('white')
            setbtnbackground('blue')
            setIslight(!islight)
        }
    }
    return(
        <DarkContext.Provider value={{backgroungcolor,textcolor,footerbackground,cardbackground,btnbackground, insidecard,changetheme}}>
            {props.children}
        </DarkContext.Provider>
    )
}