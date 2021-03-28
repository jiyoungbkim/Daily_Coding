import React, { useContext } from 'react';
import { UserDispatch } from './AppRe';

const User = React.memo(function User({user}){
  // useEffect(() => {
  //   console.log('user 값이 설정됨');
  //   console.log(user);
  //   return () => {
  //     console.log('user 값이 바뀌기 전');
  //     console.log(user);
  //   }
  // }, [user]);
  const { username, email, id, active} = user;
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b 
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer'
        }}
        onClick={()=> dispatch({
          type: 'TOGGLE_USER',
          id
        })}
      >
        {username}
      </b> 
      &nbsp;
      <span>({email})</span>
      <button onClick={()=> dispatch({
        type: 'REMOVE_USER',
        id
      })}>Delete</button>
    </div>
  )
});

function UserList({users}) {
  return (
    <div>
      {users.map(user => 
        <User 
          user={user} 
          key={user.id} 
        />)}
    </div>
  )
}

export default React.memo(
  UserList, 
  (prevProps, nextProps) => nextProps.users === prevProps.users
);