import React, { useRef, useEffect } from 'react';

const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        // Mount 시 useEffect는 이것을 호출
        // componentDidMount
        if(element.current){ // reference 안에 element.current가 있는지 확인
            element.current.addEventListener("click", onClick); // 조건이 만족되면 click 이벤트를 부여
        }
        // componentWillUnmount 후에 eventlistener를 정리해 줘야 함
        // componentWillUnmount 일 때 return을 한다
        // 네가 function을 return 받았다면, 그 function은 componentWillUnmount 로부터 호출된 것임.
        return () => {
            if(element.current){
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []); // dependency가 없기 때문에 click 이벤트는 영원함. 만약 []를 없앤다면 매번 update 시마다 eventListener가 추가된다. 그것은 잘못된것.
    return element;
}
const UseClick = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello); // useClick 에서 element라는 useRef를 생성해서 그거를 return해줌 => 즉 title은 useRef 가 됨
    return (
        <div>
            <h1 ref={title}>Hi</h1>
        </div>
    );
};

export default UseClick;