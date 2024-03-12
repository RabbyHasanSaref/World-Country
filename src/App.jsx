import { useState } from 'react';
import './App.css'
import Countris from './component/function/Countris'
import Spinner from './Spinner';

function App() {
  
  const [isloader, setIsloader] = useState(true)
  setTimeout(() => {
    setIsloader(false)
  }, 2000)

  return (
    <>
      <h1>All the countries of the world</h1>
      {isloader ? (<div style={{ width: "100px", margin: "auto",}}> <Spinner></Spinner></div>) : (<div><Countris></Countris></div>)}
    </>
  )

}

export default App;
