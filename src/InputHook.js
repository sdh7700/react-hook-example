import React, { useState } from "react";

// 전혀 다른 함수임. 분리해서 쓸 수도 있음!
const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        const { 
            target: { value } 
        } = event;
        let willUpdate = true;
        if(typeof validator === "function"){
            willUpdate = validator(value);
        }
        if(willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
}
const InputHook = () => {
    const maxLength = (value) => !value.includes("@");
    const name = useInput("Mr.", maxLength);
    return (
        <>
            <h1>Hello</h1>
            <input placeholder="Name" {...name} />
        </>
    );
}

export default InputHook;