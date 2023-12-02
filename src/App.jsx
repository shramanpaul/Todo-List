import React from 'react';
import Routing from './components/Routes';
import  { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className="text-blue-500">This text is blue using Tailwind CSS!</div> */}
  <Routing/>
     
    </>
  )
}

export default App
