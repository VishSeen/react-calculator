
import { useState } from 'react';
import ButtonList from './Components/ButtonList';
import Display from './Components/Display';

function App() {

  const [number, setNumber] = useState(0);

  const btnClick = (e) => {
    let val = e.target.innerText
    if(val === "AC") {
      setNumber(0);
    } else if(number == 0) {
      setNumber(val)
    } else {
      setNumber(number + "" + val);
    }
  }



  return (
    <div className="App">
      <Display value={number}/>

      <ButtonList click={btnClick} />
    </div>
  );
}

export default App;
