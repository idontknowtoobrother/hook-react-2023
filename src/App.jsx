import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [selectId, setSelectId] = useState(1)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${selectId}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }, [selectId]) // watching depadencies 'selectId' if update it's will call this useEffect again

  return (
    <div className="App">

    </div>
  )
}

export default App
