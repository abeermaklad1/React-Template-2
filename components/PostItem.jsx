import React from 'react';

export default function PostItem (props) {
    let {btnTitle, desc, title} = props;
    

    return(
        <div className='bg-light p-3 mb-3'>
            <h3>{title}</h3>
            <p>{desc}</p>
            <button className='btn btn-danger'>Link {btnTitle}</button>
        </div>
    )
    
} 