import React, { useReducer } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

const initialState = {
  inputs: {
    name: '',
    email: ''
  }, 
  users: [
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
  ]
};

function reducer(state, action) {
  return state;
}

function AppRe() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs;

  return (
    <>
      <CreateUser
        username={username}
        email={email}
      />
      <UserList 
        users={users} 
      />
      <div>활성 사용자 수 : 0</div>
    </>
  );
}

export default AppRe;
