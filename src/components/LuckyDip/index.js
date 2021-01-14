import React, {useState, useEffect} from 'react'
import styled, { keyframes, css } from "styled-components";

import './index.css'
import background from './img/background.png'
import cup from './img/cup.png'

const LuckyDip = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const [open, setOpen] = useState(false);
    const [wonNo, setWonNo] = useState(1);
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        if(isClicked&&!open) {
            let randWon = Math.floor(Math.random() * 6) + 1;
            setWonNo(randWon)
            let tempObjects = []
            for(let i = 0; i < 6; i++){
                let temp = 90 - (Math.floor(Math.random() * 5) + 5)*(Math.abs(i - randWon + 1));
                tempObjects.push(temp)
            }
            setObjects(tempObjects)
            console.log(randWon, objects)
            setTimeout(() => {
                setOpen(true)
            }, 4000)
        }
    }, [isClicked, open])
    const example = keyframes`
    0%   {left: 0;}
    100% {left: 90%;}
    `
    const animatedStyle = props =>
    css`
        ${example} 3s 1s both
    `
    const AnimatedObeject = styled.div`
        animation: ${animatedStyle};
    `
    let AnimatedObeject1 = AnimatedObeject
    let AnimatedObeject2 = AnimatedObeject
    let AnimatedObeject3 = AnimatedObeject
    let AnimatedObeject4 = AnimatedObeject
    let AnimatedObeject5 = AnimatedObeject
    let AnimatedObeject6 = AnimatedObeject
    if(objects.length) {
        const example1 = keyframes`
        0%   {left: 0;}
        100% {left: ${objects[0]}%;}
        `
        const animatedStyle1 = props =>
        css`
            ${example1} 3s 1s both
        `
        AnimatedObeject1 = styled.div`
            animation: ${animatedStyle1};
        `
        const example2 = keyframes`
        0%   {left: 0;}
        100% {left: ${objects[1]}%;}
        `
        const animatedStyle2 = props =>
        css`
            ${example2} 3s 1s both
        `
        AnimatedObeject2 = styled.div`
            animation: ${animatedStyle2};
        `
        const example3 = keyframes`
        0%   {left: 0;}
        100% {left: ${objects[2]}%;}
        `
        const animatedStyle3 = props =>
        css`
            ${example3} 3s 1s both
        `
        AnimatedObeject3 = styled.div`
            animation: ${animatedStyle3};
        `
        const example4 = keyframes`
        0%   {left: 0;}
        100% {left: ${objects[3]}%;}
        `
        const animatedStyle4 = props =>
        css`
            ${example4} 3s 1s both
        `
        AnimatedObeject4 = styled.div`
            animation: ${animatedStyle4};
        `
        const example5 = keyframes`
        0%   {left: 0;}
        100% {left: ${objects[4]}%;}
        `
        const animatedStyle5 = props =>
        css`
            ${example5} 3s 1s both
        `
        AnimatedObeject5 = styled.div`
            animation: ${animatedStyle5};
        `
        const example6 = keyframes`
        0%   {left: 0;}
        100% {left: ${objects[5]}%;}
        `
        const animatedStyle6 = props =>
        css`
            ${example6} 3s 1s both
        `
        AnimatedObeject6 = styled.div`
            animation: ${animatedStyle6};
        `
    }

    const WonBox = (
        <div className={`won-box ${open?'won-box-display':''}`}>
            <div className="won-box-inner">
                <div className="trap-trophy">
                    <img src={cup} />
                </div>
                <div className="trap-won">
                    Your Lucky Dip selection<br/>is Trap <div className="won-trap-no">{props.traps[wonNo-1].no}</div>
                </div>
                <div className="trap-name">
                    {props.traps[wonNo-1].name}
                </div>
                <div className="bet-now">
                    Bet Now at
                </div>
                <a target="_blank" href="/out.php?lt=spc&amp;url=1" className="trap-odds">{props.traps[wonNo-1].betAt}</a>
                <div className="race-re-watch" onClick={() => {setOpen(false);}}>Replay Race</div>
            </div>
        </div>
    )
    const PopupDiv = (
        <div className="popup-div">
            <div className="start-button-div" onClick={() => setIsClicked(!isClicked)}>
                Start Lucky Dip
            </div>
        </div>
    )
    return (
        <div style={{maxWidth: '800px', position: 'relative'}}>
            <div className="header">
                <span>Lucky Dip</span>
            </div>
            <div className="track" style={{height: `${isClicked?'auto':'150px'}`}}>
                <img className="track-image" src={background} />
                {!isClicked&&PopupDiv}
                <div className={`dog-number dog-number1 ${isClicked?'dog-number1-display':''}`}>
                    <div className="race-pos-no race-pos-no-1">1</div>
                </div>
                <div className={`dog-number dog-number2 ${isClicked?'dog-number2-display':''}`}>
                    <div className="race-pos-no race-pos-no-2">2</div>
                </div>
                <div className={`dog-number dog-number3 ${isClicked?'dog-number3-display':''}`}>
                    <div className="race-pos-no race-pos-no-3">3</div>
                </div>
                <div className={`dog-number dog-number4 ${isClicked?'dog-number4-display':''}`}>
                    <div className="race-pos-no race-pos-no-4">4</div>
                </div>
                <div className={`dog-number dog-number5 ${isClicked?'dog-number5-display':''}`}>
                    <div className="race-pos-no race-pos-no-5">5</div>
                </div>
                <div className={`dog-number dog-number6 ${isClicked?'dog-number6-display':''}`}>
                    <div className="race-pos-no race-pos-no-6">6</div>
                </div>
                <AnimatedObeject className={`rabbit ${!open&&isClicked?'rabbit-display':''}`}></AnimatedObeject>
                <AnimatedObeject1 className={`dog dog1 ${!open&&isClicked?'dog1-display':''}`}></AnimatedObeject1>
                <div className={`dog dog1 ${open?'dog1-display':''}`} style={{left:`${objects[0]}%`}}></div>
                <AnimatedObeject2 className={`dog dog2 ${!open&&isClicked?'dog2-display':''}`}></AnimatedObeject2>
                <div className={`dog dog2 ${open?'dog2-display':''}`} style={{left:`${objects[1]}%`}}></div>
                <AnimatedObeject3 className={`dog dog3 ${!open&&isClicked?'dog3-display':''}`}></AnimatedObeject3>
                <div className={`dog dog3 ${open?'dog3-display':''}`} style={{left:`${objects[2]}%`}}></div>
                <AnimatedObeject4 className={`dog dog4 ${!open&&isClicked?'dog4-display':''}`}></AnimatedObeject4>
                <div className={`dog dog4 ${open?'dog4-display':''}`} style={{left:`${objects[3]}%`}}></div>
                <AnimatedObeject5 className={`dog dog5 ${!open&&isClicked?'dog5-display':''}`}></AnimatedObeject5>
                <div className={`dog dog5 ${open?'dog5-display':''}`} style={{left:`${objects[4]}%`}}></div>
                <AnimatedObeject6 className={`dog dog6 ${!open&&isClicked?'dog6-display':''}`}></AnimatedObeject6>
                <div className={`dog dog6 ${open?'dog6-display':''}`} style={{left:`${objects[5]}%`}}></div>
            </div>
            {WonBox}
        </div>
    )
}

export default LuckyDip;