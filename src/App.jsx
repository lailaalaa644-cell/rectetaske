import React, { useState, useEffect } from "react";

function App() {
 const [text , settext]=useState("");
 const [state , setstate]=useState("");
 useEffect(()=>{
  if(text.length<10){
    setstate("Too Short")
  }else if(text.length<=20){
    setstate("Good")
  }else{
    setstate("to long")
  }
 },[text]);
 return(
  <div>
    <input placeholder="dmck" type="text" value={text} onChange={(e)=>{settext(e.target.value)}} maxLength={30}/>
    <p>{text.length}/30</p>
    <p>{state}</p>
  </div>
 )
}
export default App;