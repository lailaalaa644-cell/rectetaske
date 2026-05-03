import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const list = [
    "iPhone 15 Pro",
    "Samsung Galaxy S24",
    "MacBook Pro M3",
    "AirPods Pro 2",
    "Google Pixel 8",
    "PlayStation 5",
    "Nintendo Switch",
    "Dell XPS 13",
    "iPad Pro",
    "Sony WH-1000XM5"
  ]

  const [data,setdata]=useState("");
  const [update, setupdete]=useState([]);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setupdete(list.filter((t)=>t.toLowerCase().includes(data.toLowerCase())))
    },500)
  },[data])
  return(
    <div>
      <input placeholder='search' onChange={(e)=>{setdata(e.target.value)}}/>
      {update.map((item,index)=>{return<li>{item}</li>})}
    </div>
  )
}


export default App