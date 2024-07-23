//import { useState } from 'react'
import react from 'react'
import Signup from "./components/Signup"
import Login from "./components/Login"
import { BrowserRouter , Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <><div className="bg-slate-300">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
     </Routes>
     </BrowserRouter>
     
    
    </div>
     {/* <h1 className='text-4xl text-red-600'>hello world</h1> */}
    
    </>
  )
}

export default App
