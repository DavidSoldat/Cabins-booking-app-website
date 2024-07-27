'use client';
import { useState } from 'react';
('');

function Counter({ users }) {
  const [count, setCount] = useState(0);

  console.log(users);
  return (
    <div>
      <p>There are {users.length}</p>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
}

export default Counter;
