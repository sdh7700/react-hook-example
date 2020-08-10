import React, { useRef, useEffect } from 'react';

const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if(element.current){
            element.current.addEventListener("mouseenter", onClick);
        }
        return () => {
            if(element.current){
                element.current.removeEventListener("mouseenter", onClick);
            }
        }
    }, []);
    return element;
}

const UseClickTest = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);
    return (
        <div>
            <h1 ref={title}>Hi~!</h1>
        </div>
    );
}

export default UseClickTest;