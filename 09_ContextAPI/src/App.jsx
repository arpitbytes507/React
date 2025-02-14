import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Card from './Components/Card'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Modal from './Components/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <UserContextProvider>
        <h1>Vite + React</h1>
        <Card/>
        <Form/>
        <Modal/>
        <Footer/>
    </UserContextProvider>
    
  )
}

export default App
