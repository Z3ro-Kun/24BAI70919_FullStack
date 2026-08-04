import CourseCatalog from "./CourseCatalog"

function Dashboard({data, enroll, update}){
  return(
    <CourseCatalog student={data} enroll={enroll} update={update} />
  )
}
export default Dashboard