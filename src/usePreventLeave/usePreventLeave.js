import React from 'react';

const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }
    // beforeunload는 window가 닫히기 전에 function이 실행되는 것을 허락함. 혹은 네 페이지를 떠날 때
    const enablePrevent = () => window.addEventListener("beforeunload", listener); 
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);
    return {enablePrevent, disablePrevent};
}
const UsePreventLeave = () => {
    const {enablePrevent, disablePrevent} = usePreventLeave();
    
    return (
        <div>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
}

export default UsePreventLeave;