import React, { useRef } from 'react';

const UseRef = () => {
    const potato = useRef();
    setTimeout(() => potato.current.focus(), 5000);
    return (
        <div className="UseRef">
            <div>Hi</div>
            <input ref={potato} placeholder="la" />
        </div>
    );
};

export default UseRef;