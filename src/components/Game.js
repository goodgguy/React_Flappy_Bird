import React,{ useState, useEffect } from 'react'

import {connect} from 'react-redux'

import Bird from './Bird'
import Pipe from './Pipe'
import Foreground from './Foreground'

import BgImage from '../images/bg.png';

const Game = ({status,start})=>{
    useEffect(() =>{
        const handleKeyPress= (e) =>{
            if(e.keyCode ===32)
            {
                fly()
            }

            if(status !== 'playing'){
                start();
            }
        }
        document.addEventListener('keypress', handleKeyPress)
    },[])
    console.log(status);
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

const mapStateToProps = ({game}) => (
    {status: game.status}
)

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Game);