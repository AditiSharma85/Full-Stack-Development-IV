import axios from "axios";
import React from "react";
class DeleteStudent extends React.Component{
    state={
        id: ""
    }
   /* handleChange = event => {
        this.setState({
            id: event.target.value
          });
    };*/
    handleSubmit = event => {
        this.setState({
            id: event.target.value 
        });
        const userId = {
            id: this.state.id
          };
           event.preventDefault();
           axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
           .then(res => {
                console.log(res);
                console.log(res.data);
                            
          })
          };

           
    
    render() { 
        return ( 
        <div>
            <form onSubmit={this.handleSubmit}>
                <button type="submit">Delete</button>
            </form>
        </div>
     );
}
};



export default DeleteStudent;

