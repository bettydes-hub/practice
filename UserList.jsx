import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { List, Card, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatus } from '../redux/userStatusSlice.js';

const fetchUsers = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
};

export default function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const userStatus = useSelector(state => state.userStatus);
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={data}
      renderItem={user => (
        <List.Item>
          <Card title={user.name}>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
            <Switch
              checked={userStatus[user.id] || false}
              onChange={() => dispatch(toggleStatus(user.id))}
              checkedChildren="Active"
              unCheckedChildren="Inactive"
            />
          </Card>
        </List.Item>
      )}
    />
  );
}
