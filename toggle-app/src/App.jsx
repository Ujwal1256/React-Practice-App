import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleButton from './ToggleButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ToggleButton label="Power" />
      <ToggleButton label="Wi-Fi" />
      <ToggleButton />
    </>
  )
}

export default App
