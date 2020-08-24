import React, { useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

// https://react.vlpt.us/basic/17-useMemo.html

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는 중...');
    return users.filter(user => user.active).length;
}

function UseMemo() {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const {username, email} = inputs; // 비구조화 할당을 통해 값 추출
    const onChange = e => {
        const {name, value} = e.target; // 우선 e.target 에서 name과 value를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]:value // name 키를 가진 값을 value로 설정
        });
    };

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ])
}