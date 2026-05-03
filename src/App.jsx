import { useEffect, useState } from 'react';
function App() {
    const [data, setData] = useState("");
  const [error, setErors] = useState("");
  const [notes, setNotes] = useState([]);

  function handelSmit(data) {
    if (data.length < 5) {
      setErors("min 5")
    } else {
      setData("");
      setErors("");
      setNotes([...notes, data])
    }
  }
  function handeldelet(index) {
    setNotes(notes.filter((t, i) => i !== index))
  }

return (<>
  <input placeholder='type note' onChange={(e) => { setData(e.target.value) }} value={data} />
  {error && <p>{error}</p>}
 
  <button onClick={() => { handelSmit(data) }}>add</button>
  {notes.map((item, index) => {return <div key={index}> <p>{item}</p> 
  <button onClick={() => { handeldelet(index) }}>delet</button></div>})}
</>
)
}
export default App