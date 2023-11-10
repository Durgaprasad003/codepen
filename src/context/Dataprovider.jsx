import { createContext, useState } from "react";

export const Datacontext=createContext();



function Dataprovider({children}) {
  const[html,sethtml]=useState("");
  const[css,setcss]=useState("");
  const[js,setjs]=useState("")
  return (
    <Datacontext.Provider value={{html,sethtml,css,setcss,js,setjs

    }}>
    {children}
    </Datacontext.Provider>
  )
}

export default Dataprovider
