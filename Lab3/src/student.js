import React from "react";
import Course from './courses';
 const Student =props => {
 return(
     <>
      <p> 
          Student <b> {props.name}</b> with student number <b>{props.number} </b>
      </p>
      <Course enrolled={props.enrolled}/>
      </>
 );
  
 };
 export default Student;