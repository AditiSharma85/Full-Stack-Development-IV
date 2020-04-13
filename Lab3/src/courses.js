import React from 'react';
const Course=(props)=>{
    let rows=[];
    for (let i=0;i<props.enrolled;i++){
      rows.push(<p>Student is enrolled in <b>Course {i}</b></p>)
    }
    return rows;
  };

/*before Challenge bit
const Course =props => {
    return(
         <p> 
             Student is enrolled in <b>Course {props.enrolled}</b>
        </p>
    );
     
    };*/
    export default Course;