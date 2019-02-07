import React from 'react';
import User from './User';

const ProjectList = ({users}) => {
  return (
    <div className="usersList bg-info p-3 rounded-bottom">
      {users && users.map(user => {
        return (
          <User user={user} key={user.general.lastName} />
        )
      })} 
    </div>
  )
};

export default ProjectList;