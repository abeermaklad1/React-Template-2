import React from 'react';

export default function Card (props) {
    let {title, btnTitle} = props;
    return(
        <div className='bg-light p-3'>
            <h3 className='text-danger'>{title}</h3>
            {props.children}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, quod?</p>
            <button className='btn btn-outline-primary'>{btnTitle}</button>
        </div>
    )
    
} 