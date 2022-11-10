import { useState } from 'react';
import './App.css';
import Header from './components/HeaderComponent/HeaderComponent';
import Button from './components/ButtonComponent/ButtonComponent';
import Result from './components/ResultComponent/ResultComponent';

function App() {
  const [result, setResult] = useState(0);
  const Change = (button) => {
    if (button === "Decrement") setResult(result - 1);
    else if (button === "Increment") setResult(result + 1);
  }

  return (
    <div className="App">
      <center>
        <Header />
        <Result result={result} />
        <div className="button">
          <Button button="Increment" Change={Change} />
          <Button button="Decrement" Change={Change} />
        </div>
      </center>
    </div>
  );
}

export default App;