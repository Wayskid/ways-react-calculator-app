import { useContext } from "react"
import CalculatorContext from "../context/CalculatorContext"


export default function Button({btn}) {

  const {
    handleInput,
    lightOrDark,
    lightDarkButtonStyle
  } = useContext(CalculatorContext)

  return (
    <button 
      onClick={handleInput} 
      type="button" 
      value={btn.value}
      style={lightOrDark ? lightDarkButtonStyle : {}}
    >{btn.value}</button>
  )
}

