import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { createContext } from 'react'
import { UserContext } from './hooks/useUser'
import './App.css'


function App() {
  const user = {
  name: "Karan Mehta",
  email: "karan@gmail.com",
  program: "Web Development"
  };
  const u ={name: "Vinay",
  email: "Vinay@gmail.com",
  program: "AI/ML"
  };
  const [enroll, setEnroll] = useState(0);

  function update() {
    setEnroll(prev => prev + 1);
  }
  return (
    <>
      <Navbar/>
      <UserContext.Provider value={u}>
      <Dashboard data={user} enroll={enroll} update={update}/>
      </UserContext.Provider>
    </>
  )
}

export default App
