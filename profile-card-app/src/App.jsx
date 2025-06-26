import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <ProfileCard
        name="Ujwal Jakhamate"
        age={22}
        bio="I’m a passionate developer who loves creating intuitive user experiences. I also enjoy contributing to open-source projects and writing tech blogs."
      />

      <ProfileCard
        age={25}
 
      />
    </div>
    </>
  )
}

export default App
