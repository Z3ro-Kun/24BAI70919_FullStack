import StudentProfile from "./StudentProfile";
import { useState } from "react";


function CourseList({d, enroll, update}){

  return(
    <div>
    <StudentProfile studentdata={d}/>
    <h3>React Basics  999Rs</h3> <button onClick={update}>Enroll</button>
    <h3>Node.js Essentials  1199Rs</h3> <button onClick={update}>Enroll</button>
    <h3>UI/UX Design 799Rs</h3> <button onClick={update}>Enroll</button>
    <h3>Enrollment: {enroll}</h3>
    </div>
  )
}
export default CourseList