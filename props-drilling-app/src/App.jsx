import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MiddleMain from './components/MiddleMain'

function App() {
  const [username, setUsername] = useState('')

  return (
    <>
    <h1>Props Drilling App</h1>
    <div>
      <label > Enter Your Username</label>
      <input type="text" 
        value={username}
        placeholder='Enter your Name'
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginLeft: "10px", padding:"10px", borderRadius:"10px" }}
      />
    </div>

      <MiddleMain user={username}/>
    </>
  )
}

export default App
