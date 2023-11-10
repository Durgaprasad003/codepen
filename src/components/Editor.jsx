import React, { useState } from "react";
import { Box, Container, styled } from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from "react-codemirror2";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import "../App.css"

const Heading=styled(Box)`
background:#1d1e22;
display:flex;
padding:9px 12px;

`
const Header=styled(Box)`
  display:flex;
  background:#060606;
  color:#AAAEBC;
  justify-content:space-between;
  font-weight:700;
`
const Containers=styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction:column;
padding:0 8px 8px 

`

function Editor({heading,icon,color,value,onChange}) {
  const[open,setopen]=useState(true)
  const Handlechange=(editor,data,value)=>{
    onChange(value);

  }
  return (
    <Containers style={open? null: {flexGrow:0}}>
      <Header>
        <Heading>
          <Box component="span" style={{background:color,height:20,width:20,display:'flex', placeContent:"center",borderRadius:5,marginRight:5,paddingBottom:2,color:"#000"}}>{icon}</Box>{heading}
        </Heading>
        <CloseFullscreenIcon fontSize="small" style={{alignSelf:'center'}} onClick={()=>setopen(previoustate => !previoustate)}/>
      </Header>
      <ControlledEditor  
      className="controlled-editor"
      value={value}
      onBeforeChange={Handlechange}
      
      options={{
        theme:"material",
        lineNumbers: true
      }}
      />
    </Containers>
  );
}

export default Editor;
