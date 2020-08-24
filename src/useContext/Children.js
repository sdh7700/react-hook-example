import React, { useContext } from 'react';
import { MainContext } from './UseContext';
import { PostsContext } from './Posts';

const Children = () => {
    const user = useContext(MainContext);
    const posts = useContext(PostsContext);

    let label = 'user';
    if(user.isAdmin) {
        label = 'admin';
    }

    return (
        <div>
            <div>{label}</div>
            <div>{user.nickname}</div>
            <div>{posts.map((post, index) => (
                <div key={index}>
                    <div>{post.title}</div>
                    <div>{post.content}</div>
                </div>
            ))}</div>
        </div>
    );
}

export default Children;