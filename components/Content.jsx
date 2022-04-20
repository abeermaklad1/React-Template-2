import React from 'react';
import Card from './Card';
import {useCounter} from '../hooks/useCounter';

export default function Content () {
    let {counter, increaseHandler, dncreaseHandler} = useCounter();
    return(
        <div className=''>
            <h1>Counter: {counter}</h1>
            <div className='row container'>
                <div className='col-3'>
                <Card title="Card 1" btnTitle="Link 1"/>
                </div>

                <div className='col-3'>
                <Card title="Card 1" btnTitle="Link 2"/>
                </div>

                <div className='col-3'>
                <Card title="Card 3" btnTitle="Link 3">
                    <div className='bg-info'>Hello Children</div>
                </Card>
                </div>
            </div>   
        </div>
    )
    
} 