import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    const sayHello = () => console.log("hello");
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    useEffect(sayHello , [number]); // componentDidMount는 기본, componentWillUpdate(number가 변할때만 sayHello 작동
    // useEffect(sayHello , []); => componentWillUpdate는 작동안함
    return (
        <div className="UseEffect">
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
        </div>
    );
};

export default UseEffect;