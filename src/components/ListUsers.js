import React from 'react';
import User from './User';

const ListUsers = ({ filterUser }) => (
  <div className="row">
    { 
      filterUser.map((e, i) => (
      <User
        key={i}
        user={e}
      />
      ))
    }
  </div>
)

export default ListUsers;