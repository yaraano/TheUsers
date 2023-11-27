import React, {useEffect, useState} from "react";
import axios from "axios";
import UsersList from "../Components/UsersList";
const HomePages = ()=>{
    const [users,setUsers]=useState([])

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => {
                console.log(data)
                setUsers(data)
            })
    }, []);

    return(
        <div>
            <UsersList users={users}/>
        </div>
    )
}

export default HomePages