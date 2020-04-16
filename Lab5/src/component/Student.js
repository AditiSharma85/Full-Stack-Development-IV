import React from 'react';
const Student=({match})=>{
    const studentname=match.params.studentname;
    const studentno=match.params.studentno;
    const studentdis=studentno?"The Student no. is "+studentno:"";
    return(
        <div>
            <>
            <p>Student</p>
            
              <div><p>The Student name is "{studentname}!"</p></div>
              <div><p>{studentdis}</p></div>              
         </>  
         </div>

    );
  };
  export default Student;