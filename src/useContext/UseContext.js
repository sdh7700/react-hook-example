import React, { createContext } from 'react';
import Posts from './Posts';

export const MainContext = createContext();

const UseContext = () => {
    const user = {
        nickname: 'danuel',
        isAdmin: true
    };

    return (
        <MainContext.Provider value={user}>
            <div>
                <Posts />
            </div>
        </MainContext.Provider>
    );
}

export default UseContext;