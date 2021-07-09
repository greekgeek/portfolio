import React from 'react';

export default function Home() {
  const TEMPLATE = (
    <div style={{"background": `url(${process.env.PUBLIC_URL}/logo512.png`,"backgroundSize": "contain"}}>Home</div>
  );
  return TEMPLATE;
}