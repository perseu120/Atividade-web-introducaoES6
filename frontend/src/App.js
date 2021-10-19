import { useState } from "react";
import User from './pages/Header/User'

function App() {

  const [counter, setCounter] = useState(0);
  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <User/>
    </div>
  );
}

export default App;
