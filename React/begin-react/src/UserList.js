import React, { useEffect } from 'react';

const User = React.memo(function User({user, onRemove, onToggle}){
  // useEffect(() => {
  //   console.log('user 값이 설정됨');
  //   console.log(user);
  //   return () => {
  //     console.log('user 값이 바뀌기 전');
  //     console.log(user);
  //   }
  // }, [user]);
  const { username, email, id, active} = user;
  return (
    <div>
      <b 
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer'
        }}
        onClick={()=>onToggle(id)}
      >
        {username}
      </b> 
      &nbsp;
      <span>({email})</span>
      <button onClick={()=> onRemove(id)}>Delete</button>
    </div>
  )
});

function UserList({users, onRemove, onToggle}) {
  return (
    <div>
      {users.map(user => 
        <User 
          user={user} 
          key={user.id} 
          onRemove={onRemove}
          onToggle={onToggle}
        />)}
    </div>
  )
}

export default React.memo(
  UserList, 
  (prevProps, nextProps) => nextProps.users === prevProps.users
);