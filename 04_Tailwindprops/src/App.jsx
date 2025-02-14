import { useState } from 'react'
import Sample from './Components/Sample'

function App() {
  const [count, setCount] = useState(0)
  let myarr = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
      <h1 className='bg-green-500 text-black'>Tailwind</h1>
      <Sample channel="state" newarr={myarr}/>
      <Sample channel="smp"/>
    </>
  )
}

export default App
