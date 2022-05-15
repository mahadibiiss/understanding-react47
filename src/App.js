import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';

function App() {
  const [steps , setSteps] = useState(0);
  const handleIcreaseSteps =()=>{
  const newSteps = steps + 1;
  setSteps(newSteps);
  }
  useEffect(()=>{
    console.log('steps')
  },[steps])
  return (
    <div className="App">
      <h3>My steps:{steps}</h3>
      <button onClick={handleIcreaseSteps}>Zikir</button>
      <Device name="phone" steps={steps} price="13500" />
    </div>
  );
}

export default App;
