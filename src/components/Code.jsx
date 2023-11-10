import React, { useContext } from 'react'
import Editor from './Editor'
import { Box,styled } from '@mui/material'
import { Datacontext } from '../context/Dataprovider'

const Container=styled(Box)`
display:flex;
background-color:#060606;
`

function Code() {

  const{html,sethtml,css,setcss,js,setjs}=useContext(Datacontext)
  return (
   <Container>
   
   
   <Editor heading="HTML" icon="/" color="#FF3C41" value={html} onChange={sethtml}/>
   <Editor heading="CSS" icon="+" color="#0EBEFF" value={css} onChange={setcss}/>
   <Editor heading="Javascript" icon="{} " color="#FCD000" value={js} onChange={setjs} />
   </Container>
    
   
  )
}

export default Code
