import React, { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
    // if(typeof onBefore !== "function"){
    //     return;
    // }
    const handle = (event) => {
        const {clientY} = event;
        if(clientY <= 0) {
            onBefore();
        }
    }
    useEffect(() => {
        document.addEventListener("mouseleave", handle) // mouse가 document를 벗어났을 때
        return () => document.removeEventListener("mouseleave", handle) // componentWillUnmount
    }, []); // dependency 추가
}

const UseBeforeLeave = () => {
    const begForLife = () => console.log("Please don't leave");
    useBeforeLeave(begForLife);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

export default UseBeforeLeave;