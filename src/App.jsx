import { useEffect, useState } from 'react'
import './App.css'

function App() {
const list=[ "iphon" ,"hawawy" , "samsong"]
const [data,setdata]=useState("");
const [update , setupdate]=useState([]);
useEffect (()=>{
  const timer = setTimeout(()=>{ setupdate(list.filter((t)=>t.includes(data)))

  },500 )
},[data])
return (<div>
  <input placeholder='enter search' onChange={(e)=>{setdata(e.target.value)}}/>
  {update.map((item,index)=>{return <li>{item}</li>})}
</div>)
}


export default App