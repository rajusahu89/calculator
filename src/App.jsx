import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("")
  const handle=(e)=>{
    setCount(count.concat(e.target.value))
  }
  const handleclear=()=>{
    setCount("")
  }
  
  const calculate=()=>{
    setCount(eval(count))
  }
  
  const back=()=>{
    setCount(count.slice(0,-1))
  }
  const square=()=>{
    const square=Math.sqrt(count)
    console.log(typeof count)
    setCount(square)
  }
  
  return (
    <div className="App">
      <div id='calc'>
        <input type="text" placeholder="0" id='ans'  value={count}/>
        <br />
        <input type="button" value="9" id="button" onClick={handle} />
        <input type="button" value="8" id="button" onClick={handle} />
        <input type="button" value="7" id="button" onClick={handle} />
        <input type="button" value="+" id="button" onClick={handle} />
        <br />
        <input type="button" value="6" id="button" onClick={handle} />
        <input type="button" value="5" id="button" onClick={handle} />
        <input type="button" value="4" id="button" onClick={handle} />
        <input type="button" value="-" id="button" onClick={handle} />
        <input type="button" value="3"  id="button" onClick={handle}/>
        <input type="button" value="2" id="button" onClick={handle}/>
        <input type="button" value="1" id="button" />
        <input type="button" value="*" id="button"  onClick={handle}/>
        <input type="button" value="0"  id="button" onClick={handle}/>
        <input type="button" value="S" id="button"  onClick={square}/>

        <input type="button" value="/"id="button"  onClick={handle}/>
        <input type="button" value="%" id="button" onClick={handle} />
        {/* <input type="button" value="." id="button" onClick={handle}/> */}
        <input type="button" value="=" id='btn' onClick={calculate} />
        <input type="button" value="back"  id='btn' onClick={back} />
        <input type="button" value="clear"  id='btn' onClick={handleclear} />
      </div>
        
    </div>
  )
}

export default App
