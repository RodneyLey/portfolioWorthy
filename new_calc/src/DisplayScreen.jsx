import "./DisplayScreen.css"
function DisplayScreen({displayValue}){


  return(
    <div className={"myLCD"}>
      <h1 className={"calculationArea"}>{displayValue}</h1>
    </div>
  )
}

export default DisplayScreen