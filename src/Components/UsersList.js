import React, {useEffect, useState} from "react";
import axios from "axios";
import UserCard from "./UserCard";

    const UsersList = () => {
    const [user , setUser] =  useState([])

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({data})=>setUser(data))
    }, []);

    const handleDelete = (userId) => {
        const deleteUsers = user.filter(user => user.id !== userId)
        setUser(deleteUsers)
    };
        return (
            <div className={'container'}>
                <div>
                    <UserCard user={user} handleDelete={handleDelete}/>
                </div>
            </div>
        );
}

export default UsersList