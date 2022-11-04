import './App.css';
import FormHeader from './components/FormHeader/FormHeader';
import FormInputNum1 from './components/FormInput/FormInputNum1';
import FormInputNum2 from './components/FormInput/FormInputNum2';
import ResultComponent from './components/ResultComponent/ResultComponent';
import CalculationButton from './components/CalculationButton/CalculationButton';
import { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState("");
  const getNumber1 = (event) => {
    setNumber1(event.target.value); console.log(number1)
  }

  const [number2, setNumber2] = useState("");
  const getNumber2 = (event) => {
    setNumber2(event.target.value); console.log(number1)
  }

  const [result, setResult] = useState("");

  const Calculate = (calculation) => {
    if (calculation === "+") { setResult(parseFloat(number1) + parseFloat(number2)) }
    else if (calculation === "-") { setResult(parseFloat(number1) - parseFloat(number2)) }
    else if (calculation === "*") { setResult(parseFloat(number1) * parseFloat(number2)) }
    else { setResult(parseFloat(number1) / parseFloat(number2)) }
  }

  return (
    <>
      <center>
        <FormHeader />
        <FormInputNum1 getNumber1={getNumber1} />
        <FormInputNum2 getNumber2={getNumber2} />
        <ResultComponent result={result} />
        <CalculationButton calculator="+" Calculate={Calculate} />
        <CalculationButton calculator="-" Calculate={Calculate} />
        <CalculationButton calculator="*" Calculate={Calculate} />
        <CalculationButton calculator="/" Calculate={Calculate} />
      </center>
    </>
  );
}
export default App;