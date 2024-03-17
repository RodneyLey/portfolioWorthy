import SingleButton from "./singleButton.jsx";
import './AllButtons.css'
function AllButtons({updateDisplay}){
  return(
    <div className={"buttonsContainer"}>

      <SingleButton specificNumber={7} updateDisplay={(specificNumber) => updateDisplay(specificNumber, "newValue")}/>
      <SingleButton specificNumber={8} updateDisplay={(specificNumber) => updateDisplay(specificNumber, "newValue")}/>
      <SingleButton specificNumber={9} updateDisplay={(specificNumber) => updateDisplay(specificNumber, "newValue")}/>
      <SingleButton specificNumber={"*"} updateDisplay={() => updateDisplay("*", "multiply")}/>
      <SingleButton specificNumber={4} updateDisplay={(specificNumber) => updateDisplay(specificNumber, "newValue")}/>
      <SingleButton specificNumber={5} updateDisplay={(specificNumber) => updateDisplay(specificNumber, "newValue")}/>
      <SingleButton specificNumber={6} updateDisplay={(specificNumber) => updateDisplay(specificNumber, "newValue")}/>
      <SingleButton specificNumber={"-"} updateDisplay={() => updateDisplay("-", "subtract")}/>
      <SingleButton specificNumber={1} updateDisplay={(specificNumber) => updateDisplay(specificNumber, "newValue")}/>
      <SingleButton specificNumber={2} updateDisplay={(specificNumber) => updateDisplay(specificNumber, "newValue")}/>
      <SingleButton specificNumber={3} updateDisplay={(specificNumber) => updateDisplay(specificNumber, "newValue")}/>
      <SingleButton specificNumber={"+"} updateDisplay={() => updateDisplay("+", "add")}/>
      <SingleButton specificNumber={"C"} updateDisplay={() => updateDisplay("", "clear")}/>
      <SingleButton specificNumber={0} updateDisplay={(specificNumber) => updateDisplay(specificNumber, "newValue")}/>
      <SingleButton specificNumber={"."} updateDisplay={(specificNumber) => updateDisplay(specificNumber, "newValue")}/>
      <SingleButton specificNumber={"="} updateDisplay={() => updateDisplay("=", "equal")}/>
    </div>
  )
}
export default AllButtons