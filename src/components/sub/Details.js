import React from 'react';

const Details = ({user}) => {
    return(
        <div className="bg-light rounded p-4 details"> 
            <div className="mainInfo">
                <img src={user.general.avatar} className="shadow-lg" alt=""/>
                <div>
                    <h2 className="text-center font-weight-bold">{user.general.firstName} {user.general.lastName}</h2>
                    <p className="">{user.job.title} - {user.job.company}</p>
                </div>
            </div>
            <div className="otherInfo">
                <div>
                    <h4>Contact</h4>
                    <div className="contact">
                        <p><span>Email:</span> {user.contact.email}</p>
                        <p><span>Phone:</span> {user.contact.phone}</p>
                    </div>
                </div>
                <div>
                    <h4>Address</h4>
                    <div className="address">
                        <p><span>Street:</span> {user.address.street}</p>
                        <p><span>City:</span> {user.address.city}</p>
                        <p><span>ZipCode:</span> {user.address.zipCode}</p>
                        <p><span>Country:</span> {user.address.country}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Details;