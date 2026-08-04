import { useContext } from "react"
import { useUser } from "../hooks/useUser"
function StudentProfile({studentdata}){
  const a=useUser()
  return(
    <div>
      <h2>Name: {studentdata.name}</h2>
      <h2>Email: {studentdata.email}</h2>
      <h2>program: {studentdata.program}</h2>
      <br></br>
      <h2>Name: {a.name}</h2>
      <h2>Email: {a.email}</h2>
      <h2>Program: {a.program}</h2>
    </div>
  )
}
export default StudentProfile