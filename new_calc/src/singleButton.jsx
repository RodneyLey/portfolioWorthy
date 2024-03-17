import {useEffect, useState} from "react";
import './singleButton.css'
function SingleButton({specificNumber, updateDisplay}){
  const [message, setMessage] = useState("Hello")
  const buttonClick = () => {
    setMessage("Clicked!")
    // Call the updateDisplay function passed down from props
    updateDisplay(specificNumber);
  }

  useEffect(() => {
    const t = setInterval(()=> (
      setMessage('')
    ),1000);
    return () => clearInterval(t)
  }, [message]);
  return(
    <div className={"myButton"}>
      <h2>{message}</h2>
      <button onClick={buttonClick}>{specificNumber}</button>
    </div>
  )
}

export default SingleButton