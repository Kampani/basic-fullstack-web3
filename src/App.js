import React, { useState, useEffect, useRef } from 'react';

export function App() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);


  useEffect(() => {
    //console.log(count);
    console.log(refCount);
  });

  return (
    <>
      <h1>Hello there</h1>
      <button onClick = {() => {setCount(count+1)}}>state-click</button>
      <button onClick = {() => {refCount.current+=1}}>ref-click</button>
    </>
  );
};




