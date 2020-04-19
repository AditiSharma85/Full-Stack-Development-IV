import React , {useState, useEffect} from 'react';
import axios from 'axios';

export default function StudentList() {
    const [users,setUsers] = useState([]);
  
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            console.log(res.data);
            const users = res.data;
            setUsers(users);
        });
    },[]);

    return (
        <>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </>
    );
}