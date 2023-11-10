import React from 'react'
import Home from './components/Home'
import Dataprovider from './context/Dataprovider'
function App() {
  return (
   <div>
   <Dataprovider >
   
   <Home/>
   </Dataprovider>
   </div>
  )
}

export default App
