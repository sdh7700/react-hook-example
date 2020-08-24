import React, { createContext } from 'react';
import Children from './Children';

export const PostsContext = createContext();

const Posts = () => {
    const posts = [
        {
            title: 'useContext 알아보기',
            content: '이번 편에서는 React Context를 ...'
        }
    ];

    return (
        <PostsContext.Provider value={posts}>
            <Children />
        </PostsContext.Provider>
    );
}

export default Posts;