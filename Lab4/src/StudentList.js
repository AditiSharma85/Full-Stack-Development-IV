import axios from "axios";
import React from "react";
import AddStudent from'./AddStudent';
import DeleteStudent from'./DeleteStudent';

class UserList extends React.Component {
    state={ 
        users:[]
    };
    
    componentDidMount = () => {
        this.getUsersList();
    }

    getUsersList(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>{
            const users=res.data;
            this.setState({users});
        });
    };
    render() { 
            return ( 
                <>
                <AddStudent/>
                <ul>
            {this.state.users.map(user =>
                <li key={user.id}>{user.name}<DeleteStudent/></li>
                )}
                </ul> 
                
              </>
               
        );
    }
}
 
export default UserList;