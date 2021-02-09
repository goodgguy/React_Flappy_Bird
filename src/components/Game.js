import React,{ useState, useEffect } from 'react'

import Bird from './Bird'
import Pipe from './Pipe'
import Foreground from './Foreground'

import BgImage from '../images/bg.png';

const Game = ()=>{
    useEffect(() =>{
        const handleKeyPress= (e) =>{
            if(e.keyCode ===32)
            {
                fly()
            }
        }
        document.addEventListener('keypress', handleKeyPress)
    },[])
    return (
        <div
        style={{
            position: 'relative',
            width: 288,
            height: 512,
            backgroundColor: 'pink',
            background:`url(${BgImage})`,
        }}>
        <Bird/>
        <Pipe/>
        <Foreground/>
        </div>
    )
}

const fly= () =>{
    console.log('tuanquen');
}

export default Game;