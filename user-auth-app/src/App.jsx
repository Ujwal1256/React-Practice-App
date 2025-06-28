import { useState } from 'react'
import './App.css'
import { AuthProvider } from './AuthContext'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (
   <AuthProvider>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
