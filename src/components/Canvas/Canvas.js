"use client"
import React, { useEffect } from 'react'

export default function Canvas() {
    useEffect(() => {
        const smokeScript = document.createElement('script');
        smokeScript.src = '/smoke.js';
        smokeScript.async = true;
        document.body.appendChild(smokeScript);
    
        return () => {
          // document.body.removeChild(customScript);
          document.body.removeChild(smokeScript);
        };
      }, []);
  return (
    <canvas id="canvas" style={{position:"fixed",width:"100%", height:"100%", zIndex:"0"}}></canvas>
  )
}
