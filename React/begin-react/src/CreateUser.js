import React from 'react';

function CreateUser({ username, email, onChange, onCreate}) {
  console.log('CreateUser');
  return (
    <div>
      <input 
        name="username"
        placeholder="account name"
        onChange={onChange}
        value={username}
      />
      <input 
        name="email"
        placeholder="email"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>Apply</button>
    </div>
  )
}

export default React.memo(CreateUser);