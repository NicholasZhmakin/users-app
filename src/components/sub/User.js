import React from 'react';
import { NavLink } from 'react-router-dom';

const User = ({user}) => {
    return (
        <div className="userBox bg-info">
            <NavLink to={'/' + user.general.lastName}>
                <img src={user.general.avatar} className='rounded-circle' alt=""/>
                <div className='userBoxTitle'>
                    <h4>{user.general.firstName} {user.general.lastName}</h4>
                    <p>{user.job.title}</p>
                </div>
            </NavLink>
        </div>
    )
};

export default User;