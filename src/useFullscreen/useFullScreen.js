import React, { useRef } from 'react';
import { isElementOfType } from 'react-dom/test-utils';

const useFullScreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
        if(element.current){
            element.current.requestFullscreen();
            if(callback && typeof callback === "function"){
                callback(true);
            }
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if(callback && typeof callback === "function"){
            callback(false);
        }
    }
    return {element, triggerFull, exitFull};
}
const UseFullScreen = () => {
    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small");
    }
    const {element, triggerFull, exitFull} = useFullScreen(onFullS);
    return (
        <div>
            <div ref={element}>
            <img 
                style={{height:"200px", width:"340px"}}src="http://image.cine21.com/resize/cine21/still/2019/0207/14_46_35__5c5bc63b54e43[H800-].jpg" 
            />
            <button onClick={exitFull}>Exit Fullscreen</button>
            </div>
            <button onClick={triggerFull}>make fullscreen</button>
        </div>
    );
};

export default UseFullScreen;