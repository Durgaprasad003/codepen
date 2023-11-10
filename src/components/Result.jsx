import React, { useContext, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";

import { Datacontext } from "../context/Dataprovider";
const Container=styled(Box)`
height:41vh;
`

function Result() {
  const [src, setsrc] = useState("");
  const { html, css, js } = useContext(Datacontext);
  const sourcecode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>

    `;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setsrc(sourcecode);
    }, 1000);
    return ()=>clearTimeout(timeout)
  }, [html, css, js]);
  return (
    <Container>
    <iframe
    srcDoc={sourcecode}
    title="Output"
    sandbox="allow-scripts"
    frameBorder={0}
    width="100%"
    height="100%"
    />
    </Container>
   
  );
}

export default Result;
