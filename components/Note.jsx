import React from 'react';

export default function Note (props) {
    let {title, des} = props;
    return(
        <div className='bg-success bg-opacity-10 p-3 m-2 rounded-2 border-dark'>
            <h3 className='text-danger'>{title}</h3>
            <p>{des}</p>
            <button className='btn btn-outline-primary'>Save Note</button>
        </div>
    )
    
} 