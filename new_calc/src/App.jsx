
import './App.css'
import AllButtons from "./AllButtons.jsx";
import DisplayScreen from "./DisplayScreen.jsx";
import {useState} from "react";
function App() {

  const [displayValue, setDisplayValue] = useState("")
  const [memory, setMemory] = useState(0.0)
  const [operator, setOperator] = useState("")
  const buttonClick = (newValue, operation) => {
    if (operation === "clear") {
      setDisplayValue("");
    } else if (operation === "multiply") {
      setMemory(parseFloat(displayValue));
      setDisplayValue("");
      setOperator("*")
    } else if (operation === "divide") {
      setMemory(parseFloat(displayValue))
      setDisplayValue("");
      setOperator("/")
    } else if (operation === "add") {
      setMemory(parseFloat(displayValue));
      setDisplayValue("");
      setOperator("+")
    } else if (operation === "subtract") {
      setMemory(parseFloat(displayValue));
      setDisplayValue("");
      setOperator("-")
    } else if (operation === "equal") {
      const secondValue = parseFloat(displayValue)
      if (operator === "+") {
        setDisplayValue((memory + secondValue).toFixed(2));
      } else if (operator === "-") {
        setDisplayValue((memory - secondValue).toFixed(2));
      } else if (operator === "*") {
        setDisplayValue((memory * secondValue).toFixed(2));
      }
    } else {
      setDisplayValue(prev => prev + newValue)
    }
  }
  return (
      <div className={"calculatorContainer"}>
        <h1 className={"myHeading"}>My Calculator</h1>
        <DisplayScreen displayValue={displayValue}/><br/>
        <AllButtons updateDisplay={buttonClick}/>
      </div>
  )
}

export default App
