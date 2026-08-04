import CourseList from "./CourseList"
function CourseCatalog({student, enroll, update}){
  return(
    <CourseList d={student} enroll={enroll} update={update}/>
  )
}
export default CourseCatalog