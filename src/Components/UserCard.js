import React from "react";
import img from './assets/pngegg.png';

const UserCard = ({user, handleDelete}) => {
    return (
        <div className={'row'}>
            {user.map((user) => (
                <div className={'col-4'}>
                    <div className="box">
                        <div className={'inner-box'}>
                            <img src={img} alt=""/>
                            <div className="text-box">
                                <h5>Name: <span key={user.id}>
                                {user.name}</span></h5>
                                <h5>Username: <span key={user.id}>{user.username}</span></h5>
                                <h5>Email: <span key={user.id}>{user.email}</span></h5>
                                <h5>Phone: <span key={user.id}>{user.phone}</span></h5>
                                <div className="btn-box">
                                    <button className={'deleteBtn'} onClick={() => handleDelete(user.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            ))}
        </div>
    )
}
export default UserCard