import { createContext, useContext, useEffect, useState } from 'react'
import './App.css'

function App() {

  const [selectId, setSelectId] = useState(1)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${selectId}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }, [selectId]) // watching depadencies 'selectId' if update it's will call this useEffect again
  

  const [user, setUser] = useState({
    name: "cos9iwo",
    imageUrl: "https://media.discordapp.net/attachments/909065818237718608/1079248174784467104/270040687_734421277530170_7796251460781359228_n.jpg"    
  })
  const UserContext = createContext() // create context 'UserContext'
  
  function Profile() {
    const user = useContext(UserContext) // use context 'UserContext'
    return (
      <>
        <Avatar/>
        <h3>Hi, {user.name}</h3>
      </>
    )
  }

  function Avatar(){
    const user = useContext(UserContext) // use context 'UserContext'
    return (
      <>
        <img class={"avatar"} src={user.imageUrl} alt={`avatar of ${user.name}`} />
      </>
    )
  }
  
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <h2>Parent Component</h2>
        <Profile/>
      </UserContext.Provider>
    </div>
  )

}

export default App
