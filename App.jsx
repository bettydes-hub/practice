import React from 'react';
import UserList from './components/UserList.jsx';

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>User Manager Dashboard</h1>
      <UserList />
    </div>
  );
}
